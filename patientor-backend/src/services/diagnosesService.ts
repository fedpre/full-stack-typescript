import diagnoseEntries from "../../data/diagnoses";
import { Diagnose } from "../types";

const getAllDiagnoses = (): Array<Diagnose> => {
  return diagnoseEntries;
};

export default { getAllDiagnoses };