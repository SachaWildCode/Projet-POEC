import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-landing',
  standalone: true,
  imports: [],
  templateUrl: './button-landing.component.html',
  styleUrl: './button-landing.component.scss',
})
export class ButtonLandingComponent {
  constructor(private router: Router) {}

  give() {
    void this.router.navigateByUrl('/asso?page=0');
  }

  goToFaq() {
    this.router.navigate(['/faq']).catch((error: unknown) => {
      console.error('Error navigating to faq:', error);
    });
  }
}
