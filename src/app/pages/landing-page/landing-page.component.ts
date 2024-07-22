import { Component } from '@angular/core';

import { ButtonLandingComponent } from '../../components/button-landing/button-landing.component';
import { CarouselCardComponent } from '../../components/carousel-card/carousel-card.component';
import { LandingPreviewComponent } from '../../components/landing-preview/landing-preview.component';
import { Content } from '../../shared/models/organization-model';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LandingPreviewComponent, CarouselCardComponent, ButtonLandingComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  associations: Content[] = [];
}
