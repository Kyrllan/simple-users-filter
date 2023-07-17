import {Address} from './Adress';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  address: Address;
}
