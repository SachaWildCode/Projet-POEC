import { FormControl, FormGroup } from '@angular/forms';
import { Gender, StreetType } from '../types';

export interface IRegisterFormModel {
  account: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
  }>;
  user: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    phone: FormControl<string>;
    birthDate: FormControl<string>;
    gender: FormControl<Gender>;
  }>;
  address: FormGroup<{
    streetType: FormControl<StreetType>;
    streetNumber: FormControl<string>;
    streetName: FormControl<string>;
    city: FormControl<string>;
    zipCode: FormControl<string>;
    department: FormControl<string>;
    region: FormControl<string>;
  }>;
}
