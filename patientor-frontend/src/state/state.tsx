import React, { createContext, useContext, useReducer } from "react";
import { Patient, Gender, Diagnosis, Entry } from "../types";

import { Action } from "./reducer";

export type State = {
  patients: { [id: string]: Patient };
  patient: Patient;
  diagnosis: Array<Diagnosis>;
};

const initialState: State = {
  patients: {},
  patient: {
    id: '',
    name: '',
    occupation: '',
    gender: Gender.Other,
    ssn: '',
    dateOfBirth: '',
    entries: [],
  },
  diagnosis: []
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState
]);

type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};

export const StateProvider = ({
  reducer,
  children
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);

export const setPatientList = (patientList: Patient[]): Action => {
  return {
    type: 'SET_PATIENT_LIST',
    payload: patientList
  };
};

export const setPatient = (patient: Patient): Action => {
  return {
    type: 'SET_PATIENT',
    payload: patient
  };
};

export const getPatient = (): Action => {
  return {
    type: 'GET_PATIENT',
  };
};


export const addPatient = (patient: Patient): Action => {
  return {
    type: 'ADD_PATIENT',
    payload: patient
  };
};

export const addEntry = (entry: Entry): Action => {
  return {
    type: 'ADD_ENTRY',
    payload: entry
  };
};

export const getDiagnosis = (): Action => {
  return {
    type: "GET_DIAGNOSIS"
  };
};

export const setDiagnosis = (diagnosis: Array<Diagnosis>): Action => {
  return {
    type: "SET_DIAGNOSIS",
    payload: diagnosis
  };
};
