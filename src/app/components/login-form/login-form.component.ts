import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { passwordValidator } from '../../shared/validators/password';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class LoginFormComponent implements OnDestroy, AfterViewInit {
  loginForm: FormGroup;
  showRequired = false;
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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]],
      rememberMe: [false],
    });
  }

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

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.warn(this.loginForm.value);
      this.showRequired = false;
    } else {
      this.showRequired = true;
    }
  }
}
