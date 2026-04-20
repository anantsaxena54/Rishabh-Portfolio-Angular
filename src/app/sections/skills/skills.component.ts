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

      <!-- Post-Production Timeline -->
      <div class="nle-timeline" #timeline (mouseleave)="activeSkill.set(null)">
        <!-- Playhead (Orange Line) spans ruler and tracks -->
        <div class="playhead" #playhead></div>

        <div class="timeline-ruler">
          <div class="ruler-mark" *ngFor="let i of [0,1,2,3,4,5,6,7,8,9]">
            00:0{{i}}:00:00
          </div>
        </div>

        <div class="timeline-tracks">

          <div class="track-row" *ngFor="let track of tracks">
            <div class="track-header">
              <div class="track-id">{{ track.id }}</div>
              <div class="track-controls">
                <span>M</span><span>S</span>
              </div>
            </div>
            <div class="track-content">
              <div class="clip" 
                   *ngFor="let skill of track.skills"
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
    { name: 'After Effects', icon: 'assets/logos/ae.png' },
    { name: 'Premiere Pro', icon: 'assets/logos/pr.png' },
    { name: 'Photoshop', icon: 'assets/logos/ps.png' },
    { name: 'DaVinci Resolve', icon: 'assets/logos/dr.png' }
  ];

  protected readonly tracks = [
    { 
      id: 'V1 Visuals', 
      skills: [
        { ...SKILLS[0], tools: ['Sony FX3', 'Sony A7S III'] }, 
        SKILLS[5]
      ] 
    },
    { 
      id: 'V2 Post', 
      skills: [
        { ...SKILLS[1], tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Photoshop'] }, 
        { ...SKILLS[3], tools: ['DaVinci Resolve', 'Lightroom'] }
      ] 
    },
    { 
      id: 'V3 Tech', 
      skills: [
        { ...SKILLS[2], title: 'VFX', tools: ['After Effects', 'Mocha'] }, 
        SKILLS[4]
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
