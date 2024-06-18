import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCoffee, faHouse, faMagnifyingGlass, faQuestion, faUser, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [RouterModule, FaIconComponent],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss',
})
export class NavbarMobileComponent {
  faCoffee = faCoffee;
  faHouse = faHouse;
  faMagnifyingGlass = faMagnifyingGlass;
  faQuestion = faQuestion;
  faUser = faUser;
  faEye = faEye;
}
