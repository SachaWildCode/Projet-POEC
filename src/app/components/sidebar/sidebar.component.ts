import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBell, faMoneyBill, faFileInvoice, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FaIconComponent, RouterLink, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  faBell = faBell;
  faUser = faUser;
  faMoney = faMoneyBill;
  faFileInvoice = faFileInvoice;
  faCalendar = faCalendar;
}
