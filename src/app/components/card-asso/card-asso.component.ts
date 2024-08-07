import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHandHoldingHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Content } from '../../shared/models/organization-model';

@Component({
  selector: 'app-card-asso',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './card-asso.component.html',
  styleUrl: './card-asso.component.scss',
})
export class CardAssoComponent implements AfterViewInit {
  @Input() association!: Content;
  percent = 0;
  faHeart = faHandHoldingHeart;
  faPlus = faPlus;

  // using js to capitalize because webkit-box blocks from using capitalize
  ngAfterViewInit() {
    const clampTextElements: NodeListOf<Element> = document.querySelectorAll('.description');
    clampTextElements.forEach(element => {
      const text: string | null = element.textContent;
      if (text && text.length > 0) {
        const transformedText: string = text.charAt(0).toUpperCase() + text.slice(1);
        element.textContent = transformedText;
      }
    });
  }
}
