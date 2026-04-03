import { Component, ElementRef, ViewChild } from '@angular/core';
import { animate } from 'animejs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  emailCopied = false;

  @ViewChild('resumeBtn') resumeBtn!: ElementRef;

  copyEmail() {
    const email = 'akhilpattazhy1998@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      this.emailCopied = true;
      setTimeout(() => (this.emailCopied = false), 2000);
    });
  }

  onDownloadClick() {
    setTimeout(() => {
      this.playDownloadAnimation();
    }, 300);
  }

  playDownloadAnimation() {
    animate(this.resumeBtn.nativeElement, {
      y: [-25, 0], // move up then back down
      scale: [1.15, 1], // slightly enlarge then back
      duration: 500,
      easing: 'easeOutElastic(1,0.6)',
    });
  }
}
