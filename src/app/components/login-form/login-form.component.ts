import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../shared/services/auth-service.service';
import { passwordValidator } from '../../shared/validators/password';
import { AuthCarouselComponent } from '../auth-carousel/auth-carousel.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule, AuthCarouselComponent, FaIconComponent],
  standalone: true,
})
export class LoginFormComponent {
  loginForm: FormGroup;
  showRequired = false;
  passwordVisible = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  errorMessage: string | null = null;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['default@example.com', [Validators.required, Validators.email]],
      password: ['defaultPassword1234*', [Validators.required, passwordValidator]],
      rememberMe: [false],
    });
  }

  //TODO : service redirect to last page not register
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value as { email: string; password: string };
      this.authService.login(email, password).subscribe({
        next: user => {
          console.warn('Login successful', user);
          this.showRequired = false;
        },
        error: err => {
          console.error('Login failed', err);
          this.showRequired = true;
          this.errorMessage = 'Mot de passe ou email invalide'; // Set error message for invalid form
        },
      });
    } else {
      this.showRequired = true;
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
