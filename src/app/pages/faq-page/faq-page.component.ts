import { Component } from '@angular/core';
import { FaqComponent } from '../../components/faq/faq.component';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [FaqComponent],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss',
})
export class FaqPageComponent {}
