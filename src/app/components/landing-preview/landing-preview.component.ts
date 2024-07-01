import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAssoComponent } from '../card-asso/card-asso.component';

@Component({
  selector: 'app-landing-preview',
  standalone: true,
  imports: [CardAssoComponent, CommonModule],
  templateUrl: './landing-preview.component.html',
  styleUrl: './landing-preview.component.scss',
})
export class LandingPreviewComponent {}
