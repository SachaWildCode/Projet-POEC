import { Gender } from './types';

export interface AccountPostRequest {
  email: string;
  password: string;
}

export interface AddressPostRequest {
  streetNumber: string;
  streetType: string;
  streetName: string;
  city: string;
  region: string;
  department: string;
  zipCode: string;
}

export interface RegisterRequest {
  account: AccountPostRequest;
  address: AddressPostRequest;
  birthday: string;
  firstname: string;
  lastname: string;
  phone: string;
  gender: Gender;
}
