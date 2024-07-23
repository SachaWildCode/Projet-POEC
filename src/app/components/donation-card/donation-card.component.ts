import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Donation } from '../../shared/models/donation_model';

@Component({
  selector: 'app-donation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donation-card.component.html',
  styleUrls: ['./donation-card.component.scss'],
})
export class DonationCardComponent {
  @Input() donation!: Donation;
  @Input() index!: number;
  @Output() percentageChange = new EventEmitter<{ index: number; percentage: number }>();

  onSliderChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const percentage = parseFloat(target.value);
    this.percentageChange.emit({ index: this.index, percentage: percentage });
  }
}
