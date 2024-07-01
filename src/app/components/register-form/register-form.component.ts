import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IRegisterFormModel } from '../../shared/models/iregister-form-model';
import { Gender, StreetType } from '../../shared/types';
import { CommonModule } from '@angular/common';
import { AuthCarouselComponent } from '../auth-carousel/auth-carousel.component';
import { confirmPasswordValidator, passwordValidator } from '../../shared/validators/password';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
  passwordVisible = {
    password: false,
    confirmPassword: false,
  };
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor(private fb: NonNullableFormBuilder) {
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
        birthDate: [new Date().toISOString().substring(0, 10), Validators.required],
        gender: ['Homme' as Gender, Validators.required],
      }),
      address: this.fb.group({
        street_type: ['' as StreetType, Validators.required],
        street_number: ['', Validators.required],
        street_name: ['', Validators.required],
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
    if (this.currentStep === 3 && !this.registerForm.valid) {
      return;
    }
    const formGroups = ['account', 'user', 'address'];
    const currentGroup = this.registerForm.get(formGroups[this.currentStep - 1]);
    if (currentGroup?.valid && this.currentStep < 4) {
      this.currentStep++;
    } else if (!currentGroup?.valid) {
      // console.log('Current step form group is not valid');
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    this.nextStep();
    if (this.registerForm.valid) {
      //TODO: add user to database
    }
    // TODO need to check if successfully registered
    // if (this.currentStep === 4) {
    //   console.log(this.registerForm.value);
    // } else {
    //   // Vous pouvez éventuellement ajouter une logique pour mettre en surbrillance les champs invalides ou afficher un message d'erreur
    // }  onSubmit(): void {
  }
}
