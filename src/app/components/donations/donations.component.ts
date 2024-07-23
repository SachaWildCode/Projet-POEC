import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Donation } from '../../shared/models/donation_model';
import { Content } from '../../shared/models/organization-model';
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
    this.donationService.getDonationQueue().subscribe((data: Content[]) => {
      this.donations = data.map(content => ({
        organization: content,
        amount: 0,
        percentage: 0,
      }));
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

  adjustOtherPercentages(changedIndex: number, excessPercentage: number) {
    const otherDonations = this.donations.filter((_, i) => i !== changedIndex);
    const totalOtherPercentage = otherDonations.reduce((sum, donation) => sum + donation.percentage, 0);

    otherDonations.forEach(donation => {
      const reduction = (donation.percentage / totalOtherPercentage) * excessPercentage;
      donation.percentage = this.roundToTwoDecimals(donation.percentage - reduction);
    });
  }

  roundToTwoDecimals(value: number): number {
    return Math.round(value * 100) / 100;
  }

  validateDonations() {
    //TODO send to backend
    // console.log('Donation Values:');
    // this.donations.forEach(donation => {
    //   const org = donation.organization;
    //   console.log(`Organization:
    //     - Name: ${org.name}
    //     - ID: ${org.id}
    //     - Sigle: ${org.sigle}
    //     - Description: ${org.description}
    //     - IBAN: ${org.iban}
    //     - Creation Date: ${org.creationDate}
    //     - Groupement: ${org.groupement}
    //     - ID RNA: ${org.idRna}
    //     - ID EX: ${org.idEx}
    //     - Date Modif RNA: ${org.dateModifRna}
    //     - Regime: ${org.regime}
    //     - Nature: ${org.nature}
    //     - Util Publique: ${org.utilPublique}
    //     - Eligibilite Cec: ${org.eligibiliteCec}
    //     - Active Sirene: ${org.activeSirene}
    //     - Active: ${org.active}
    //     - Impots Commerciaux: ${org.impotsCommerciaux}
    //     - Address: ${org.addressOrganization.cplt1}, ${org.addressOrganization.cp} ${org.addressOrganization.commune}, ${org.addressOrganization.pays}
    //     - Type: ${org.type.libTheme} (Color: ${org.type.color})
    //   Donation Amount: ${donation.amount}
    //   Donation Percentage: ${donation.percentage.toFixed(2)}%`);
    // });
  }
}
