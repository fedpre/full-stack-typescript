import React from 'react';
import { Diagnosis, Patient } from '../types';
import HospitalEntry from './HospitalEntry';
import OccupationalHealthcareEntry from './OccupationalHealthcareEntry';

interface Props {
  diagnosis: Array<Diagnosis>;
  patient: Patient
}

const EntryDetails = (props: Props) => {
  switch(props.patient.entries[0]?.type) {
    case "Hospital":
      return <HospitalEntry diagnosis={props.diagnosis} patient={props.patient} />;

    case "OccupationalHealthcare":
      return <OccupationalHealthcareEntry diagnosis={props.diagnosis} patient={props.patient} />;

    case "HealthCheck":
      return <HospitalEntry diagnosis={props.diagnosis} patient={props.patient} />;

    default:
      return <></>;
  }
};

export default EntryDetails;