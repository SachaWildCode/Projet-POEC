import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const paragraphs = document.querySelectorAll('details p');
    paragraphs.forEach(p => {
      this.renderer.listen(p, 'click', () => {
        const details = p.closest('details');
        if (details) {
          this.renderer.removeAttribute(details, 'open');
        }
      });
    });
  }
}
