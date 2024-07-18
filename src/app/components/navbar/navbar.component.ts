import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IUser } from '../../shared/models/iuser';
import { AuthService } from '../../shared/services/auth-service.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  userInfo: IUser | null = null;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}
  isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }
  logout(): void {
    this.authService.logout();
  }
  ngOnInit(): void {
    this.userService.userInfo$.subscribe(user => {
      this.userInfo = user;
    });
  }
}
