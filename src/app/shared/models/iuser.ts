export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthDate: string;
  gender: 'Homme' | 'Femme' | 'Autre';
  address: {
    street_type: 'Avenue' | 'Boulevard' | 'Rue';
    street_number: string;
    street_name: string;
    city: string;
    zipCode: string;
    department: string;
    region: string;
  };
}
