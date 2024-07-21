import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IUser } from '../../shared/models/iuser';
import { AuthService } from '../../shared/services/auth-service.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userInfo: IUser | null = null;
  isDropdownVisible = false;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.userService.userInfo$.subscribe(user => {
      this.userInfo = user;
    });
  }

  isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.profile-menu')) {
      this.isDropdownVisible = false;
    }
  }
}
