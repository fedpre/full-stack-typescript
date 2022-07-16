import React from 'react';
import { Diagnosis, Entry } from '../types';
import HospitalEntry from './HospitalEntry';
import OccupationalHealthcareEntry from './OccupationalHealthcareEntry';

interface Props {
  diagnosis: Array<Diagnosis>
  entry: Entry
}

const EntryDetails: React.FC<Props> = ({ entry, diagnosis }) => {

  switch(entry.type) {
    case "Hospital":
      return <HospitalEntry diagnosis={diagnosis} entry={entry} />;

    case "OccupationalHealthcare":
      return <OccupationalHealthcareEntry diagnosis={diagnosis} entry={entry} />;

    case "HealthCheck":
      return <HospitalEntry diagnosis={diagnosis} entry={entry} />;

    default:
      return <></>;
  }
};

export default EntryDetails;