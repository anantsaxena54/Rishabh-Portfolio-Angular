import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, inject, signal, viewChild } from '@angular/core';
import { SKILLS } from '../../core/data/portfolio.data';
import { CommonModule } from '@angular/common';
import { Skill } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="craft" id="skills">
      <div class="section-head">
        <div>
          <div class="section-num">— 01 / Skills</div>
          <h2 class="section-title">Skills in <em>nutshell.</em></h2>
        </div>
        <div class="section-num end">Six years<br>hands-on</div>
      </div>

      <div class="nle-layout">
        <!-- Post-Production Timeline -->
        <div class="nle-timeline" #timeline (mouseleave)="activeSkill.set(null)">
          <!-- Playhead (Orange Line) spans ruler and tracks -->
          <div class="playhead" #playhead></div>

          <div class="timeline-ruler">
            <div class="ruler-mark" *ngFor="let i of [0,1,2,3,4,5,6,7,8,9]">
              00:0{{i}}:00:00
            </div>
          </div>

          <div class="timeline-ruler-spacer" style="height: 1px; background: rgba(245, 239, 230, 0.05);"></div>

          <div class="timeline-tracks">
            <div class="track-row" *ngFor="let track of tracks">
              <div class="track-header">
                <div class="track-id">{{ track.id }}</div>
                <div class="track-controls">
                  <span>M</span><span>S</span>
                </div>
              </div>
              <div class="track-content"
                   [style.justify-content]="track.justifyContent || 'flex-start'"
                   [style.gap]="track.gap || '1rem'">
                <div class="clip" 
                     *ngFor="let skill of track.skills"
                     [style.width]="skill.width"
                     [style.flex]="'0 0 ' + skill.width"
                     [style.marginLeft]="skill.marginLeft || '0'"
                     [class.active]="activeSkill() === skill"
                     (mouseenter)="activeSkill.set(skill)">
                  <div class="clip-inner">
                    <div class="clip-label">{{ skill.title }}</div>
                    <div class="clip-wave"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Professional NLE Monitor (Preview Panel) -->
        <div class="nle-monitor">
          <div class="monitor-screen">
            <div class="monitor-glass"></div>
            <div class="monitor-overlay">
              <div class="timecode">00:00:{{ activeSkill() ? (activeSkill()?.num?.split('/')?.[1]?.trim() ?? '00') : '00' }}:24</div>
              <div class="rec-dot"></div>
            </div>
            
            <div class="monitor-content" [class.active]="activeSkill()">
              <div class="content-header">
                <span class="type-tag">{{ activeSkill() ? 'Source' : 'No Signal' }}</span>
                <h3 class="monitor-title">{{ activeSkill()?.title ?? 'Select a clip' }}</h3>
              </div>
              
              <p class="monitor-desc">{{ activeSkill() ? activeSkill()?.desc : 'Hover over the timeline tracks to preview cinematic skills and specialized toolkits.' }}</p>
              
              <div class="monitor-footer">
                <div class="monitor-tools" *ngIf="activeSkill()">
                  <div class="tool-label">Clip Toolkit:</div>
                  <span class="tool-tag" *ngFor="let t of activeSkill()?.tools">{{ t }}</span>
                </div>

                <!-- Master Tools -->
                <div class="master-tools">
                  <div class="tool-label">Master Gear:</div>
                  <div class="master-icons">
                    <img *ngFor="let tool of displayTools" [src]="tool.icon" [alt]="tool.name" [title]="tool.name">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly timeline = viewChild.required<ElementRef<HTMLDivElement>>('timeline');
  private readonly playhead = viewChild.required<ElementRef<HTMLDivElement>>('playhead');

  protected readonly skills = SKILLS;
  protected readonly activeSkill = signal<Skill | null>(null);
  private listener?: () => void;

  protected readonly displayTools = [
    { name: 'Gear 1', icon: 'assets/logos/logo/logo1.png' },
    { name: 'Gear 2', icon: 'assets/logos/logo/logo2.png' },
    { name: 'Gear 3', icon: 'assets/logos/logo/logo3.png' },
    { name: 'Gear 4', icon: 'assets/logos/logo/logo4.png' },
    { name: 'Gear 5', icon: 'assets/logos/logo/logo5.png' }
  ];

  protected readonly tracks: Array<{ id: string, justifyContent?: string, gap?: string, skills: any[] }> = [
    { 
      id: 'V1 Visuals', 
      justifyContent: 'center',
      gap: '1.5rem',
      skills: [
        { ...SKILLS[1], tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Photoshop'], width: '220px' },
        { ...SKILLS[2], title: 'VFX', tools: ['After Effects', 'Mocha'], width: '200px' }
      ] 
    },
    { 
      id: 'V2 Post',
      justifyContent: 'flex-start', 
      gap: '8px',
      skills: [
        { ...SKILLS[0], tools: ['Sony FX3', 'Sony A7S III'], width: '280px' }, 
        { ...SKILLS[3], tools: ['DaVinci Resolve', 'Lightroom'], width: '160px' },
        { ...SKILLS[4], width: '190px' }
      ] 
    }
  ];

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const el = this.timeline().nativeElement;
      const ph = this.playhead().nativeElement;

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        ph.style.transform = `translate3d(${x}px, 0, 0)`;
      };

      el.addEventListener('mousemove', onMove);
      this.listener = () => el.removeEventListener('mousemove', onMove);
    });
  }

  ngOnDestroy(): void {
    this.listener?.();
  }
}
