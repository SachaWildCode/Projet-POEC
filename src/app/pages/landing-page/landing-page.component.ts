import { Component } from '@angular/core';
import { LandingPreviewComponent } from '../../components/landing-preview/landing-preview.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LandingPreviewComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
