import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ApiError } from '../../shared/models/api-error';
import { IRegisterFormModel } from '../../shared/models/iregister-form-model';
import { AccountPostRequest, AddressPostRequest, RegisterRequest } from '../../shared/models/register-request';
import { Gender, StreetType } from '../../shared/models/types';
import { AuthService } from '../../shared/services/auth-service.service';
import { confirmPasswordValidator, passwordValidator } from '../../shared/validators/password';
import { AuthCarouselComponent } from '../auth-carousel/auth-carousel.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AuthCarouselComponent, FaIconComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  registerForm!: FormGroup<IRegisterFormModel>;
  genderOptions: Gender[] = ['Homme', 'Femme', 'Autre'];
  streetTypeOptions: StreetType[] = ['Avenue', 'Boulevard', 'Rue'];
  currentStep = 1;
  passwordVisible = { password: false, confirmPassword: false };
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  errorMessage: string | null = null;

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeForm();
  }

  private initializeForm() {
    this.registerForm = this.fb.group({
      account: this.fb.group(
        {
          email: ['default@example.com', [Validators.required, Validators.email]],
          password: ['defaultPassword1234*', [Validators.required, passwordValidator]],
          confirmPassword: ['defaultPassword1234*', [Validators.required]],
        },
        { validators: [confirmPasswordValidator] }
      ),
      user: this.fb.group({
        firstName: ['John', Validators.required],
        lastName: ['Doe', Validators.required],
        phone: ['1234567890', Validators.required],
        birthDate: ['2000-01-01', Validators.required],
        gender: ['Homme' as Gender, Validators.required],
      }),
      address: this.fb.group({
        streetType: ['Rue' as StreetType, Validators.required],
        streetNumber: ['123', Validators.required],
        streetName: ['Main St', Validators.required],
        city: ['Paris', Validators.required],
        zipCode: ['75000', Validators.required],
        department: ['Ile-de-France', Validators.required],
        region: ['Ile-de-France', Validators.required],
      }),
    });
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    this.passwordVisible[field] = !this.passwordVisible[field];
  }

  nextStep() {
    if (this.currentStep === 3 && !this.registerForm.valid) return;
    const formGroups = ['account', 'user', 'address'];
    const currentGroup = this.registerForm.get(formGroups[this.currentStep - 1]);
    if (currentGroup?.valid && this.currentStep < 4) this.currentStep++;
  }

  previousStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  onSubmit() {
    this.nextStep();
    if (this.registerForm.valid && this.currentStep === 4) {
      const { account, address } = this.registerForm.value;
      const registerRequest: RegisterRequest = {
        account: account as AccountPostRequest,
        address: address as AddressPostRequest,
        birthday: this.registerForm.get('user.birthDate')?.value ?? '',
        firstname: this.registerForm.get('user.firstName')?.value ?? '',
        lastname: this.registerForm.get('user.lastName')?.value ?? '',
        phone: this.registerForm.get('user.phone')?.value ?? '',
        gender: this.registerForm.get('user.gender')?.value ?? 'Autre',
      };

      this.authService.register(registerRequest).subscribe({
        next: () => {
          this.router
            .navigate(['/auth/login'])
            .then(() => {
              this.currentStep = 4;
              this.errorMessage = null;
            })
            .catch((err: unknown) => {
              console.error('Navigation error:', err);
            });
        },
        error: (err: ApiError) => {
          this.errorMessage = err.error.message;
        },
      });
    }
  }
}
