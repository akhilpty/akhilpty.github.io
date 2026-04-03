import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { animate } from 'animejs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  @ViewChild('loadingBar') loadingBar!: ElementRef;

  constructor(private ngZone: NgZone) {}

  onRouteActivate() {
    this.ngZone.runOutsideAngular(() => {
      // 1. Loading Bar zip
      if (this.loadingBar) {
        animate(this.loadingBar.nativeElement, {
          width: ['0%', '100%'],
          opacity: [1, 0],
          duration: 1000,
          easing: 'easeInOutQuart'
        });
      }

      // 2. High-end "Rise & Blur" entrance animation for main
      const mainElement = document.querySelector('main');
      if (mainElement) {
        animate(mainElement, {
          opacity: [0, 1],
          scale: [0.98, 1],
          translateY: [30, 0],
          filter: ['blur(10px)', 'blur(0px)'],
          duration: 1200,
          easing: 'easeOutQuart'
        });
      }
    });
  }
}
