import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { combineLatest } from 'rxjs';

import { Donation } from '../../shared/models/donation_model';
import { DonationService } from '../../shared/services/donations.service';
import { DonationCardComponent } from '../donation-card/donation-card.component';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [FaIconComponent, CommonModule, DonationCardComponent],
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss'],
})
export class DonationsComponent {
  faFilter = faFilter;
  faMagnifyingGlass = faMagnifyingGlass;
  donations: Donation[] = [];
  totalPercentage = 0;

  constructor(private donationService: DonationService) {
    this.loadDonations();
  }

  private loadDonations() {
    combineLatest([this.donationService.getDonationQueue(), this.donationService.getMyDonations()]).subscribe({
      next: ([queue, myDonations]) => {
        const queueDonations = queue.map(content => ({
          organization: content,
          amount: 0,
          percentage: 0,
        }));
        this.donations = [...queueDonations, ...myDonations];
        this.updateTotalPercentage();
      },
      error: error => {
        console.error('Error fetching donations:', error);
      },
    });
  }

  updateDonationPercentage(index: number, newPercentage: number) {
    const oldPercentage = this.donations[index].percentage;
    const percentageDiff = newPercentage - oldPercentage;
    const newTotalPercentage = this.totalPercentage + percentageDiff;

    if (newTotalPercentage > 100) {
      this.adjustOtherPercentages(index, newTotalPercentage - 100);
      this.totalPercentage = 100;
    } else {
      this.totalPercentage = newTotalPercentage;
    }

    this.donations[index].percentage = this.roundToTwoDecimals(newPercentage);
  }

  private adjustOtherPercentages(changedIndex: number, excessPercentage: number) {
    const otherDonations = this.donations.filter((_, i) => i !== changedIndex);
    const totalOtherPercentage = otherDonations.reduce((sum, donation) => sum + donation.percentage, 0);

    otherDonations.forEach(donation => {
      const reduction = (donation.percentage / totalOtherPercentage) * excessPercentage;
      donation.percentage = this.roundToTwoDecimals(donation.percentage - reduction);
    });
  }

  private roundToTwoDecimals(value: number): number {
    return Math.round(value * 100) / 100;
  }

  private updateTotalPercentage() {
    this.totalPercentage = this.donations.reduce((sum, donation) => sum + donation.percentage, 0);
  }

  validateDonations() {
    const donationIds = this.donations.map(donation => ({
      organizationId: donation.organization.id,
      amount: donation.amount,
      percentageAttribution: donation.percentage,
    }));
    this.donationService.saveDonationQueue(donationIds).subscribe(() => {
      this.donations = [];
      this.donationService.clearQueue();
      this.donationService.getMyDonations().subscribe(myDonations => {
        this.donations = myDonations;
        this.updateTotalPercentage();
      });
    });
  }
}
