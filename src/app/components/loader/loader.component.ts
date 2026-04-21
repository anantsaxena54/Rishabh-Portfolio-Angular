import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="loader" [class.done]="done()" [class.clapping]="clapping()">
      <div class="loader-grain"></div>
      <div class="loader-scan"></div>

      <!-- Top slate bar -->
      <div class="slate-bar">
        <div class="slate-left">
          <span class="rec-dot"></span>
          <span>REC</span>
          <span class="sep">/</span>
          <span>{{ timecode() }}</span>
        </div>
        <div class="slate-right">
          <span>SCENE 01</span>
          <span class="sep">/</span>
          <span>TAKE 01</span>
          <span class="sep">/</span>
          <span>MUMBAI · IN</span>
        </div>
      </div>

      <!-- Film strip framing -->
      <div class="film-strip top">
        @for (i of perfs; track $index) { <span class="perf"></span> }
      </div>

      <div class="loader-content">

        <!-- ===== Clapperboard ===== -->
        <div class="clapper" [class.clap]="clapping()">
          <div class="clapper-arm">
            <div class="arm-stripes">
              @for (s of armStripes; track $index) {
                <span class="stripe" [class.white]="$index % 2 === 0"></span>
              }
            </div>
            <div class="arm-hinge"></div>
          </div>

          <div class="clapper-body">
            <div class="body-stripes">
              @for (s of bodyStripes; track $index) {
                <span class="stripe" [class.white]="$index % 2 === 0"></span>
              }
            </div>

            <div class="slate-face">
              <div class="slate-header">
                <span>PRODUCTION</span>
                <span class="sep-line"></span>
                <span>REEL 2026</span>
              </div>

              <div class="slate-title">
                <span class="title-main">Rishabh</span>
                <span class="title-sub">SAHU</span>
              </div>

              <div class="slate-grid">
                <div class="cell"><span class="k">DIR</span><span class="v">R. SAHU</span></div>
                <div class="cell"><span class="k">CAM</span><span class="v">A</span></div>
                <div class="cell"><span class="k">ROLL</span><span class="v">001</span></div>
                <div class="cell"><span class="k">SCENE</span><span class="v">01</span></div>
                <div class="cell"><span class="k">TAKE</span><span class="v">01</span></div>
                <div class="cell"><span class="k">FPS</span><span class="v">24</span></div>
              </div>

              <div class="slate-footer">
                <span>DATE · {{ dateStr }}</span>
                <span class="pulse">● SYNC</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Film strip framing bottom -->
      <div class="film-strip bottom">
        @for (i of perfs; track $index) { <span class="perf"></span> }
      </div>
    </div>
  `,
  styleUrl: './loader.component.scss',
})
export class LoaderComponent implements AfterViewInit, OnDestroy {
  protected readonly armStripes = Array.from({ length: 12 });
  protected readonly bodyStripes = Array.from({ length: 12 });
  protected readonly perfs = Array.from({ length: 28 });

  protected readonly done = signal(false);
  protected readonly clapping = signal(false);
  protected readonly timecode = signal('00:00:00:00');

  protected readonly dateStr = (() => {
    const d = new Date();
    const pad = (v: number) => String(v).padStart(2, '0');
    return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
  })();

  private tcInterval?: number;
  private timeout?: number;
  private clapTimeout?: number;

  ngAfterViewInit(): void {
    const start = Date.now();
    this.tcInterval = window.setInterval(() => {
      const ms = Date.now() - start;
      const h = Math.floor(ms / 3_600_000) % 24;
      const m = Math.floor(ms / 60_000) % 60;
      const s = Math.floor(ms / 1000) % 60;
      const f = Math.floor((ms % 1000) / 1000 * 24);
      const pad = (v: number) => String(v).padStart(2, '0');
      this.timecode.set(`${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`);
    }, 41);

    const showDone = () => {
      // Clap! — the board's close animation is the loader's goodbye
      this.clapTimeout = window.setTimeout(() => this.clapping.set(true), 2000);

      // Dismiss after the clap + shake + close sequence resolves
      this.timeout = window.setTimeout(() => {
        this.done.set(true);
        window.dispatchEvent(new CustomEvent('loader:done'));
      }, 3150);
    };

    if (document.readyState === 'complete') showDone();
    else window.addEventListener('load', showDone, { once: true });
  }

  ngOnDestroy(): void {
    if (this.tcInterval) window.clearInterval(this.tcInterval);
    if (this.timeout) window.clearTimeout(this.timeout);
    if (this.clapTimeout) window.clearTimeout(this.clapTimeout);
  }
}
