import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { CardAssoComponent } from '../../components/card-asso/card-asso.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { Content } from '../../shared/models/organization-model';
import { AssoService } from '../../shared/services/asso.service';

@Component({
  selector: 'app-asso-page',
  standalone: true,
  imports: [SearchbarComponent, CardAssoComponent, CommonModule, PaginationComponent],
  templateUrl: './asso-page.component.html',
  styleUrls: ['./asso-page.component.scss'],
})
export class AssoPageComponent implements OnInit {
  public assoList: Content[] = [];
  public totalPages = 0;
  public size = 0;
  public totalElements = 0;
  public currentPage = 0;

  constructor(
    private route: ActivatedRoute,
    private assoService: AssoService
  ) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(
        switchMap(params => {
          this.currentPage = +params['page'] || 0;
          return this.assoService.getAssos(this.currentPage.toString());
        })
      )
      .subscribe(assos => {
        this.assoList = assos.content;
        this.totalElements = assos.totalElements;
        this.totalPages = assos.totalPages;
        this.size = assos.size;
      });
  }

  onPageChange(page: number) {
    this.assoService.getAssos(page.toString()).subscribe(assos => {
      this.assoList = assos.content;
      this.totalElements = assos.totalElements;
      this.totalPages = assos.totalPages;
      this.size = assos.size;
      this.currentPage = assos.number;
    });
  }
}
