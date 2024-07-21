export interface IUser {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  birthDate: string;
  avatarUrl: string | null;
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
