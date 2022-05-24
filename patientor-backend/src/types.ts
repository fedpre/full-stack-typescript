export type nonSensitivePatientData = Omit<Patient, 'ssn' | 'entries'>;
export type newPatient = Omit<Patient, 'id'>;
export type SinglePatient = Patient | undefined

export interface Entry {
}

export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries?: Entry [];
}

export enum Gender {
  Male = 'male',
  Female = 'female'
}