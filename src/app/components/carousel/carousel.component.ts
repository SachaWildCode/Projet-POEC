// carousel.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

interface CarouselItem {
  title: string;
  description: string;
  imageUrl: string;
  sliderValue: number;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  items: CarouselItem[] = [
    {
      title: 'Fondation Abbé Pierre',
      description:
        'La Fondation Abbé-Pierre, créée en 1987 et reconnue d utilité publique en 1992, aide les personnes démunies à accéder à un logement décent et à une vie digne, indépendamment de leurs ressources.',
      imageUrl: 'https://www.ladn.eu/wp-content/uploads/2016/07/actu_32651_vignette.jpg',
      sliderValue: 50,
    },
    {
      title: 'Slide 2',
      description: 'Description for Slide 2',
      imageUrl: 'assets/image2.jpg',
      sliderValue: 30,
    },
    {
      title: 'Slide 3',
      description: 'Description for Slide 3',
      imageUrl: 'assets/image3.jpg',
      sliderValue: 70,
    },
    {
      title: 'Slide 4',
      description: 'Description for Slide 4',
      imageUrl: 'assets/image4.jpg',
      sliderValue: 20,
    },
    {
      title: 'Slide 5',
      description: 'Description for Slide 5',
      imageUrl: 'assets/image5.jpg',
      sliderValue: 60,
    },
    {
      title: 'Slide 6',
      description: 'Description for Slide 6',
      imageUrl: 'assets/image6.jpg',
      sliderValue: 80,
    },
    {
      title: 'Slide 7',
      description: 'Description for Slide 7',
      imageUrl: 'assets/image7.jpg',
      sliderValue: 40,
    },
    {
      title: 'Slide 8',
      description: 'Description for Slide 8',
      imageUrl: 'assets/image8.jpg',
      sliderValue: 90,
    },
  ];

  currentIndex = 0;
  slideInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    // Your implementation of startAutoSlide() method here
  }
}
