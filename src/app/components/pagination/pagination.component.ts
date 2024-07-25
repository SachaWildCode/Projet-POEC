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
  isMobile!: boolean;
  isTablet!: boolean; // New property for 798px breakpoint
  isSmallMobile!: boolean; // New property for 385px breakpoint

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  // media query
  // on resize if innerwidth is less than 798 then isMobile is true

  ngOnInit() {
    this.updatePageRange();
    window.addEventListener('resize', this.updatePageRange.bind(this));

    this.route.queryParams.subscribe(params => {
      const page = params['page'] as string;
      this.currentPage = +page;
      this.pageChange.emit(this.currentPage);
    });
  }

  private updatePageRange() {
    this.isSmallMobile = window.innerWidth < 385;
    this.isMobile = window.innerWidth < 500 && window.innerWidth >= 385;
    this.isTablet = window.innerWidth < 798 && window.innerWidth >= 500;
    this.pageRange = this.isSmallMobile ? 0 : this.isMobile ? 1 : this.isTablet ? 2 : 5; // Adjust pageRange based on breakpoints
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
    pages.push(0);
    for (let i = startPage; i <= endPage; i++) {
      if (i !== 0 && i !== this.totalPages) {
        pages.push(i);
      }
    }
    if (endPage < this.totalPages - 1) {
      pages.push(this.totalPages - 1);
    }
    return pages.sort((a, b) => a - b);
  }
}
