import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Donation } from '../models/donation_model';
import { Content } from '../models/organization-model';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  private donationQueue: Content[] = [];
  private donationSubject = new BehaviorSubject<Content[]>([]);

  constructor(private http: HttpClient) {}

  getDonationQueueLength(): Observable<number> {
    return this.donationSubject.asObservable().pipe(map(queue => queue.length));
  }

  addDonation(asso: Content): void {
    if (!this.donationQueue.includes(asso)) {
      this.donationQueue.push(asso);
      this.donationSubject.next([...this.donationQueue]);
    }
  }

  clearQueue(): void {
    this.donationQueue = [];
    this.donationSubject.next([]);
  }

  removeDonation(asso: Content): void {
    this.donationQueue = this.donationQueue.filter(donation => donation !== asso);
    this.donationSubject.next([...this.donationQueue]);
  }

  getDonationQueue(): Observable<Content[]> {
    return this.donationSubject.asObservable();
  }

  saveDonationQueue(
    donations: { organizationId: number; amount: number; percentageAttribution: number }[]
  ): Observable<Donation[]> {
    return this.http.put<Donation[]>(`${environment.apiUrl}/donations`, donations);
  }

  getMyDonations(): Observable<Donation[]> {
    return this.http.get<Donation[]>(`${environment.apiUrl}/donations`);
  }
}
