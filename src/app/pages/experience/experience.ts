import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = [
    {
      title: 'Product Engineer - Frontend (Angular)',
      company: 'Gritstone Technologies',
      type: 'Full-time',
      location: 'Trivandrum, Kerala, India',
      startDate: '2025-01-01',
      endDate: null,
      period: 'Jan 2025 – Present',
      duration: '',
      responsibilities: [
        'Developing and maintaining scalable Angular applications',
        'Working with Angular Material & advanced UI components',
        'Building real-time features using WebSockets',
        'Implementing audio recording systems (MediaRecorder, silence detection)',
        'Collaborating with backend teams for API integration & performance optimization',
        'Following Agile/Scrum practices',
      ],
    },
    {
      title: 'Angular Developer',
      company: 'Alphalyze',
      type: 'Full-time',
      location: 'Trivandrum, Kerala, India',
      startDate: '2023-10-01',
      endDate: '2024-12-31',
      period: 'Oct 2023 – Dec 2024',
      duration: '',
      responsibilities: [
        'Developed ERP systems (Finance, Inventory, HR)',
        'Built responsive UI using Angular, SCSS & Bootstrap',
        'Handled end-to-end development (design → implementation)',
        'Improved application performance and maintainability',
        'Worked closely with stakeholders on requirements',
      ],
    },
  ];
  ngOnInit() {
    this.experiences.forEach((exp) => {
      exp.duration = this.getDuration(exp.startDate!, exp.endDate!);
    });
  }
  getDuration(startStr: string, endStr: string | null): string {
    const start = new Date(startStr);
    const end = endStr ? new Date(endStr) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    // Add 1 since months are 0-indexed and usually we count the starting month as full
    months += 1;
    if (months === 12) {
      years++;
      months = 0;
    }

    const yrLabel = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
    const moLabel = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

    return [yrLabel, moLabel].filter(Boolean).join(' ');
  }
}
