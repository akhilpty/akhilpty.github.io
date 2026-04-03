import { Component } from '@angular/core';
import { ComingSoon } from '../coming-soon/coming-soon';

@Component({
  selector: 'app-about',
  imports: [ComingSoon],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
