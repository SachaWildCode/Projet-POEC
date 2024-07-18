import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IUser } from '../models/iuser';
import { RegisterRequest } from '../models/register-request';
import { UserService } from '../services/user.service'; // Import UserService

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {} // Inject UserService

  login(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/auth/login`, { email, password }, { withCredentials: true }).pipe(
      tap((user: IUser) => {
        this.userService.setUserInfo(user);
      })
    );
  }

  logout(): Observable<unknown> {
    this.userService.clearUser();
    return this.http.post(`${this.baseUrl}/auth/logout`, {}, { withCredentials: true });
  }

  register(registerRequest: RegisterRequest): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/auth/register`, registerRequest, { withCredentials: true }).pipe(
      tap((user: IUser) => {
        this.userService.setUserInfo(user);
      })
    );
  }
}
