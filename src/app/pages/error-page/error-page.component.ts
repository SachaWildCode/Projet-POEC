import { Component } from '@angular/core';
import { ErrorComponentComponent } from '../../components/error-component/error-component.component';
import { ErrorPageContent } from '../../shared/models/IError-model';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [ErrorComponentComponent],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss',
})
export class ErrorPageComponent {
  content: ErrorPageContent = {
    title: '404',
    subtitle: 'Oups ! Page Introuvable',
    message:
      'Il semble que cette page ait décidé de faire un don et de partir ailleurs. Revenez à laccueil pour continuer à faire la difference.',
    buttonText: 'Accueil',
  };
}
