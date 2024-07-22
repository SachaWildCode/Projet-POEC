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
  @Output() pageChange = new EventEmitter<number>();
  @Input() currentPage!: number;
  pageRange = 5;
  leftArrow = faArrowLeft;
  rightArrow = faArrowRight;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const page = params['page'] as number;
      if (page) {
        this.currentPage = +page;
      }
    });
  }

  previous() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateUrl();
      this.pageChange.emit(this.currentPage);
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

  onPageChange(page: number) {
    this.currentPage = page;
    this.updateUrl();
    this.pageChange.emit(this.currentPage);
  }

  next() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateUrl();
      this.pageChange.emit(this.currentPage);
    }
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
}
