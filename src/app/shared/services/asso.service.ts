import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAssoModel } from '../models/IAsso-model';

@Injectable({
  providedIn: 'root',
})
export class AssoService {
  constructor() {
    this.Assos = [
      {
        id: 1,
        image_url: 'https://example.com/image1.jpg',
        social_name: 'Save the Earth',
        description: 'An organization dedicated to environmental conservation.',
        donation_count: 250,
        type: 'Environmental',
        objectif_total: 5000,
        objectif_current: 3000,
      },
      {
        id: 2,
        image_url: 'https://example.com/image2.jpg',
        social_name: 'Health for All',
        description: 'Providing healthcare to underprivileged communities.',
        donation_count: 150,
        type: 'Healthcare',
        objectif_total: 7000,
        objectif_current: 4500,
      },
      {
        id: 3,
        image_url: 'https://example.com/image3.jpg',
        social_name: 'Education First',
        description: 'Promoting education in rural areas.',
        donation_count: 200,
        type: 'Education',
        objectif_total: 6000,
        objectif_current: 3500,
      },
    ];
  }

  private Assos: IAssoModel[] = [];

  getAllAsso(): Observable<IAssoModel[]> {
    return of(this.Assos);
  }
}
