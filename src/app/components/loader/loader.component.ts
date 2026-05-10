import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="loader" [class.done]="done()">
      <!-- Adobe Rendering Window -->
      <div class="render-modal">
        <div class="render-header">
          <span>Rendering : {{ progress() | number:'1.2-2' }}%</span>
        </div>
        <div class="render-body">
          <p class="render-text">Rendering {{ currentPreview() }} of 50 video previews</p>
          
          <div class="progress-track">
            <div class="progress-fill" [style.width.%]="progress()"></div>
          </div>
          
          <p class="render-text">Rendering frame {{ currentFrame() }} of 24613</p>
          <p class="render-text">Estimated time remaining: 00:00:0{{ remainingSeconds() }}</p>
          
          <div class="render-details">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
            <span>Render details</span>
          </div>
          
          <div class="render-actions">
            <button class="btn-cancel" (click)="forceFinish()">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './loader.component.scss',
})
export class LoaderComponent implements AfterViewInit, OnDestroy {
  protected readonly done = signal(false);
  protected readonly progress = signal(0);
  protected readonly currentPreview = signal(0);
  protected readonly currentFrame = signal(0);
  protected readonly remainingSeconds = signal(2);

  private interval?: number;
  private timeout?: number;

  ngAfterViewInit(): void {
    const totalFrames = 24613;
    const totalPreviews = 50;
    const duration = 2000; // 2 seconds loading time
    const start = Date.now();

    const update = () => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      
      this.progress.set(p);
      this.currentFrame.set(Math.floor((p / 100) * totalFrames));
      this.currentPreview.set(Math.floor((p / 100) * totalPreviews));
      this.remainingSeconds.set(Math.max(0, Math.ceil((duration - elapsed) / 1000)));

      if (p >= 100) {
        if (this.interval) window.clearInterval(this.interval);
        this.finish();
      }
    };

    const runLoader = () => {
      this.interval = window.setInterval(update, 30);
    };

    if (document.readyState === 'complete') {
      runLoader();
    } else {
      window.addEventListener('load', runLoader, { once: true });
    }
  }

  forceFinish(): void {
    if (this.interval) window.clearInterval(this.interval);
    this.progress.set(100);
    this.finish();
  }

  private finish(): void {
    this.timeout = window.setTimeout(() => {
      this.done.set(true);
      window.dispatchEvent(new CustomEvent('loader:done'));
    }, 500); // 500ms delay after hitting 100%
  }

  ngOnDestroy(): void {
    if (this.interval) window.clearInterval(this.interval);
    if (this.timeout) window.clearTimeout(this.timeout);
  }
}
