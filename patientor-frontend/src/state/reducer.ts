import { State } from "./state";
import { Diagnosis, Entry, Patient } from "../types";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
      type: "SET_PATIENT";
      payload: Patient;
    }
  | {
      type: "GET_PATIENT";
    }
  | {
      type: "SET_DIAGNOSIS";
      payload: Array<Diagnosis>;
    }
  | {
      type: "GET_DIAGNOSIS"
    }
  | {
    type: "ADD_ENTRY";
    payload: Entry;
  };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "SET_PATIENT":
      return {
        ...state,
        patient: action.payload
      };
    case "GET_PATIENT":
      return state;
      
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "ADD_ENTRY":
      return {
        ...state,
        patient: {
          ...state.patient,
          entries: [
            ...state.patient.entries,
            action.payload
          ]
        }
      };
    case "GET_DIAGNOSIS":
      return state;

    case "SET_DIAGNOSIS":
      return {
        ...state,
        diagnosis: action.payload
      };
    default:
      return state;
  }
};
