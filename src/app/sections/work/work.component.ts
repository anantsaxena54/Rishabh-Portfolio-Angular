import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, computed, inject, signal, viewChild } from '@angular/core';
import { CATEGORY_LABELS, FILTERS, PROJECTS } from '../../core/data/portfolio.data';
import { Filter, Project, ProjectCategory } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-work',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="work" id="work">
      <div class="work-head">
        <div class="section-head">
          <div>
            <div class="section-num">— 03 / Selected Work</div>
            <h2 class="section-title">The <em>reel</em>, fragmented.</h2>
          </div>
          <div class="section-num end">250+<br>projects delivered</div>
        </div>
      </div>

      <div class="gallery-filters">
        @for (filter of filters; track filter.value) {
          <button
            class="gallery-filter"
            [class.active]="activeFilter() === filter.value"
            (click)="setFilter(filter.value)">
            {{ filter.label }}
          </button>
        }
      </div>

      <div class="gallery-wrap">
        <div #track class="gallery-track" [class.dragging]="dragging()">
          @for (project of visibleProjects(); track project.title; let i = $index) {
            <div class="gallery-item" data-cursor="View">
              <div class="gallery-item-inner">
                <div class="gallery-item-num">P — {{ paddedIndex(i) }}</div>
                <div class="gallery-item-visual" [style.background-image]="'url(' + project.img + ')'"></div>
                <div class="gallery-item-shine"></div>
              </div>
              <div class="gallery-item-meta">
                <div>
                  <div class="gallery-item-title"><em>{{ project.title }}</em></div>
                  <div class="gallery-item-tag brand">{{ project.brand }}</div>
                </div>
                <div class="gallery-item-tag">{{ categoryLabel(project.cat) }}</div>
              </div>
            </div>
          }
        </div>
      </div>

      <div class="drag-hint">← Drag / scroll to explore →</div>
    </section>
  `,
  styleUrl: './work.component.scss',
})
export class WorkComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly track = viewChild.required<ElementRef<HTMLDivElement>>('track');

  protected readonly filters: readonly Filter[] = FILTERS;
  protected readonly activeFilter = signal<Filter['value']>('all');
  protected readonly dragging = signal(false);

  protected readonly visibleProjects = computed<readonly Project[]>(() => {
    const f = this.activeFilter();
    return f === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === f);
  });

  private current = 0;
  private isDown = false;
  private startX = 0;
  private startPos = 0;
  private cleanups: Array<() => void> = [];

  setFilter(value: Filter['value']): void {
    this.activeFilter.set(value);
    this.current = 0;
    queueMicrotask(() => {
      const el = this.track().nativeElement;
      el.style.transform = 'translateX(0)';
    });
  }

  categoryLabel(cat: ProjectCategory): string {
    return CATEGORY_LABELS[cat] ?? cat;
  }

  paddedIndex(i: number): string {
    return String(i + 1).padStart(2, '0');
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.attachDrag();
      if (!window.matchMedia('(max-width: 900px)').matches) {
        this.attachTilt();
      }
    });
  }

  private attachDrag(): void {
    const track = this.track().nativeElement;
    const wrap = track.parentElement!;
    const ring = document.querySelector<HTMLElement>('.cursor-ring');

    const setTransform = () => { track.style.transform = `translateX(${this.current}px)`; };

    const onDown = (e: MouseEvent | TouchEvent) => {
      this.isDown = true;
      this.zone.run(() => this.dragging.set(true));
      ring?.classList.add('drag');
      this.startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      this.startPos = this.current;
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!this.isDown) return;
      const cx = 'touches' in e ? e.touches[0].clientX : e.clientX;
      this.current = this.startPos + (cx - this.startX);
      const max = -(track.scrollWidth - track.clientWidth);
      this.current = Math.max(max, Math.min(0, this.current));
      setTransform();
    };
    const onUp = () => {
      this.isDown = false;
      this.zone.run(() => this.dragging.set(false));
      ring?.classList.remove('drag');
    };

    track.addEventListener('mousedown', onDown);
    track.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    track.addEventListener('touchstart', onDown, { passive: true });
    track.addEventListener('touchmove', onMove, { passive: true });
    track.addEventListener('touchend', onUp);

    const onWheel = (e: WheelEvent) => {
      const max = -(track.scrollWidth - track.clientWidth);
      this.current -= e.deltaY;
      this.current = Math.max(max, Math.min(0, this.current));
      setTransform();
      e.preventDefault();
    };
    wrap.addEventListener('wheel', onWheel, { passive: false });

    this.cleanups.push(
      () => track.removeEventListener('mousedown', onDown),
      () => track.removeEventListener('mousemove', onMove),
      () => window.removeEventListener('mouseup', onUp),
      () => track.removeEventListener('touchstart', onDown),
      () => track.removeEventListener('touchmove', onMove),
      () => track.removeEventListener('touchend', onUp),
      () => wrap.removeEventListener('wheel', onWheel),
    );
  }

  private attachTilt(): void {
    const onMove = (e: MouseEvent) => {
      const track = this.track().nativeElement;
      if (track.classList.contains('dragging')) return;
      document.querySelectorAll<HTMLElement>('.gallery-item-inner').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.width === 0) return;
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / r.width;
        const dy = (e.clientY - cy) / r.height;
        const dist = Math.hypot(dx, dy);
        if (dist < 1.0) {
          const ry = dx * 12;
          const rx = -dy * 8;
          el.style.transform = `perspective(1000px) rotateY(${ry}deg) rotateX(${rx}deg) translateZ(10px)`;
        } else {
          el.style.transform = '';
        }
      });
    };
    document.addEventListener('mousemove', onMove);
    this.cleanups.push(() => document.removeEventListener('mousemove', onMove));
  }

  ngOnDestroy(): void {
    this.cleanups.forEach(off => off());
  }
}
