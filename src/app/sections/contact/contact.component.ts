import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Channel {
  readonly type: 'email' | 'linkedin';
  readonly label: string;
  readonly value: string;
  readonly href: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="contact" id="contact">
      <div class="contact-inner">
        <div class="contact-grid">
          
          <!-- Left Column: Info -->
          <div class="contact-info">
            <h1 class="contact-title">Let's <span class="gradient-text">work</span><br>together</h1>
            
            <div class="contact-meta">
              <h2 class="sub-title">Get in touch</h2>
              <p class="contact-desc">
                I'm currently open to new opportunities — full time, freelance, or interesting collaborations. 
                Drop a message and I'll get back to you within 24 hours.
              </p>
            </div>

            <div class="channel-list">
              @for (channel of channels; track channel.type) {
                <a [href]="channel.href" class="channel-card" target="_blank">
                  <div class="channel-icon">
                    @switch (channel.type) {
                      @case ('email') {
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      }
                      @case ('linkedin') {
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                      }
                    }
                  </div>
                  <div class="channel-content">
                    <span class="channel-label">{{ channel.label }}</span>
                    <span class="channel-value">{{ channel.value }}</span>
                  </div>
                </a>
              }
            </div>
          </div>

          <!-- Right Column: Form -->
          <div class="contact-form-container">
            @if (!submitted()) {
              <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <div class="form-row">
                  <div class="form-group">
                    <label>your name</label>
                    <input type="text" name="name" [(ngModel)]="formData.name" placeholder="Rishabh Sahu" required>
                  </div>
                  <div class="form-group">
                    <label>your email</label>
                    <input type="email" name="email" [(ngModel)]="formData.email" placeholder="riishabh20@gmail.com" required>
                  </div>
                </div>

                <div class="form-group">
                  <label>subject</label>
                  <input type="text" name="subject" [(ngModel)]="formData.subject" placeholder="Project Collaboration / VFX Query" required>
                </div>

                <div class="form-group">
                  <label>message</label>
                  <textarea name="message" [(ngModel)]="formData.message" rows="5" placeholder="Tell me about the project..." required></textarea>
                </div>

                <button type="submit" class="submit-btn" [disabled]="!contactForm.valid">
                  <span>send message</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </button>
              </form>
            } @else {
              <div class="success-message">
                <div class="success-icon">✓</div>
                <h3>Message Sent.</h3>
                <p>Thanks for reaching out. I'll get back to you shortly.</p>
                <button (click)="submitted.set(false)" class="reset-btn">Send another</button>
              </div>
            }

            <div class="form-decoration"></div>
          </div>

        </div>
      </div>
    </section>
  `,
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly submitted = signal(false);
  protected readonly formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  protected readonly channels: readonly Channel[] = [
    { 
      type: 'email',
      label: 'email',      
      value: 'riishabh20@gmail.com',           
      href: 'mailto:riishabh20@gmail.com'
    },
    { 
      type: 'linkedin',
      label: 'linkedin',     
      value: 'Rishabh Sahu',                
      href: 'https://www.linkedin.com/in/rishabh-sahu-6a782a249?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    },
  ];

  onSubmit() {
    console.log('Form Submit:', this.formData);
    // Simulate API call
    setTimeout(() => {
      this.submitted.set(true);
      // Reset form
      this.formData.name = '';
      this.formData.email = '';
      this.formData.subject = '';
      this.formData.message = '';
    }, 800);
  }
}
