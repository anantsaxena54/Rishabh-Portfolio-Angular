import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, inject, viewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero" id="hero">
      <canvas #shaderCanvas class="hero-canvas"></canvas>
      <div class="hero-overlay"></div>
      <canvas #cameraCanvas class="hero-3d"></canvas>

      <div class="hero-content">
        <div class="hero-kicker">
          <span class="dot"></span>
          <span>Reel / 2020 — 2026 / Mumbai, IN</span>
        </div>

        <div class="hero-intro-script">
          <span #scriptLine>Hey I'm</span>
        </div>

        <h1 class="hero-title">
          <span class="line"><span #line1>Rishabh</span></span>
          <span class="line"><span #line2 class="accent">Sahu</span></span>
        </h1>

        <div class="hero-mid">
           <p class="hero-catchphrase" #catchphrase>
            Frames that <span class="italic">linger</span> — stories that <span class="accent">cut.</span>
          </p>
        </div>

        <div class="hero-bottom">
          <div class="hero-bottom-left">
            <p class="hero-desc">
              <b>Visual Artist | Editor | Cinematographer</b><br>
              Bringing 3+ years of hands-on experience in editing, cinematography, VFX, and colour grading, I’ve worked on many DVCs, lifestyle reels, and travel content for leading brands, integrating AI to elevate both efficiency and creative output.
            </p>

            <div class="hero-education-box">
              <span class="education-header">Education</span>
              <div class="hero-background">
                <div class="bg-item">
                  <span class="bg-label">Degree / 2020 — 2022</span>
                  <div class="bg-title">Bachelor of arts in multimedia and mass communication — St. Andrew's College</div>
                </div>
                <div class="bg-item">
                  <span class="bg-label">Training / 2019 — 2020</span>
                  <div class="bg-title">Filmmaking Diploma — FX School</div>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-scroll">
            <span>Scroll</span>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M6 1V19M6 19L1 14M6 19L11 14" stroke="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly shaderCanvas = viewChild.required<ElementRef<HTMLCanvasElement>>('shaderCanvas');
  private readonly cameraCanvas = viewChild.required<ElementRef<HTMLCanvasElement>>('cameraCanvas');
  private readonly line1 = viewChild.required<ElementRef<HTMLSpanElement>>('line1');
  private readonly line2 = viewChild.required<ElementRef<HTMLSpanElement>>('line2');
  private readonly scriptLine = viewChild.required<ElementRef<HTMLSpanElement>>('scriptLine');
  private readonly catchphrase = viewChild.required<ElementRef<HTMLParagraphElement>>('catchphrase');

  private shaderRaf = 0;
  private cameraRaf = 0;
  private shaderRenderer?: THREE.WebGLRenderer;
  private cameraRenderer?: THREE.WebGLRenderer;
  private cleanups: Array<() => void> = [];

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.initShader();
      this.initCamera();
      this.initTitleReveal();
    });
  }

  // =============================================================
  // 1. Background shader — layered simplex noise, cinematic grade
  // =============================================================
  private initShader(): void {
    const canvas = this.shaderCanvas().nativeElement;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.shaderRenderer = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const frag = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uRes;
      uniform vec2 uMouse;

      vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
      vec2 mod289(vec2 x){return x-floor(x*(1./289.))*289.;}
      vec3 permute(vec3 x){return mod289(((x*34.)+1.)*x);}
      float snoise(vec2 v){
        const vec4 C=vec4(.211324865,.366025403,-.577350269,.024390243);
        vec2 i=floor(v+dot(v,C.yy));
        vec2 x0=v-i+dot(i,C.xx);
        vec2 i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
        vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;
        i=mod289(i);
        vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));
        vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
        m=m*m;m=m*m;
        vec3 x=2.*fract(p*C.www)-1.;
        vec3 h=abs(x)-.5;vec3 ox=floor(x+.5);vec3 a0=x-ox;
        m*=1.792843-.853735*(a0*a0+h*h);
        vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;
        return 130.*dot(m,g);
      }

      void main(){
        vec2 uv = gl_FragCoord.xy / uRes;
        vec2 p = uv - .5;
        p.x *= uRes.x/uRes.y;
        vec2 mouseOff = (uMouse - .5) * .15;

        float n1 = snoise(p*2.5 + vec2(uTime*.08, uTime*.05) + mouseOff);
        float n2 = snoise(p*5.0 + vec2(-uTime*.12, uTime*.09) + mouseOff*2.);
        float n3 = snoise(p*9.0 + vec2(uTime*.2, -uTime*.15));
        float cloud = n1*.6 + n2*.3 + n3*.1;

        float r = length(p);
        float mask = smoothstep(1.1, .2, r);

        vec3 shadow = vec3(.04, .035, .03);
        vec3 amber  = vec3(.88, .66, .43);
        vec3 cinnabar= vec3(.83, .28, .16);

        vec3 col = mix(shadow, amber, smoothstep(-.3, .6, cloud));
        col = mix(col, cinnabar, smoothstep(.4, .9, cloud) * .6);
        col *= mask;

        float scan = sin(uv.y * uRes.y * 1.2) * .04;
        col -= scan;

        float streak = exp(-pow(p.y*14., 2.)) * .15;
        col += vec3(streak * .8, streak * .4, streak * .2);

        col = pow(col, vec3(.95));
        gl_FragColor = vec4(col, 1.);
      }
    `;
    const vert = `void main(){gl_Position=vec4(position,1.);}`;

    const uniforms = {
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    };
    const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: vert, fragmentShader: frag });
    const geo = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geo, mat));

    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      uniforms.uRes.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
    };
    resize();
    const onResize = () => resize();
    const onMove = (e: MouseEvent) => {
      uniforms.uMouse.value.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);
    this.cleanups.push(
      () => window.removeEventListener('resize', onResize),
      () => window.removeEventListener('mousemove', onMove),
      () => { geo.dispose(); mat.dispose(); },
    );

    const t0 = performance.now();
    const loop = () => {
      uniforms.uTime.value = (performance.now() - t0) / 1000;
      renderer.render(scene, camera);
      this.shaderRaf = requestAnimationFrame(loop);
    };
    this.shaderRaf = requestAnimationFrame(loop);
  }

  // =============================================================
  // 2. Floating low-poly cinema camera
  // =============================================================
  private initCamera(): void {
    const canvas = this.cameraCanvas().nativeElement;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.cameraRenderer = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const key = new THREE.DirectionalLight(0xffe8cc, 1.8);
    key.position.set(4, 3, 5);
    scene.add(key);
    const rim = new THREE.PointLight(0xd4472a, 3, 15);
    rim.position.set(-3, -1, 2);
    scene.add(rim);
    const fill = new THREE.PointLight(0xe0a96d, 1.5, 12);
    fill.position.set(3, 2, -2);
    scene.add(fill);

    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1a1917, metalness: 0.85, roughness: 0.35 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0xd4472a, metalness: 0.6, roughness: 0.4, emissive: 0x3a0f06, emissiveIntensity: 0.5 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0a0908, metalness: 0.95, roughness: 0.1, emissive: 0xe0a96d, emissiveIntensity: 0.3 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x4a4540, metalness: 0.9, roughness: 0.25 });

    const cam = new THREE.Group();

    const body = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.1, 1.0), bodyMat);
    cam.add(body);

    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 0.15), metalMat);
    handle.position.y = 0.7;
    cam.add(handle);
    const hL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.15, 0.15), metalMat);
    hL.position.set(-0.4, 0.57, 0); cam.add(hL);
    const hR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.15, 0.15), metalMat);
    hR.position.set(0.4, 0.57, 0); cam.add(hR);

    const lens1 = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.3, 24), metalMat);
    lens1.rotation.z = Math.PI / 2; lens1.position.x = 0.95; cam.add(lens1);
    const lens2 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.42, 0.18, 24), bodyMat);
    lens2.rotation.z = Math.PI / 2; lens2.position.x = 1.18; cam.add(lens2);
    const lens3 = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.4, 0.15, 24), metalMat);
    lens3.rotation.z = Math.PI / 2; lens3.position.x = 1.33; cam.add(lens3);

    const glass = new THREE.Mesh(new THREE.CircleGeometry(0.34, 32), glassMat);
    glass.rotation.y = Math.PI / 2; glass.position.x = 1.41; cam.add(glass);

    const recBtn = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.04, 16), accentMat);
    recBtn.rotation.z = Math.PI / 2; recBtn.position.set(0.81, 0.35, 0.3); cam.add(recBtn);

    const vf = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.28, 0.25), bodyMat);
    vf.position.set(-0.4, 0.45, 0); cam.add(vf);
    const vfLens = new THREE.Mesh(new THREE.CircleGeometry(0.08, 20), glassMat);
    vfLens.rotation.y = -Math.PI / 2; vfLens.position.set(-0.58, 0.45, 0); cam.add(vfLens);

    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.3, 0.4), accentMat);
    slot.position.set(0.81, -0.1, 0); cam.add(slot);

    const plate = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.08, 0.9), metalMat);
    plate.position.y = -0.6; cam.add(plate);

    cam.position.set(1.3, 0.4, 0);
    cam.rotation.set(0.2, -0.5, 0.08);
    scene.add(cam);

    const strip = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.03, 8, 64),
      new THREE.MeshStandardMaterial({ color: 0xe0a96d, metalness: 0.8, roughness: 0.3, transparent: true, opacity: 0.4 }),
    );
    strip.position.copy(cam.position);
    strip.rotation.x = Math.PI / 3;
    scene.add(strip);

    let mx = 0, my = 0, scrollY = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => { scrollY = window.scrollY; };
    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      // Responsive camera horizontal position
      const isMobile = window.innerWidth <= 900;
      cam.position.x = isMobile ? 0 : 2.2;
      strip.position.x = cam.position.x;
    };
    resize();
    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);
    this.cleanups.push(
      () => window.removeEventListener('mousemove', onMove),
      () => window.removeEventListener('scroll', onScroll),
      () => window.removeEventListener('resize', resize),
    );

    const t0 = performance.now();
    const loop = () => {
      const t = (performance.now() - t0) / 1000;
      cam.rotation.y = -0.5 + mx * 0.5 + Math.sin(t * 0.4) * 0.08;
      cam.rotation.x = 0.2 + my * 0.3 + Math.cos(t * 0.3) * 0.05;
      cam.position.y = 0.4 + Math.sin(t * 0.6) * 0.12 - scrollY * 0.002;
      (recBtn.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5 + Math.sin(t * 2.5) * 0.4;
      strip.rotation.z = t * 0.3;
      strip.position.y = cam.position.y;
      renderer.render(scene, camera);
      this.cameraRaf = requestAnimationFrame(loop);
    };
    this.cameraRaf = requestAnimationFrame(loop);
  }


  // =============================================================
  // 3. Title line-by-line reveal after loader finishes
  // =============================================================
  private initTitleReveal(): void {
    const spans = [
      this.scriptLine().nativeElement,
      this.line1().nativeElement,
      this.line2().nativeElement,
      this.catchphrase().nativeElement
    ];
    spans.forEach((s, i) => {
      s.style.transform = 'translateY(110%) rotate(2deg)';
      s.style.display = 'inline-block';
      s.style.opacity = '0';
      s.style.transition = `transform 1.2s ${i * 0.15 + 2.8}s var(--ease), opacity 1.2s ${i * 0.15 + 2.8}s var(--ease)`;
    });
    const run = () => {
      setTimeout(() => spans.forEach(s => {
        s.style.transform = 'translateY(0) rotate(0)';
        s.style.opacity = '1';
      }), 2400);
    };
    if (document.readyState === 'complete') run();
    else window.addEventListener('load', run, { once: true });
  }

  ngOnDestroy(): void {
    if (this.shaderRaf) cancelAnimationFrame(this.shaderRaf);
    if (this.cameraRaf) cancelAnimationFrame(this.cameraRaf);
    this.cleanups.forEach(off => off());
    this.shaderRenderer?.dispose();
    this.cameraRenderer?.dispose();
  }
}
