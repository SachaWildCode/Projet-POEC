import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { Content } from '../../shared/models/organization-model';
import { DonationService } from '../../shared/services/donations.service';

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

  constructor(private donationService: DonationService) {
    this.donations$ = this.donationService.getDonationQueueLength();
  }

  continueSurfing() {
    if (this.asso) {
      this.donationService.addDonation(this.asso);
    }
    this.closePopin.emit();
  }

  goToDonate() {
    if (this.asso) {
      this.donationService.addDonation(this.asso);
    }
    this.closePopin.emit();
    // this.router.navigate(['/donate']);
  }

  cancel() {
    this.closePopin.emit();
  }
}
