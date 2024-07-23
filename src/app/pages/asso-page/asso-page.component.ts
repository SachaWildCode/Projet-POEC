import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CardAssoComponent } from '../../components/card-asso/card-asso.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { PopinComponent } from '../../components/popin/popin.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { Content } from '../../shared/models/organization-model';
import { AssoService } from '../../shared/services/asso.service';
import { DonationService } from '../../shared/services/donations.service';

@Component({
  selector: 'app-asso-page',
  standalone: true,
  imports: [SearchbarComponent, CardAssoComponent, CommonModule, PaginationComponent, PopinComponent],
  templateUrl: './asso-page.component.html',
  styleUrls: ['./asso-page.component.scss'],
})
export class AssoPageComponent implements OnInit {
  public assoList: Content[] = [];
  public totalPages = 0;
  public size = 0;
  public totalElements = 0;
  public currentPage = 0;
  public selectedAsso: Content | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assoService: AssoService,
    private donationService: DonationService
  ) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(
        switchMap(params => {
          if (!params['page']) {
            this.router
              .navigate([], {
                relativeTo: this.route,
                queryParams: { page: '0' },
                queryParamsHandling: 'merge',
              })
              .catch((error: unknown) => {
                console.error('Error navigating to page 0', error);
                return [];
              });
            return [];
          }
          this.currentPage = +params['page'] || 0;
          return this.donationService.getDonationQueue();
        }),
        switchMap(donations =>
          this.assoService.getAssos(this.currentPage.toString()).pipe(
            map(assos => {
              const donationIds = donations.map(donation => donation.id);
              assos.content = assos.content.filter(asso => !donationIds.includes(asso.id));
              return assos;
            })
          )
        )
      )
      .subscribe(assos => {
        this.assoList = assos.content;
        this.totalElements = assos.totalElements;
        this.totalPages = assos.totalPages;
        this.size = assos.size;
      });
  }

  onPageChange(page: number) {
    this.donationService
      .getDonationQueue()
      .pipe(
        switchMap(donations =>
          this.assoService.getAssos(page.toString()).pipe(
            map(assos => {
              const donationIds = donations.map(donation => donation.id);
              assos.content = assos.content.filter(asso => !donationIds.includes(asso.id));
              return assos;
            })
          )
        )
      )
      .subscribe(assos => {
        this.assoList = assos.content;
        this.totalElements = assos.totalElements;
        this.totalPages = assos.totalPages;
        this.size = assos.size;
        this.currentPage = assos.number;
      });
  }

  onCardClick(asso: Content) {
    this.selectedAsso = asso;
  }

  closePopup() {
    this.selectedAsso = null;
  }
}
