import { Component, Input } from '@angular/core';
import { CardAssoComponent } from '../card-asso/card-asso.component';
import { IcardAsso } from '../../shared/models/icard-asso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [CardAssoComponent, CommonModule],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss',
})
export class CarouselCardComponent {
  @Input() cards: IcardAsso[] = [];
}
