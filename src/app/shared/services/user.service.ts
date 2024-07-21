import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.apiUrl;
  private userInfoSubject = new BehaviorSubject<IUser | null>(null);
  userInfo$ = this.userInfoSubject.asObservable();

  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    return this.userInfoSubject.getValue() !== null;
  }

  getUser(): Observable<IUser> {
    this.clearUser();
    return this.http.get<IUser>(`${this.baseUrl}/users/me`).pipe(
      tap({
        next: user => {
          this.updateAvatarUrl(user);
          this.userInfoSubject.next(user);
        },
        error: err => {
          console.error('Error fetching user:', err);
        },
      })
    );
  }

  setUserInfo(user: IUser): void {
    this.updateAvatarUrl(user);
    this.userInfoSubject.next(user);
  }
  clearUser(): void {
    this.userInfoSubject.next(null);
  }

  private updateAvatarUrl(user: IUser): void {
    const name = `${user.firstname}+${user.lastname}`;
    user.avatarUrl = `https://ui-avatars.com/api/?name=${name}&rounded=true&background=random&bold=true`;
  }
}
