import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Content } from '../../shared/models/organization-model';
import { CardAssoComponent } from '../card-asso/card-asso.component';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [CardAssoComponent, CommonModule],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss',
})
export class CarouselCardComponent {
  @Input() cards: Content[] = [];
}
