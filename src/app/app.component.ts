import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IUser } from './shared/models/iuser';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppComponent, NavbarComponent, NavbarMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'PROJET-POEC';
  userInfo: IUser | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userInfo$.subscribe(user => {
      this.userInfo = user;
    });
  }
}
