import { Component } from '@angular/core';
import { DonationsComponent } from '../../components/donations/donations.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [DonationsComponent, SidebarComponent, RouterOutlet],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {}
