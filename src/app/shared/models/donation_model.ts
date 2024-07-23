import { Content } from './organization-model';

export interface Donation {
  organization: Content;
  amount: number;
  percentage: number;
}
