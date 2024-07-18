import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-button-landing',
  standalone: true,
  imports: [],
  templateUrl: './button-landing.component.html',
  styleUrl: './button-landing.component.scss',
})
export class ButtonLandingComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  give() {
    if (this.userService.isAuthenticated()) {
      this.router.navigate(['/asso']).catch((error: unknown) => {
        console.error('Error navigating to dashboard:', error);
      });
    } else {
      this.router.navigate(['/auth/login']).catch((error: unknown) => {
        console.error('Error navigating to login:', error);
      });
    }
  }

  goToFaq() {
    this.router.navigate(['/faq']).catch((error: unknown) => {
      console.error('Error navigating to faq:', error);
    });
  }
}
