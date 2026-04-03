import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Full-Scale ERP System',
      description: 'A comprehensive Enterprise Resource Planning system handling Finance, Inventory, and HR modules with real-time reporting.',
      tech: ['Angular', 'RxJS', 'SCSS', '.NET Core'],
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboard for monitoring live data streams with WebSocket integration and advanced charting.',
      tech: ['Angular', 'WebSockets', 'D3.js', 'TypeScript'],
    },
    {
      title: 'Smart Audio Recording System',
      description: 'Advanced recording tool with automated silence detection and selective noise reduction using Web Audio API.',
      tech: ['Angular', 'MediaRecorder API', 'Web Audio', 'Node.js'],
    },
    {
      title: 'E-commerce Engine',
      description: 'High-performance e-commerce platform with optimized product search, filtering, and seamless checkout flow.',
      tech: ['Angular', 'NgRx', 'Bootstrap', 'Stripe'],
    }
  ];
}
