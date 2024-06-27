import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IRegisterFormModel } from '../../shared/models/iregister-form-model';
import { Gender, StreetType } from '../../shared/types';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  registerForm!: FormGroup<IRegisterFormModel>;
  genderOptions: Gender[] = ['Homme', 'Femme', 'Autre'];
  streetTypeOptions: StreetType[] = ['Avenue', 'Boulevard', 'Rue'];

  constructor(private fb: NonNullableFormBuilder) {
    this.registerForm = this.fb.group({
      account: this.fb.group(
        {
          email: ['', Validators.email],
          password: ['', Validators.minLength(8)],
          confirmPassword: [''],
        },
        { validators: Validators.required }
      ),
      user: this.fb.group(
        {
          firstName: [''],
          lastName: [''],
          phone: [''],
          birthDate: [new Date()],
          gender: ['Homme' as Gender],
        },
        { validators: Validators.required }
      ),
      address: this.fb.group(
        {
          street_type: ['' as StreetType],
          street_number: [''],
          street_name: [''],
          city: [''],
          zipCode: [''],
          country: [''],
          state: [''],
        },
        { validators: Validators.required }
      ),
    });
  }
}
