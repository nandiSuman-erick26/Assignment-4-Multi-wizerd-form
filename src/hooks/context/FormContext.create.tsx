import React, { createContext } from "react";
import type { FormState } from "../../typescript/interface/form.reducer.state.interface";
import type { FormAction } from "../../typescript/types/form.action.type";
import type {
  AddressData,
  PersonalIntroductionData,
} from "../../typescript/interface/multipartFormData";

export const FormContext = createContext<{
  formState: FormState;
  formDispatch: React.Dispatch<FormAction>;
  firstStepSubmission: (data: PersonalIntroductionData) => void;
  secondStepSubmission: (data: AddressData) => void;
  handleStepBack:()=>void
  finalSubmission:()=>void
  displayTick:()=>void
} | null>(null);
