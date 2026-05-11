import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone, OnDestroy, computed, inject, signal, viewChild } from '@angular/core';
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

      <div class="gallery-wrap cover-flow-wrap">
        <div class="cover-flow-bg" 
             [style.background-image]="visibleProjects()[activeIndex()] ? 'url(' + visibleProjects()[activeIndex()].img + ')' : 'none'">
        </div>
        <div class="cover-flow-overlay"></div>

        <div #track class="gallery-track cover-flow-track">
          @for (project of visibleProjects(); track project.title; let i = $index) {
            <div class="gallery-item cover-flow-item" 
                 [class.active]="i === activeIndex()"
                 [style.transform]="getTransform(i)"
                 [style.zIndex]="getZIndex(i)"
                 [style.opacity]="getOpacity(i)"
                 (click)="onItemClick(project, i)">
              <div class="gallery-item-inner">
                <div class="gallery-item-num">P — {{ paddedIndex(i) }}</div>
                <img [src]="project.img" 
                     class="gallery-item-visual" 
                     [style.object-position]="project.imgPosition || 'center'"
                     style="object-fit: cover; width: 100%; height: 100%; position: absolute; inset: 0;">
                <div class="gallery-item-shine" [style.opacity]="i === activeIndex() ? 0 : 0.5"></div>
              </div>
              <div class="gallery-item-meta" [style.opacity]="i === activeIndex() ? 1 : 0">
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

    @if (selected(); as project) {
      <div class="project-modal" (click)="closeProject()">
        <button class="modal-close" type="button" (click)="closeProject(); $event.stopPropagation()" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>

        <div class="modal-player" (click)="$event.stopPropagation()">
          <div class="player-glow"></div>

          <div class="player-strip top">
            @for (p of playerPerfs; track $index) { <span class="perf"></span> }
          </div>

          <div class="player-viewport">
            <video
              controls
              autoplay
              playsinline
              [poster]="project.img"
              [src]="project.video || '/assets/logos/studio-bg.mp4'">
            </video>

            <div class="player-grain"></div>
            <div class="player-vignette"></div>

            <span class="bracket tl"></span>
            <span class="bracket tr"></span>
            <span class="bracket bl"></span>
            <span class="bracket br"></span>

            <div class="letterbox top"></div>
            <div class="letterbox bottom"></div>

            <div class="rec-badge">
              <span class="rec-dot"></span>
            </div>
          </div>

          <div class="player-strip bottom">
            @for (p of playerPerfs; track $index) { <span class="perf"></span> }
          </div>
        </div>
      </div>
    }
  `,
  styleUrl: './work.component.scss',
})
export class WorkComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly track = viewChild.required<ElementRef<HTMLDivElement>>('track');

  protected readonly filters: readonly Filter[] = FILTERS;
  protected readonly activeFilter = signal<Filter['value']>('all');
  protected readonly activeIndex = signal(0);
  protected readonly dragging = signal(false);
  protected readonly isMobile = signal(false);
  protected readonly selected = signal<Project | null>(null);
  protected readonly selectedIndex = signal(0);
  protected readonly perfs = Array.from({ length: 24 });
  protected readonly playerPerfs = Array.from({ length: 32 });

  private readonly shuffledAllProjects: readonly Project[] = (() => {
    const aiProjects = PROJECTS.filter(p => p.cat === 'ai');
    const otherProjects = PROJECTS.filter(p => p.cat !== 'ai');
    // Shuffle non-AI projects
    const shuffled = [...otherProjects].sort(() => Math.random() - 0.5);
    return [...shuffled, ...aiProjects];
  })();

  protected readonly visibleProjects = computed<readonly Project[]>(() => {
    const f = this.activeFilter();
    return f === 'all' ? this.shuffledAllProjects : PROJECTS.filter(p => p.cat === f);
  });

  openProject(project: Project, index: number): void {
    this.selected.set(project);
    this.selectedIndex.set(index);
    document.body.style.overflow = 'hidden';
  }

  onItemClick(project: Project, index: number): void {
    if (index === this.activeIndex()) {
      this.openProject(project, index);
    } else {
      this.activeIndex.set(index);
    }
  }

  closeProject(): void {
    this.selected.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selected()) this.closeProject();
  }

  roleFor(cat: ProjectCategory): string {
    switch (cat) {
      case 'cine': return 'Cinematographer';
      case 'edit': return 'Editor';
      case 'vfx': return 'VFX Artist';
      case 'ai': return 'AI Integration';
    }
  }

  setFilter(value: Filter['value']): void {
    this.activeFilter.set(value);
    this.activeIndex.set(0);
  }

  getTransform(i: number): string {
    const diff = i - this.activeIndex();
    if (diff === 0) {
      return 'translateX(-50%) translateZ(0px) rotateY(0deg) scale(1)';
    }
    const sign = Math.sign(diff);
    const absDiff = Math.abs(diff);
    
    const mobile = this.isMobile();
    const baseOffset = mobile ? 120 : 180;
    const gap = mobile ? 40 : 70;
    const zGap = mobile ? 50 : 80;
    const zBase = mobile ? -150 : -250;
    const rotation = mobile ? 25 : 35;

    const xOffset = sign * (baseOffset + absDiff * gap); 
    const zOffset = zBase - (absDiff * zGap);
    const rotateY = sign * -rotation; 
    return `translateX(calc(-50% + ${xOffset}px)) translateZ(${zOffset}px) rotateY(${rotateY}deg) scale(0.9)`;
  }

  getZIndex(i: number): number {
    const diff = Math.abs(i - this.activeIndex());
    return 100 - diff;
  }

  getOpacity(i: number): number {
    const diff = Math.abs(i - this.activeIndex());
    return diff > 4 ? 0 : 1; 
  }

  categoryLabel(cat: ProjectCategory): string {
    return CATEGORY_LABELS[cat] ?? cat;
  }

  paddedIndex(i: number): string {
    return String(i + 1).padStart(2, '0');
  }

  private cleanups: Array<() => void> = [];

  ngAfterViewInit(): void {
    const checkMobile = () => {
      this.isMobile.set(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    this.cleanups.push(() => window.removeEventListener('resize', checkMobile));

    this.zone.runOutsideAngular(() => {
      const wrap = this.track().nativeElement.parentElement!;
      let isScrolling = false;

      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        if (isScrolling) return;
        
        const current = this.activeIndex();
        if (e.deltaY > 0 && current < this.visibleProjects().length - 1) {
          isScrolling = true;
          this.zone.run(() => this.activeIndex.set(current + 1));
          setTimeout(() => isScrolling = false, 400); // Debounce duration matches CSS transition
        } else if (e.deltaY < 0 && current > 0) {
          isScrolling = true;
          this.zone.run(() => this.activeIndex.set(current - 1));
          setTimeout(() => isScrolling = false, 400);
        }
      };

      wrap.addEventListener('wheel', onWheel, { passive: false });
      this.cleanups.push(() => wrap.removeEventListener('wheel', onWheel));

      // Swipe support
      let touchStartX = 0;
      const onTouchStart = (e: TouchEvent) => {
        touchStartX = e.touches[0].clientX;
      };
      const onTouchEnd = (e: TouchEvent) => {
        const touchEndX = e.changedTouches[0].clientX;
        const current = this.activeIndex();
        if (touchStartX - touchEndX > 50 && current < this.visibleProjects().length - 1) {
          this.zone.run(() => this.activeIndex.set(current + 1));
        } else if (touchStartX - touchEndX < -50 && current > 0) {
          this.zone.run(() => this.activeIndex.set(current - 1));
        }
      };
      wrap.addEventListener('touchstart', onTouchStart, { passive: true });
      wrap.addEventListener('touchend', onTouchEnd);
      this.cleanups.push(
        () => wrap.removeEventListener('touchstart', onTouchStart),
        () => wrap.removeEventListener('touchend', onTouchEnd)
      );
    });
  }

  ngOnDestroy(): void {
    this.cleanups.forEach(off => off());
  }
}
