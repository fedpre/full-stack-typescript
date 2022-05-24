import patientEntries from "../../data/patients";
import { newPatient, nonSensitivePatientData, Patient, SinglePatient } from "../types";
import { v1 as uuid } from 'uuid';


const getNonSensitivePatientData = (): nonSensitivePatientData[] => {
  return patientEntries.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, name, dateOfBirth, gender, occupation
  }));
};

const getPatientById = (id: string): SinglePatient => {
  const patientFound: SinglePatient = patientEntries.find(patient => patient.id === id)
  return patientFound
}

const addPatient = (patient: newPatient): Patient => {
  const newPatientEntry = {
    id: uuid(),
    ...patient,
  };
  patientEntries.push(newPatientEntry);
  return newPatientEntry;
};

export default { getNonSensitivePatientData, addPatient, getPatientById };