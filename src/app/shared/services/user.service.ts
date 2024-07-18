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

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/users/me`).pipe(
      tap(user => {
        this.userInfoSubject.next(user);
      })
    );
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseUrl}/users/me`, user).pipe(
      tap(updatedUser => {
        this.userInfoSubject.next(updatedUser);
      })
    );
  }
  setUserInfo(user: IUser): void {
    this.userInfoSubject.next(user);
  }
  public isAuthenticated(): boolean {
    return this.userInfoSubject.getValue() !== null;
  }
  clearUser(): void {
    this.userInfoSubject.next(null);
  }
}
