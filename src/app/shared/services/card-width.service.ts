import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardWidthService implements OnDestroy {
  private cardWidthSubject: BehaviorSubject<string>;
  cardWidth$;

  constructor() {
    this.cardWidthSubject = new BehaviorSubject<string>('');
    this.cardWidth$ = this.cardWidthSubject.asObservable();
    this.calculateAndEmitCardWidth();
    this.addResizeListener();
  }

  private calculateAndEmitCardWidth() {
    const widthStr = this.calculateCardWidth();
    this.cardWidthSubject.next(widthStr);
  }

  calculateCardWidth(): string {
    let width = window.innerWidth;
    if (width > 1200) {
      width = width / 5;
    } else if (width > 768) {
      width = width / 3;
    } else if (width > 480) {
      width = width / 2;
    } else {
      width = window.innerWidth;
    }
    return width.toString() + 'px';
  }

  addResizeListener() {
    window.addEventListener('resize', this.calculateAndEmitCardWidth.bind(this));
  }

  removeResizeListener() {
    window.removeEventListener('resize', this.calculateAndEmitCardWidth.bind(this));
  }

  ngOnDestroy() {
    this.removeResizeListener();
  }
}
