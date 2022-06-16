import React from 'react';
import { Diagnosis, Patient } from '../types';

interface Props {
  diagnosis: Array<Diagnosis>;
  patient: Patient
}

const OccupationalHealthcareEntry = (props: Props) => {
  console.log(props.patient.entries[0]?.type);
  
  return (
    <div>
      <h2>Entries</h2>
        {
          props.patient.entries[0] !== undefined && props.diagnosis[0] !== undefined
          ? <>
              <p>{props.patient.entries[0].date} <i>{props.patient.entries[0].description}</i></p>
                <ul>
                  {props.patient.entries[0].diagnosisCodes?.map(code => {
                    const codeFound = props.diagnosis.find(d => d.code === code);
                    if(codeFound === undefined) {
                      return (<li key={code}>{code}</li>);
                    } else {
                      return (<li key={code}>{code} {codeFound.name}</li>);
                    }
                  })
                  }

                </ul>
            </>
          :<></>
        }
    </div>
  );
};

export default OccupationalHealthcareEntry;