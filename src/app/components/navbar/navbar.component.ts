import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, NgZone, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { NAV_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav [class.scrolled]="scrolled()">
      <a href="#hero" class="nav-logo" (click)="scrollTo($event, '#hero')">
        Rishabh Sahu<sup>*</sup>
      </a>
      <div class="nav-links">
        @for (link of navLinks; track link.href) {
          <a [href]="link.href" [attr.data-num]="link.num" (click)="scrollTo($event, link.href)">
            {{ link.label }}
          </a>
        }
      </div>
      <div class="nav-time">{{ time() }}</div>
    </nav>
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);

  protected readonly navLinks = NAV_LINKS;
  protected readonly scrolled = signal(false);
  protected readonly time = signal('—');

  private clockInterval?: number;

  ngOnInit(): void {
    this.tickClock();
    // Clock runs outside zone to avoid triggering CD every second unnecessarily
    this.zone.runOutsideAngular(() => {
      this.clockInterval = window.setInterval(() => {
        this.zone.run(() => this.tickClock());
      }, 1000);
    });
  }

  ngAfterViewInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  scrollTo(event: Event, hash: string): void {
    event.preventDefault();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  private tickClock(): void {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');
    this.time.set(`MUM ${hh}:${mm}:${ss}`);
  }

  ngOnDestroy(): void {
    if (this.clockInterval) window.clearInterval(this.clockInterval);
  }
}
