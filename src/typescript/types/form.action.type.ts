import type { FormState } from "../interface/form.reducer.state.interface";

export type FormAction =
  | { type: "SUBMISSION_START" }
  | { type: "NEXT_STEP"}
  | { type: "PREV_STEP" }
  | {
      type: "UPDATE_FEILD";
      payload: { step: keyof FormState["formData"]; data: any };
    }
  | { type: "SUBMISSION_SUCCESS" } | {type : "RESET"} | {type : "TOGGLE_TERMS"}
  | { type: "SUBMISSION_FAILED"; payload: any };
