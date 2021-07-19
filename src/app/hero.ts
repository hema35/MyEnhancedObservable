export interface Hero{
  id : number;
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

export interface Address{
  address1: string;
  address2: string;
  zip: string;
  state: string;
}
