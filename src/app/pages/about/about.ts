import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  experienceYears = '2.7';
  projectsCompleted = '7+';

  skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
        { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178c6' },
        { name: 'Next.js', icon: 'fa-brands fa-react', color: '#00d8ff' },
        { name: 'SCSS', icon: 'fa-brands fa-sass', color: '#cc6699' },
        { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952b3' },
      ],
    },
    {
      name: 'Backend & Database',
      skills: [
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'Django', icon: 'fa-solid fa-cubes', color: '#092e20' },
        { name: 'MySQL', icon: 'fa-solid fa-database', color: '#f29111' },
      ],
    },
  ];
}
