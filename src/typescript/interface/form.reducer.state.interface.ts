export interface FormState {
  current_step: number;
  formData: {
    introData: {
      first_name: null | string;
      middle_name: null | string;
      last_name: null | string;
      father_name: null | string;
      mother_name: null | string;
      age: null | string;
      gender: null | string;
      d_o_b: null | string;
      phone_number: null | string;
      alternative_number: null | string;
      email: null | string;
      github_profile: null | string;
      linkedIn_profile: null | string;
    };
    addressData: {
      address_line_1: null | string;
      address_line_2: null | string;
      country: null | string;
      city: null | string;
      state: null | string;
      landmark: null | string;
      zip_code: null | string;
    };
  };
  isSubmitted: boolean;
  isSubmitting: boolean;
  isToggle: boolean;
  loading: boolean;
  error: null | string;
}
