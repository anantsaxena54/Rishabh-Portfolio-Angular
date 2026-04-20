import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, inject, viewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cursor" #dot></div>
    <div class="cursor-ring" #ring></div>
    <div class="cursor-label" #label></div>
  `,
  styleUrl: './cursor.component.scss',
})
export class CursorComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly dot = viewChild.required<ElementRef<HTMLDivElement>>('dot');
  private readonly ring = viewChild.required<ElementRef<HTMLDivElement>>('ring');
  private readonly label = viewChild.required<ElementRef<HTMLDivElement>>('label');

  private rx = 0; private ry = 0;
  private mx = 0; private my = 0;
  private isFast = false;
  private rafId?: number;

  private readonly listeners: Array<() => void> = [];
  private hoverTargets: NodeListOf<Element> | null = null;
  private mutationObserver?: MutationObserver;

  ngAfterViewInit(): void {
    if (window.matchMedia('(max-width: 900px)').matches) {
      // Hide cursor elements on mobile
      [this.dot, this.ring, this.label].forEach(ref => {
        ref().nativeElement.style.display = 'none';
      });
      return;
    }

    // Run outside Angular — no change detection per mousemove
    this.zone.runOutsideAngular(() => {
      const onMove = (e: MouseEvent) => {
        this.mx = e.clientX;
        this.my = e.clientY;
        const dotEl = this.dot().nativeElement;
        const labelEl = this.label().nativeElement;
        const ringEl = this.ring().nativeElement;

        dotEl.style.transform = `translate3d(${this.mx}px, ${this.my}px, 0)`;
        labelEl.style.transform = `translate3d(${this.mx}px, ${this.my}px, 0)`;

        if (this.isFast) {
          this.rx = this.mx;
          this.ry = this.my;
          ringEl.style.transform = `translate3d(${this.rx}px, ${this.ry}px, 0)`;
        }
      };
      window.addEventListener('mousemove', onMove);
      this.listeners.push(() => window.removeEventListener('mousemove', onMove));

      const loop = () => {
        if (!this.isFast) {
          this.rx += (this.mx - this.rx) * 0.15;
          this.ry += (this.my - this.ry) * 0.15;
          const ringEl = this.ring().nativeElement;
          ringEl.style.transform = `translate3d(${this.rx}px, ${this.ry}px, 0)`;
        }
        this.rafId = requestAnimationFrame(loop);
      };
      this.rafId = requestAnimationFrame(loop);

      this.attachHoverListeners();

      // Re-attach when DOM changes (after gallery filters, etc.)
      this.mutationObserver = new MutationObserver(() => this.attachHoverListeners());
      this.mutationObserver.observe(document.body, { childList: true, subtree: true });
    });
  }

  private attachHoverListeners(): void {
    // Cheap selector; real hover logic is tiny
    const dotEl = this.dot().nativeElement;
    const ringEl = this.ring().nativeElement;
    const labelEl = this.label().nativeElement;

    document.querySelectorAll<HTMLElement>('a, button, .gallery-item, .exp-row, .brand-cell, .nle-timeline').forEach(el => {
      if (el.dataset['cursorAttached']) return;
      el.dataset['cursorAttached'] = '1';

      const isTimeline = el.classList.contains('nle-timeline');

      el.addEventListener('mouseenter', () => {
        if (isTimeline) {
          this.isFast = true;
          dotEl.style.opacity = '0';
          labelEl.textContent = 'PREVIEW';
          labelEl.classList.add('show');
        }

        dotEl.classList.add('hover');
        ringEl.classList.add('hover');
        if (!isTimeline) {
          const l = el.dataset['cursor'];
          if (l) {
            labelEl.textContent = l;
            labelEl.classList.add('show');
          }
        }
      });
      el.addEventListener('mouseleave', () => {
        if (isTimeline) {
          this.isFast = false;
          dotEl.style.opacity = '1';
        }

        dotEl.classList.remove('hover');
        ringEl.classList.remove('hover');
        labelEl.classList.remove('show');
      });
    });
  }

  ngOnDestroy(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.listeners.forEach(off => off());
    this.mutationObserver?.disconnect();
  }
}
