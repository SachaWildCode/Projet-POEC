import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { Content } from '../models/organization-model';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  private donationQueue: Content[] = [];
  private donationSubject = new BehaviorSubject<number>(0);

  getDonationQueueLength(): Observable<number> {
    return this.donationSubject.asObservable();
  }

  addDonation(asso: Content): void {
    if (!this.donationQueue.includes(asso)) {
      this.donationQueue.push(asso);
      this.donationSubject.next(this.donationQueue.length);
    }
  }

  clearQueue(): void {
    this.donationQueue = [];
    this.donationSubject.next(this.donationQueue.length);
  }

  removeDonation(asso: Content): void {
    this.donationQueue = this.donationQueue.filter(donation => donation !== asso);
    this.donationSubject.next(this.donationQueue.length);
  }

  getDonationQueue(): Observable<Content[]> {
    return this.donationSubject.asObservable().pipe(map(() => this.donationQueue));
  }
}
