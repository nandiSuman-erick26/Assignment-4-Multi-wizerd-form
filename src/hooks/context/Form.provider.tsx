import type React from "react";
import { useEffect, useReducer } from "react";
import {
  getInitialFormData,
  formSubbmitionReducer,
} from "../reduce/form.reduce";
import { FormContext } from "./FormContext.create";
import type {
  AddressData,
  PersonalIntroductionData,
} from "../../typescript/interface/multipartFormData";
import { toast } from "sonner";

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formState, formDispatch] = useReducer(
    formSubbmitionReducer,
    getInitialFormData()
  );

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formState));
    console.log("Data from localStorage", formState);
  }, [formState]);

  const firstStepSubmission = (data: PersonalIntroductionData) => {
    console.log("data coming from first step", data);
    try {
      formDispatch({
        type: "SUBMISSION_START",
      });
      formDispatch({
        type: "UPDATE_FEILD",
        payload: { step: "introData", data },
      });
      formDispatch({ type: "NEXT_STEP" });
      toast.success("Successfully done! Please fill the next part!");
    } catch (error) {
      console.log(error);
      formDispatch({ type: "SUBMISSION_FAILED", payload: error });
    }
  };
  const secondStepSubmission = (data: AddressData) => {
    console.log("data coming from second step", data);
    try {
      formDispatch({ type: "SUBMISSION_START" });
      formDispatch({
        type: "UPDATE_FEILD",
        payload: { step: "addressData", data },
      });
      formDispatch({ type: "NEXT_STEP" });
      toast.success("Succesfully done!");
    } catch (error) {
      console.log(error);
      formDispatch({ type: "SUBMISSION_FAILED", payload: error });
    }
  };

  const handleStepBack = () => {
    formDispatch({ type: "PREV_STEP" });
  };

  const displayTick = () => {
    formDispatch({ type: "TOGGLE_TERMS" });
  };

  const finalSubmission = () => {
    try {
      console.log("Final submitted formData", formState?.formData);
      formDispatch({ type: "SUBMISSION_SUCCESS" });
      // localStorage.removeItem("formData");
      toast.success("Congratulations! Aplication Submitted!");
      formDispatch({ type: "RESET" });
    } catch (error) {
      console.log(error);
      formDispatch({ type: "SUBMISSION_FAILED", payload: error });
    }
  };
  return (
    <FormContext.Provider
      value={{
        formState,
        formDispatch,
        firstStepSubmission,
        secondStepSubmission,
        handleStepBack,
        finalSubmission,
        displayTick,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
