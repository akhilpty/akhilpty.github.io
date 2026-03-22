import { Component, AfterViewInit, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  @ViewChild('techSection') techSection!: ElementRef;
  isTechVisible = signal(false);

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
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.isTechVisible.set(true);
          observer.unobserve(this.techSection.nativeElement);
        }
      },
      { threshold: 0.1 }
    );

    if (this.techSection) {
      observer.observe(this.techSection.nativeElement);
    }
  }
}
