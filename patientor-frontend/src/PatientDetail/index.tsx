
import { useParams } from 'react-router-dom';
import { Patient, Diagnosis } from '../types';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { useStateValue, setPatient, getPatient, setDiagnosis, getDiagnosis } from "../state";
import React from 'react';
import axios from 'axios';
import { apiBaseUrl } from "../constants";



const PatientDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [{ patient, diagnosis }, dispatch] = useStateValue();

  React.useEffect(() => {
    const fetchPatient = async () => {
      dispatch({ type: "GET_PATIENT" });
      
      if (id !== undefined && patient.id !== id) {
        try {
          const response = await axios.get<Patient>(
            `${apiBaseUrl}/patients/${id}`
            );
            dispatch(setPatient(response.data));
            dispatch(getPatient());
            
          } catch (e) {
            console.error(e);
          }
        }
      };
    const fetchDiagnosis = async () => {
      
        try {
          const res = await axios.get<Array<Diagnosis>>(
            `${apiBaseUrl}/diagnoses/`
          );
          dispatch(setDiagnosis(res.data));
          dispatch(getDiagnosis());
          
        } catch (e) {
          console.error(e);
        }
      };
      void fetchPatient();
      void fetchDiagnosis();
      
    }, [dispatch]);

  return (
    <div>
      <div style={{ "display": "flex", "alignItems": "center"}}>
        <h1 style={{ "marginRight": "10px" }}>{patient?.name}</h1>
        {
          patient?.gender == "male"
          ? <MaleIcon fontSize='large'/>
          : <FemaleIcon fontSize='large'/>
        }
      </div>
      
      <p>ssh: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
      <p>DOB: {patient?.dateOfBirth}</p>

      <div>
        <h2>Entries</h2>
        {
          patient.entries[0] !== undefined && diagnosis[0] !== undefined
          ? <>
              <p>{patient.entries[0].date} <i>{patient.entries[0].description}</i></p>
                <ul>
                  {patient.entries[0].diagnosisCodes?.map(code => {
                    const codeFound = diagnosis.find(d => d.code === code);
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
    </div>
  );
};
export default PatientDetail;