import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { Content } from '../../shared/models/organization-model';
import { DonationService } from '../../shared/services/donations.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-popin',
  standalone: true,
  templateUrl: './popin.component.html',
  styleUrls: ['./popin.component.scss'],
  imports: [CommonModule, FaIconComponent],
})
export class PopinComponent {
  @Input() asso: Content | null = null;
  @Output() closePopin = new EventEmitter<void>();
  faIconClose = faXmark;
  donations$: Observable<number>;

  constructor(
    private donationService: DonationService,
    private router: Router,
    private userService: UserService
  ) {
    this.donations$ = this.donationService.getDonationQueueLength();
  }

  continueSurfing() {
    if (this.asso) {
      this.donationService.addDonation(this.asso);
    }
    this.closePopin.emit();
  }

  async goToDonate() {
    try {
      if (this.asso && this.userService.isAuthenticated()) {
        await this.router.navigate(['/profile/donations']);
      } else {
        await this.router.navigate(['/auth/login']);
      }
    } catch (error) {
      console.error('Error navigating to donate page:', error);
    }
    this.closePopin.emit();
  }

  cancel() {
    this.closePopin.emit();
  }
}
