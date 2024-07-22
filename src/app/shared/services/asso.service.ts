import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Organization } from '../models/organization-model';

@Injectable({
  providedIn: 'root',
})
export class AssoService {
  private assoUrl = `${environment.apiUrl}/organizations`;

  constructor(private http: HttpClient) {}

  getAssos(page: string): Observable<Organization> {
    return this.http.get<Organization>(`${this.assoUrl}?page=${page}`);
  }
}
