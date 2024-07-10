import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBell, faMoneyBill, faFileInvoice, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [FaIconComponent, RouterLink, RouterOutlet],
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
