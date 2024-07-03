import { Component } from '@angular/core';
import { LandingPreviewComponent } from '../../components/landing-preview/landing-preview.component';
import { CarouselCardComponent } from '../../components/carousel-card/carousel-card.component';
import { IcardAsso } from '../../shared/models/icard-asso';
import { ButtonLandingComponent } from '../../components/button-landing/button-landing.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LandingPreviewComponent, CarouselCardComponent, ButtonLandingComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  associations: IcardAsso[] = [];
  constructor() {
    this.associations = [
      {
        id: 1,
        image_url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        social_name: 'Social 1',
        description: 'This is a',
        donation_count: 100,
        type: 'Type 1',
        objectif_total: 6000,
        objectif_current: 500,
      },
      {
        id: 2,
        image_url: 'https://www.example.com/image2.png',
        social_name: 'Social 2',
        description:
          'This is a large description for the second social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 50,
        type: 'Type 2',
        objectif_total: 8000,
        objectif_current: 200,
      },
      {
        id: 3,
        image_url: 'https://www.example.com/image3.png',
        social_name: 'Social 3',
        description:
          'This is a large description for the third social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 75,
        type: 'Type 3',
        objectif_total: 5000,
        objectif_current: 1000,
      },
      {
        id: 4,
        image_url: 'https://www.example.com/image4.png',
        social_name: 'Social 4',
        description:
          'This is a large description for the fourth social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 120,
        type: 'Type 4',
        objectif_total: 7000,
        objectif_current: 300,
      },
      {
        id: 5,
        image_url: 'https://www.example.com/image5.png',
        social_name: 'Social 5',
        description:
          'This is a large description for the fifth social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 90,
        type: 'Type 5',
        objectif_total: 5500,
        objectif_current: 1500,
      },
      {
        id: 6,
        image_url: 'https://www.example.com/image6.png',
        social_name: 'Social 6',
        description:
          'This is a large description for the sixth social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 80,
        type: 'Type 6',
        objectif_total: 6500,
        objectif_current: 700,
      },
      {
        id: 7,
        image_url: 'https://www.example.com/image7.png',
        social_name: 'Social 7',
        description:
          'This is a large description for the seventh social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 110,
        type: 'Type 7',
        objectif_total: 7200,
        objectif_current: 400,
      },
      {
        id: 8,
        image_url: 'https://www.example.com/image8.png',
        social_name: 'Social 8',
        description:
          'This is a large description for the eighth social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 70,
        type: 'Type 8',
        objectif_total: 5800,
        objectif_current: 1800,
      },
      {
        id: 9,
        image_url: 'https://www.example.com/image9.png',
        social_name: 'Social 9',
        description:
          'This is a large description for the ninth social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 95,
        type: 'Type 9',
        objectif_total: 5300,
        objectif_current: 1300,
      },
      {
        id: 10,
        image_url: 'https://www.example.com/image10.png',
        social_name: 'Social 10',
        description:
          'This is a large description for the tenth social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 105,
        type: 'Type 10',
        objectif_total: 6700,
        objectif_current: 250,
      },
      {
        id: 11,
        image_url: 'https://www.example.com/image11.png',
        social_name: 'Social 11',
        description:
          'This is a large description for the eleventh social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 115,
        type: 'Type 11',
        objectif_total: 6900,
        objectif_current: 700,
      },
      {
        id: 12,
        image_url: 'https://www.example.com/image12.png',
        social_name: 'Social 12',
        description:
          'This is a large description for the twelfth social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 85,
        type: 'Type 12',
        objectif_total: 6200,
        objectif_current: 1800,
      },
      {
        id: 13,
        image_url: 'https://www.example.com/image13.png',
        social_name: 'Social 13',
        description:
          'This is a large description for the thirteenth social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 95,
        type: 'Type 13',
        objectif_total: 5300,
        objectif_current: 1300,
      },
      {
        id: 14,
        image_url: 'https://www.example.com/image14.png',
        social_name: 'Social 14',
        description:
          'This is a large description for the fourteenth social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 120,
        type: 'Type 14',
        objectif_total: 7000,
        objectif_current: 300,
      },
      {
        id: 15,
        image_url: 'https://www.example.com/image15.png',
        social_name: 'Social 15',
        description:
          'This is a large description for the fifteenth social cause that needs your support. Please consider donating to help us achieve our goal.',
        donation_count: 100,
        type: 'Type 15',
        objectif_total: 6000,
        objectif_current: 500,
      },
    ];
  }
}
