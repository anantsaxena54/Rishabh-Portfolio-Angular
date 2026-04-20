import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRANDS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-brands',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="brands">
      <div class="section-head">
        <div>
          <div class="section-num">— 04 / Partners</div>
          <h2 class="section-title">Eighty &amp; <em>counting.</em></h2>
        </div>
        <div class="section-num end">Brands I've<br>shot, cut, or composited for</div>
      </div>

      <div class="brands-grid">
        @for (brand of brands; track brand) {
          <div class="brand-cell"><span>{{ brand }}</span></div>
        }
      </div>
    </section>
  `,
  styleUrl: './brands.component.scss',
})
export class BrandsComponent {
  protected readonly brands = BRANDS;
}
