import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toastr: ToastrService
  ) {
    this.initializeForm();
  }

  private initializeForm() {
    this.registerForm = this.fb.group({
      account: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, passwordValidator]],
          confirmPassword: ['', [Validators.required]],
        },
        { validators: [confirmPasswordValidator] }
      ),
      user: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: ['', Validators.required],
        birthDate: ['', Validators.required],
        gender: ['Homme' as Gender, Validators.required],
      }),
      address: this.fb.group({
        streetType: ['' as StreetType, Validators.required],
        streetNumber: ['', Validators.required],
        streetName: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', Validators.required],
        department: ['', Validators.required],
        region: ['', Validators.required],
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
              this.toastr.success(`Inscription réussie !`);
              this.currentStep = 4;
              this.errorMessage = null;
            })
            .catch((err: unknown) => {
              console.error('Navigation error:', err);
            });
        },
        error: (err: ApiError) => {
          this.errorMessage = err.error.message;
          this.currentStep = 3;
          this.toastr.error(err.error.message);
        },
      });
    }
  }
}
