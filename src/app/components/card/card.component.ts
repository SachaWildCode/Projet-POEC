// src/app/components/card/card.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() imageUrl = '';
  @Input() sliderValue = 50;
  @Output() sliderValueChange = new EventEmitter<number>();

  onSliderValueChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);
    if (!isNaN(value)) {
      this.sliderValueChange.emit(value);
    }
  }
}
