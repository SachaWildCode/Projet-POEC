import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouterHistoryService {
  private history: string[] = [];

  constructor(private router: Router) {}

  startTracking(): void {
    this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (!event.url.includes('auth')) {
          this.history.push(event.urlAfterRedirects);
          if (this.history.length > 10) {
            this.history.shift();
          }
        }
      });
  }

  getHistory(): string[] {
    return this.history;
  }

  getLastNonAuthUrl(): string {
    return this.history.length > 0 ? this.history[this.history.length - 1] : '/';
  }

  navigateToLastNonAuthUrl(): void {
    const lastUrl = this.getLastNonAuthUrl();
    void this.router.navigateByUrl(lastUrl);
  }
}
