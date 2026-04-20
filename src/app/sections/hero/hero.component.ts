import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero" id="hero">
      <img class="hero-bg" src="assets/logos/studio-bg.jpg" alt="" aria-hidden="true">
      <div class="hero-overlay"></div>

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
              Bringing 3+ years of hands-on experience in editing, cinematography, VFX, and colour grading, I've worked on many DVCs, lifestyle reels, and travel content for leading brands, integrating AI to elevate both efficiency and creative output.
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
export class HeroComponent implements AfterViewInit {
  private readonly line1      = viewChild.required<ElementRef<HTMLSpanElement>>('line1');
  private readonly line2      = viewChild.required<ElementRef<HTMLSpanElement>>('line2');
  private readonly scriptLine = viewChild.required<ElementRef<HTMLSpanElement>>('scriptLine');
  private readonly catchphrase= viewChild.required<ElementRef<HTMLParagraphElement>>('catchphrase');

  ngAfterViewInit(): void {
    this.initTitleReveal();
  }

  private initTitleReveal(): void {
    const spans = [
      this.scriptLine().nativeElement,
      this.line1().nativeElement,
      this.line2().nativeElement,
      this.catchphrase().nativeElement,
    ];
    spans.forEach((s, i) => {
      s.style.transform  = 'translateY(110%) rotate(2deg)';
      s.style.display    = 'inline-block';
      s.style.opacity    = '0';
      s.style.transition = `transform 1.2s ${i * 0.15 + 2.8}s var(--ease), opacity 1.2s ${i * 0.15 + 2.8}s var(--ease)`;
    });
    const run = () => {
      setTimeout(() => spans.forEach(s => {
        s.style.transform = 'translateY(0) rotate(0)';
        s.style.opacity   = '1';
      }), 2400);
    };
    if (document.readyState === 'complete') run();
    else window.addEventListener('load', run, { once: true });
  }
}
