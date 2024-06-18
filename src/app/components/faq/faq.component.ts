import { Component, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements AfterViewInit, OnDestroy {
  private detailsElements!: NodeListOf<HTMLDetailsElement>;
  private eventListeners: (() => void)[] = [];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.detailsElements = (this.el.nativeElement as HTMLElement).querySelectorAll('details');
    this.detailsElements.forEach((details: HTMLDetailsElement) => {
      const toggleListener = () => {
        if (details.open) {
          this.detailsElements.forEach((otherDetails: HTMLDetailsElement) => {
            if (otherDetails !== details) {
              otherDetails.open = false;
            }
          });
        }
      };
      details.addEventListener('toggle', toggleListener);
      this.eventListeners.push(() => {
        details.removeEventListener('toggle', toggleListener);
      });
    });
  }

  ngOnDestroy() {
    this.eventListeners.forEach(removeListener => {
      removeListener();
    });
  }
}
