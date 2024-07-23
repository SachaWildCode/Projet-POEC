import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [CommonModule, FaIconComponent],
})
export class PaginationComponent implements OnInit {
  @Input() totalElements!: number;
  @Input() size!: number;
  @Input() totalPages!: number;
  @Input() currentPage!: number;
  @Output() pageChange = new EventEmitter<number>();

  pageRange = 5;
  leftArrow = faArrowLeft;
  rightArrow = faArrowRight;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const page = params['page'] as string;
      this.currentPage = +page;
      this.pageChange.emit(this.currentPage);
    });
  }

  previous() {
    if (this.currentPage > 0) {
      this.onPageChange(this.currentPage - 1);
    }
  }

  next() {
    if (this.currentPage < this.totalPages - 1) {
      this.onPageChange(this.currentPage + 1);
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updateUrl();
    this.pageChange.emit(this.currentPage);
    this.scrollToTop();
  }

  private updateUrl() {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { page: this.currentPage },
        queryParamsHandling: 'merge',
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  }

  private scrollToTop() {
    const assoListContainer = document.getElementById('asso-list-container');
    if (assoListContainer) {
      assoListContainer.scrollTo(0, 0);
    }

    if (window.innerWidth < 798) {
      window.scrollTo(0, 0);
    }
  }

  getPages(): number[] {
    const pages = [];
    const startPage = Math.max(0, this.currentPage - this.pageRange);
    const endPage = Math.min(this.totalPages - 1, this.currentPage + this.pageRange);

    for (let i = startPage; i <= endPage; i++) {
      if (i === 0 || i === this.totalPages - 1 || (i >= startPage && i <= endPage)) {
        pages.push(i);
      }
    }

    return pages.sort((a, b) => a - b);
  }
}
