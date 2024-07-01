import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const password: string = typeof control.value === 'string' ? control.value : '';
  const errors: ValidationErrors = {};

  if (!/(?=.*[A-Z])/.test(password)) {
    errors['uppercase'] = 'Le mot de passe doit contenir au moins une lettre majuscule.';
  }
  if (!/(?=.*[a-z])/.test(password)) {
    errors['lowercase'] = 'Le mot de passe doit contenir au moins une lettre minuscule.';
  }
  if (!/(?=.*\d)/.test(password)) {
    errors['digit'] = 'Le mot de passe doit contenir au moins un chiffre.';
  }
  if (!/(?=.*[!@#$%^&*(),.?":{}|<>])/.test(password)) {
    errors['special'] = 'Le mot de passe doit contenir au moins un caractère spécial.';
  }
  if (!/.{8,20}/.test(password)) {
    errors['length'] = 'Le mot de passe doit comporter entre 8 et 20 caractères.';
  }

  return Object.keys(errors).length ? errors : null;
}

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value as string;
  const confirmPassword = control.get('confirmPassword')?.value as string;
  return password === confirmPassword ? null : { PasswordNoMatch: true };
};
