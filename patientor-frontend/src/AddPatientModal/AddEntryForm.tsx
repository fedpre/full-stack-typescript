import { Entry } from "../types";

interface Props {
    onSubmit: (values: Entry) => void;
    onCancel: () => void;
  }

const AddEntryForm = ({ onSubmit, onCancel }: Props) => { 
  return (
    <div>AddEntryForm</div>
  );
};

export default AddEntryForm;