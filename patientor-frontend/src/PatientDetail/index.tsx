
import { useParams } from 'react-router-dom';
import { Patient } from '../types';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { useStateValue, setPatient, getPatient } from "../state";
import React from 'react';
import axios from 'axios';
import { apiBaseUrl } from "../constants";


const PatientDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [{ patient }, dispatch] = useStateValue();

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
      void fetchPatient();
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
          patient.entries[0] !== undefined
          ? <>
              <p>{patient.entries[0].date} <i>{patient.entries[0].description}</i></p>
                <ul>
                  {patient.entries[0].diagnosisCodes?.map(code => (
                    <li key={code}>{code}</li>
                   ))
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