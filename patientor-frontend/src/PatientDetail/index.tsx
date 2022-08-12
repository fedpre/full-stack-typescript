
import { useParams } from 'react-router-dom';
import { Button } from "@material-ui/core";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Patient, Diagnosis, Entry } from '../types';
import { useStateValue, setPatient, getPatient, setDiagnosis, getDiagnosis, addEntry } from "../state";
import React from 'react';
import axios from 'axios';
import { apiBaseUrl } from "../constants";
import EntryDetails from '../components/EntryDetails';
import { AddEntryModal } from '../AddPatientModal';


const PatientDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [{ patient, diagnosis }, dispatch] = useStateValue();

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

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

    const submitNewEntry = async (values: Entry) => {
      if (id !== undefined)
      try {
        const { data: newEntry } = await axios.post<Entry>(
          `${apiBaseUrl}/patients/${id}/entries`,
          values
        );
        dispatch(addEntry(newEntry));
        closeModal();
      } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
          console.error(e?.response?.data || "Unrecognized axios error");
          setError(String(e?.response?.data?.error) || "Unrecognized axios error");
        } else {
          console.error("Unknown error", e);
          setError("Unknown error");
        }
      }
    };

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
      <h2>Entries</h2>
      {
        patient.entries.map(entry => (
          <div key={entry.id}>
            <EntryDetails 
              diagnosis={diagnosis}
              entry={entry}
            />
          </div>
        ))
      }
    
      <AddEntryModal
        modalOpen={modalOpen}
        onSubmit={submitNewEntry}
        error={error}
        onClose={closeModal}
      />

      <Button variant="contained" onClick={() => openModal()}>
        Add New Entry
      </Button>
    </div>
  );

};
export default PatientDetail;