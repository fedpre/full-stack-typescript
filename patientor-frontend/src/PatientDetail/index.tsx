import { useParams } from 'react-router-dom';
import { Patient } from '../types';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

type Props = {
  patients: { [id: string]: Patient };
};

const PatientDetail = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  let patient;
  
  if (!props.patients) {
    return <div>Loading</div>;
  }
  console.log(props.patients);
  
  if (id != undefined && id in props.patients != undefined) {
    patient = props.patients[id];
  }

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
    </div>
  );
};

export default PatientDetail;