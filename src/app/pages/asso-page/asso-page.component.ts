import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
  styleUrl: './asso-page.component.scss',
})
export class AssoPageComponent implements OnInit {
  constructor(private assoService: AssoService) {}
  public assoList: Content[] = [];
  public totalPages!: number;
  public size!: number;
  public totalElements!: number;
  public currentPage = 0;

  ngOnInit() {
    this.assoService.getAssos(this.currentPage.toString()).subscribe(assos => {
      this.assoList = assos.content;
      this.totalElements = assos.totalElements;
      this.totalPages = assos.totalPages;
      this.size = assos.size;
      this.currentPage = assos.number;
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
