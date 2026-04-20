import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCES } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience">
      <div class="section-head">
        <div>
          <div class="section-num">— 02 / Experience</div>
          <h2 class="section-title">Rooms I've <em>worked</em> in.</h2>
        </div>
        <div class="section-num end">Four<br>chapters</div>
      </div>

      <div class="exp-list">
        @for (exp of experiences; track exp.year) {
          <div class="exp-row">
            <div class="exp-year">{{ exp.year }}</div>
            <div class="exp-dot-col">
              <div class="exp-dot"></div>
            </div>
            <div class="exp-role">{{ exp.role }}</div>
            <div class="exp-place">
              {{ exp.place }}
              <small>{{ exp.placeDetail }}</small>
            </div>
            <div class="exp-loc">{{ exp.location }}</div>
            <div class="exp-reveal">{{ exp.reveal }}</div>
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  protected readonly experiences = EXPERIENCES;
}
