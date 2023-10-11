import { BookingInterface } from 'interfaces/booking';
import { LocationInterface } from 'interfaces/location';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  location?: LocationInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    booking?: number;
    location?: number;
    review?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  color?: string;
  company_id?: string;
  user_id?: string;
}
