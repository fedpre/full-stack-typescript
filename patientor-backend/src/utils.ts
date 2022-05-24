import { Gender, newPatient } from "./types";

type PatientEntry = { name: string, dateOfBirth: string, ssn: string, gender: Gender, occupation: string};

const checkPatientEntry = (patient: PatientEntry): newPatient =>  {
  const newEntry: newPatient = {
    name: parseString(patient.name, 'name'),
    dateOfBirth: parseDate(patient.dateOfBirth),
    ssn: parseString(patient.ssn, 'ssn'),
    gender: parseGender(patient.gender),
    occupation: parseString(patient.occupation, 'occupation'),
  };
  return newEntry;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseString = (name: unknown, type: string): string => {
  if(!name || !isString(name)) {
    throw new Error('Incorrect or missing ' + type);
  }
  return name;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if(!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

export default checkPatientEntry;