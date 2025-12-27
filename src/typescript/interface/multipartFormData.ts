export interface PersonalIntroductionData {
  first_name: string; //req
  middle_name?: string;
  last_name: string; //req
  father_name: string; //req
  mother_name: string; //req
  age: string; //req
  gender: string; //req
  d_o_b?: string;
  phone_number: string; //req
  alternative_number?: string;
  email: string; //req
  github_profile?: string;
  linkedIn_profile?: string;
}

export interface AddressData {
  address_line_1: string; //req
  address_line_2?: string;
  country: string; //req
  city: string; //req
  state: string; //req
  landmark: string; //req
  zip_code: string; //req
}
