import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBell, faCalendar, faFileInvoice, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [FaIconComponent, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  faBell = faBell;
  faUser = faUser;
  faMoney = faMoneyBill;
  faFileInvoice = faFileInvoice;
  faCalendar = faCalendar;
}
