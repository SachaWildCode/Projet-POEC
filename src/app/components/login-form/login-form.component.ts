import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { passwordValidator } from '../../shared/validators/password';
import { RouterModule } from '@angular/router';
import { AuthCarouselComponent } from '../auth-carousel/auth-carousel.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule, AuthCarouselComponent],
  standalone: true,
})
export class LoginFormComponent {
  loginForm: FormGroup;
  showRequired = false;

  constructor(
    private fb: FormBuilder,
    private location: Location
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]],
      rememberMe: [false],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.warn(this.loginForm.value);
      this.showRequired = false;
      this.location.back();
    } else {
      this.showRequired = true;
    }
  }
}
