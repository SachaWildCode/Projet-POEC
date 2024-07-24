import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorPageContent } from '../../shared/models/IError-model';

@Component({
  selector: 'app-error-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './error-component.component.html',
  styleUrl: './error-component.component.scss',
})
export class ErrorComponentComponent {
  @Input() content!: ErrorPageContent;
}
