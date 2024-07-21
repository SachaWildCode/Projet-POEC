import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DonationsComponent } from '../../components/donations/donations.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [SideBarComponent, RouterOutlet, DonationsComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {}
