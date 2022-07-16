import React from 'react';
import { Diagnosis, Entry } from '../types';

interface Props {
  diagnosis: Array<Diagnosis>
  entry: Entry
}

const HospitalEntry: React.FC<Props> = ({ entry, diagnosis}) => {
  
  return (
    <div>
        {
          entry !== undefined && diagnosis[0] !== undefined
          ? <div style={{"border": "1px solid #000", "marginBottom": "20px", "padding": "10px", "borderRadius": "5px"}}>
              <p>{entry.date} <i>{entry.description}</i></p>
                <ul>
                  {entry.diagnosisCodes?.map(code => {
                    const codeFound = diagnosis.find(d => d.code === code);
                    if(codeFound === undefined) {
                      return (<li key={code}>{code}</li>);
                    } else {
                      return (<li key={code}>{code} {codeFound.name}</li>);
                    }
                  })
                  }

                </ul>
                <p>Diagnose by MD House</p>
            </div>
          :<></>
        }
    </div>
  );
};

export default HospitalEntry;