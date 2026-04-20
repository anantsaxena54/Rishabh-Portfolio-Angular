import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, inject, viewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-scene',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas class="bg3d"></canvas>`,
  styles: [`
    :host { display: contents; }
    .bg3d {
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      opacity: 0.55;
    }
  `],
})
export class ThreeSceneComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private group?: THREE.Group;
  private dust?: THREE.Points;
  private shards: THREE.Mesh[] = [];
  private rafId = 0;

  private mx = 0; private my = 0; private scrollY = 0;
  private readonly listeners: Array<() => void> = [];

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => this.init());
  }

  private init(): void {
    const canvas = this.canvasRef().nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x0a0908, 8, 30);

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.z = 10;

    // Lights
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const key = new THREE.DirectionalLight(0xe0a96d, 1.2);
    key.position.set(5, 4, 6);
    this.scene.add(key);
    const rim = new THREE.PointLight(0xd4472a, 2.5, 25);
    rim.position.set(-6, -2, 4);
    this.scene.add(rim);

    // Shards group
    this.group = new THREE.Group();
    this.scene.add(this.group);

    const shardGeos = [
      new THREE.OctahedronGeometry(0.4, 0),
      new THREE.IcosahedronGeometry(0.35, 0),
      new THREE.TorusGeometry(0.35, 0.05, 8, 24),
      new THREE.BoxGeometry(0.7, 0.1, 0.5), // film strip
      new THREE.TetrahedronGeometry(0.45, 0),
    ];

    for (let i = 0; i < 24; i++) {
      const geo = shardGeos[i % shardGeos.length];
      const mat = new THREE.MeshStandardMaterial({
        color: i % 3 === 0 ? 0xd4472a : (i % 3 === 1 ? 0xe0a96d : 0xf5efe6),
        metalness: 0.7,
        roughness: 0.3,
        flatShading: true,
        transparent: true,
        opacity: 0.85,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 12 - 3,
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      mesh.userData = {
        rx: (Math.random() - 0.5) * 0.003,
        ry: (Math.random() - 0.5) * 0.004,
        rz: (Math.random() - 0.5) * 0.002,
        baseY: mesh.position.y,
        phase: Math.random() * Math.PI * 2,
        scale: 0.6 + Math.random() * 0.8,
      };
      mesh.scale.setScalar(mesh.userData['scale']);
      this.group.add(mesh);
      this.shards.push(mesh);
    }

    // Dust particles
    const dustGeo = new THREE.BufferGeometry();
    const dustCount = 400;
    const positions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xe0a96d,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    this.dust = new THREE.Points(dustGeo, dustMat);
    this.scene.add(this.dust);

    // Listeners
    const onMove = (e: MouseEvent) => {
      this.mx = e.clientX / window.innerWidth - 0.5;
      this.my = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => { this.scrollY = window.scrollY; };
    const onResize = () => {
      if (!this.camera || !this.renderer) return;
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    this.listeners.push(
      () => window.removeEventListener('mousemove', onMove),
      () => window.removeEventListener('scroll', onScroll),
      () => window.removeEventListener('resize', onResize),
    );

    // Animation loop
    const t0 = performance.now();
    const loop = () => {
      if (!this.renderer || !this.scene || !this.camera || !this.group) return;
      const t = (performance.now() - t0) / 1000;

      this.group.rotation.y = this.scrollY * 0.0004;
      this.group.position.y = this.scrollY * 0.001;

      this.camera.position.x += (this.mx * 1.5 - this.camera.position.x) * 0.04;
      this.camera.position.y += (-this.my * 1.0 - this.camera.position.y) * 0.04;
      this.camera.lookAt(0, 0, 0);

      this.shards.forEach(s => {
        s.rotation.x += s.userData['rx'];
        s.rotation.y += s.userData['ry'];
        s.rotation.z += s.userData['rz'];
        s.position.y = s.userData['baseY'] + Math.sin(t * 0.5 + s.userData['phase']) * 0.3;
      });

      if (this.dust) this.dust.rotation.y = t * 0.02;

      this.renderer.render(this.scene, this.camera);
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  ngOnDestroy(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.listeners.forEach(off => off());

    // Dispose Three.js resources
    this.shards.forEach(s => {
      s.geometry.dispose();
      (s.material as THREE.Material).dispose();
    });
    this.dust?.geometry.dispose();
    (this.dust?.material as THREE.Material | undefined)?.dispose();
    this.renderer?.dispose();
  }
}
