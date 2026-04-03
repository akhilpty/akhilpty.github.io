import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, signal, NgZone } from '@angular/core';
import { animate, stagger } from 'animejs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  @ViewChild('techSection') techSection!: ElementRef;
  @ViewChild('techTitle') techTitle!: ElementRef;
  @ViewChildren('roleText') roleTexts!: QueryList<ElementRef>;
  @ViewChildren('techItem') techItems!: QueryList<ElementRef>;

  isTechVisible = signal(false);

  constructor(private ngZone: NgZone) {}

  techStack = [
    { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
    { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178c6' },
    { name: 'Next.js', icon: 'fa-brands fa-react', color: '#00d8ff' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
    { name: 'Django', icon: 'fa-solid fa-cubes', color: '#092e20' },
    { name: 'MySQL', icon: 'fa-solid fa-database', color: '#f29111' },
    { name: 'SCSS', icon: 'fa-brands fa-sass', color: '#cc6699' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952b3' },
  ];

  ngAfterViewInit() {
    this.prepareWritingEffect();
    this.animateHero();
    this.observeTechSection();
  }

  private prepareWritingEffect() {
    this.roleTexts.forEach((el) => {
      const nativeElement = el.nativeElement;
      const text = nativeElement.textContent || '';
      nativeElement.innerHTML = text
        .split('')
        .map((char: string) => `<span class="char" style="display: inline-block; opacity: 0; transform: translateY(10px)">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');
    });
  }

  private animateHero() {
    this.ngZone.runOutsideAngular(() => {
      const chars = this.roleTexts
        .map((el) => Array.from(el.nativeElement.querySelectorAll('.char')))
        .flat();

      animate(chars, {
        opacity: [0, 1],
        translateY: [10, 0],
        delay: stagger(40),
        duration: 400,
        easing: 'easeOutQuad',
      });
    });
  }

  private observeTechSection() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.isTechVisible.set(true);

          this.ngZone.runOutsideAngular(() => {
            const title = this.techTitle.nativeElement;
            const elements = this.techItems.map((item) => item.nativeElement);
            
            animate(title, {
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 600,
                easing: 'easeOutQuad'
            });

            animate(elements, {
              scale: [0.5, 1],
              opacity: [0, 1],
              rotate: [-5, 0],
              delay: stagger(100, { start: 400 }),
              duration: 800,
              easing: 'easeOutElastic(1, .8)',
            });
          });

          observer.unobserve(this.techSection.nativeElement);
        }
      },
      { threshold: 0.1 },
    );

    if (this.techSection) {
      observer.observe(this.techSection.nativeElement);
    }
  }
}
