import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate: CanActivateFn = () => {
    if (this.userService.isAuthenticated()) {
      return true;
    } else {
      void this.router.navigate(['/auth/login']);
      console.error('AuthGuard: User is not authenticated');
      return false;
    }
  };
}
