// src/app/pages/landing-page/landing-page.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPreviewComponent } from '../../components/landing-preview/landing-preview.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, LandingPreviewComponent, CarouselComponent, CardComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {}
