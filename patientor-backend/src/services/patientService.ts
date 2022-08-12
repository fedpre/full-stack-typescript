import patientEntries from "../../data/patients";
import { Entry, newPatient, nonSensitivePatientData, Patient, SinglePatient } from "../types";
import { v1 as uuid } from 'uuid';


const getNonSensitivePatientData = (): nonSensitivePatientData[] => {
  return patientEntries.map(({ id, name, dateOfBirth, gender, occupation, ssn }) => ({
    id, name, dateOfBirth, gender, occupation, ssn
  }));
};

const getPatientById = (id: string): SinglePatient => {
  const patientFound: SinglePatient = patientEntries.find(patient => patient.id === id);
  return patientFound;
};

const addPatient = (patient: newPatient): Patient => {
  const newPatientEntry = {
    id: uuid(),
    ...patient,
  };
  patientEntries.push(newPatientEntry);
  return newPatientEntry;
};

const addEntryToPatient = (entry: Entry, id: string) => {
  let success = false;
  patientEntries.map((patientEntry) => {
    if (patientEntry.id === id) {
      patientEntry.entries.push(entry);
      success = true;
    }
  });
  return success;
};

export default { getNonSensitivePatientData, addPatient, getPatientById, addEntryToPatient };