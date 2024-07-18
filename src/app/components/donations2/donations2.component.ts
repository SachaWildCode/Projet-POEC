import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { AssociationDonationsComponent } from '../association-donations/association-donations.component';

interface ModelAsso {
  social_name: string;
  total_donne: string;
  attribution_mois: number;
}
@Component({
  selector: 'app-donations2',
  standalone: true,
  imports: [FaIconComponent, AssociationDonationsComponent, CommonModule],
  templateUrl: './donations2.component.html',
  styleUrl: './donations2.component.scss',
})
export class Donations2Component {
  faFilter = faFilter;
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() association!: ModelAsso;
  associations: ModelAsso[] = [
    { social_name: 'Association A', total_donne: '1000 €', attribution_mois: 6 },
    { social_name: 'Association B', total_donne: '2500 €', attribution_mois: 3 },
    { social_name: 'Association C', total_donne: '800 €', attribution_mois: 9 },
    { social_name: 'Association D', total_donne: '1500 €', attribution_mois: 12 },
    { social_name: 'Association E', total_donne: '3000 €', attribution_mois: 6 },
    { social_name: 'Association F', total_donne: '2000 €', attribution_mois: 9 },
    { social_name: 'Association G', total_donne: '1200 €', attribution_mois: 3 },
    { social_name: 'Association H', total_donne: '2800 €', attribution_mois: 6 },
    { social_name: 'Association I', total_donne: '1800 €', attribution_mois: 9 },
    { social_name: 'Association J', total_donne: '2200 €', attribution_mois: 12 },
    { social_name: 'Association K', total_donne: '1700 €', attribution_mois: 6 },
    { social_name: 'Association L', total_donne: '2400 €', attribution_mois: 3 },
    { social_name: 'Association M', total_donne: '1100 €', attribution_mois: 9 },
    { social_name: 'Association N', total_donne: '2600 €', attribution_mois: 6 },
    { social_name: 'Association O', total_donne: '1900 €', attribution_mois: 12 },
  ];
}
