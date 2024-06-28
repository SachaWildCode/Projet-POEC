import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-auth-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-carousel.component.html',
  styleUrl: './auth-carousel.component.scss',
})
export class AuthCarouselComponent implements OnDestroy, AfterViewInit {
  messages: { title: string; text: string; imageUrl: string }[] = [
    {
      title: 'Continuez à faire la différence',
      text: "Suivez l'impact de vos dons et découvrez les nouvelles initiatives des associations que vous soutenez.",
      imageUrl: '/difference.jpg',
    },
    {
      title: 'Gestion simplifiée',
      text: 'Accédez facilement à votre profil, ajustez vos dons et explorez de nouvelles causes qui vous tiennent à cœur.',
      imageUrl: '/gestion.jpg',
    },
    {
      title: 'Communauté engagée',
      text: "Rejoignez une communauté de donateurs passionnés et partagez votre expérience avec d'autres.",
      imageUrl: '/communaute.jpg',
    },
    {
      title: 'Transparence et confiance',
      text: 'Consultez des rapports détaillés et assurez-vous que vos contributions sont utilisées de manière optimale.',
      imageUrl: '/transparence.jpg',
    },
  ];
  currentMessageIndex = 0;
  private intervalId!: ReturnType<typeof setInterval>;

  ngAfterViewInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
    }, 5000);
  }
}
