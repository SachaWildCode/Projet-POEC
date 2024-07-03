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
        image_url: 'https://placehold.co/600x400',
        social_name: 'Save the Earth',
        description: 'An organization dedicated to environmental conservation.',
        donation_count: 20000000050,
        type: 'Environmental',
        objectif_total: 5000,
        objectif_current: 3000,
      },
      {
        id: 2,
        image_url: 'https://placehold.co/600x400',
        social_name: 'Health for All',
        description: 'Providing healthcare ',
        donation_count: 150,
        type: 'Healthcare',
        objectif_total: 7000,
        objectif_current: 4500,
      },
      {
        id: 3,
        image_url: 'https://placehold.co/600x400',
        social_name: 'Education First',
        description: 'Promoting education in rural areas.',
        donation_count: 200,
        type: 'Education',
        objectif_total: 6000,
        objectif_current: 3500,
      },
      {
        id: 4,
        image_url: 'https://placehold.co/600x400',
        social_name: 'Placeholder Association',
        description: 'A placeholder association for demonstration purposes.',
        donation_count: 100,
        type: 'Demo',
        objectif_total: 4000,
        objectif_current: 2000,
      },
    ];
  }

  private Assos: IAssoModel[] = [];

  getAllAsso(): Observable<IAssoModel[]> {
    return of(this.Assos);
  }
}
