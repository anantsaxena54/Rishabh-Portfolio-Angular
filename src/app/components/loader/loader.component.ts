import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="loader" [class.done]="done()" #loaderEl>
      <div class="loader-content">
        <div class="loader-logo">
          @for (ch of letters; track $index) {
            <span [style.animation-delay.ms]="$index * 60">{{ ch }}</span>
          }
        </div>
        <div class="loader-bar"></div>
        <div class="loader-meta">Loading reel — {{ pct() }}%</div>
      </div>
    </div>
  `,
  styleUrl: './loader.component.scss',
})
export class LoaderComponent implements AfterViewInit, OnDestroy {
  protected readonly letters = [...'RISHABH'];
  protected readonly pct = signal('00');
  protected readonly done = signal(false);

  private readonly loaderEl = viewChild.required<ElementRef<HTMLDivElement>>('loaderEl');
  private interval?: number;
  private timeout?: number;

  ngAfterViewInit(): void {
    let n = 0;
    this.interval = window.setInterval(() => {
      n += Math.random() * 8 + 2;
      if (n >= 100) {
        n = 100;
        window.clearInterval(this.interval);
      }
      this.pct.set(String(Math.floor(n)).padStart(2, '0'));
    }, 80);

    // Hide after 2.4s past full window load
    const showDone = () => {
      this.timeout = window.setTimeout(() => this.done.set(true), 2400);
    };

    if (document.readyState === 'complete') showDone();
    else window.addEventListener('load', showDone, { once: true });
  }

  ngOnDestroy(): void {
    if (this.interval) window.clearInterval(this.interval);
    if (this.timeout) window.clearTimeout(this.timeout);
  }
}
