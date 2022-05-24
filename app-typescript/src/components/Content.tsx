import { CoursePart } from "../types";
import Part from "./Part";

interface Props {
  courseParts: CoursePart[]
}

const Content = (props: Props) => {
  return (
    <>
      <Part courseParts={props.courseParts} />
    </>
  )
}

export default Content;