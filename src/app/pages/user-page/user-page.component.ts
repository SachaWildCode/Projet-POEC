import { Component } from '@angular/core';
import { DonationsComponent } from '../../components/donations/donations.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [DonationsComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {}
