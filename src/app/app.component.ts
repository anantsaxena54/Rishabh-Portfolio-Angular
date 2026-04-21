import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { HeroComponent } from './sections/hero/hero.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { WorkComponent } from './sections/work/work.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    LoaderComponent,
    CursorComponent,
    ThreeSceneComponent,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    WorkComponent,
    ContactComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Global overlays -->
    <div class="grain"></div>
    <div class="vignette"></div>

    <!-- Persistent WebGL background field -->
    <app-three-scene />

    <!-- Loader -->
    <app-loader />

    <!-- Custom cursor -->
    <app-cursor />

    <!-- Navigation -->
    <app-navbar />

    <!-- Main content -->
    <main>
      <app-hero />
      <div class="marquee">
        <div class="marquee-track">
          @for (item of marqueeItems; track $index) {
            <span [class.sep]="item.sep">{{ item.text }}</span>
          }
        </div>
      </div>
      <app-skills />
      <app-experience />
      <app-work />
      <app-contact />
      <footer>
        <span>© 2026 Rishabh Sahu — Made in Mumbai</span>
        <span>19.0760° N / 72.8777° E</span>
        <span>Built with craft, not templates</span>
      </footer>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly marqueeItems = [
    { text: 'Cinematography', sep: false }, { text: '✦', sep: true },
    { text: 'Editing', sep: false },        { text: '✦', sep: true },
    { text: 'Visual Effects', sep: false }, { text: '✦', sep: true },
    { text: 'Colour', sep: false },         { text: '✦', sep: true },
    { text: 'Direction', sep: false },      { text: '✦', sep: true },
    { text: 'Cinematography', sep: false }, { text: '✦', sep: true },
    { text: 'Editing', sep: false },        { text: '✦', sep: true },
    { text: 'Visual Effects', sep: false }, { text: '✦', sep: true },
    { text: 'Colour', sep: false },         { text: '✦', sep: true },
    { text: 'Direction', sep: false },      { text: '✦', sep: true },
  ];
}
