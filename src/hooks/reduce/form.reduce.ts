// import type React from "react";
import type { FormState } from "../../typescript/interface/form.reducer.state.interface";
import type { FormAction } from "../../typescript/types/form.action.type";
const formInitialState: FormState = {
  current_step: 0,
  formData: {
    introData: {
      first_name: "",
      middle_name: "",
      last_name: "",
      father_name: "",
      mother_name: "",
      age: "",
      gender: "",
      d_o_b: "",
      phone_number: "",
      alternative_number: "",
      email: "",
      github_profile: "",
      linkedIn_profile: "",
    },
    addressData: {
      address_line_1: "",
      address_line_2: "",
      country: "",
      city: "",
      state: "",
      landmark: "",
      zip_code: "",
    },
  },
  isSubmitted: false,
  isToggle: false,
  isSubmitting: false,
  loading: false,
  error: null,
};

export const getInitialFormData = (): FormState => {
  const savedData = localStorage.getItem("formData");

  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (error) {
      console.error("failed to get data", error);
      return formInitialState;
    }
  }
  return formInitialState;
};

export const formSubbmitionReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "SUBMISSION_START":
      return { ...state, isSubmitting: true, error: null };
    case "NEXT_STEP":
      return { ...state, current_step: state.current_step + 1, error: null };
    case "PREV_STEP":
      return {
        ...state,
        current_step: Math.max(0, state.current_step - 1),
        error: null,
      };
    case "UPDATE_FEILD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.step]: {
            ...state.formData[action.payload.step],
            ...action.payload.data,
          },
        },
      };
    case "SUBMISSION_SUCCESS":
      return {
        ...state,
        isSubmitted: true,
        isSubmitting: false,
        error: null,
      };
    case "SUBMISSION_FAILED":
      return {
        ...state,
        isSubmitting: false,
        error: action.payload,
      };
    case "TOGGLE_TERMS":
      return {
        ...state,
        isToggle: !state.isToggle,
      };
    case "RESET":
      return {
        ...formInitialState,
      };
    default:
      return state;
  }
};
