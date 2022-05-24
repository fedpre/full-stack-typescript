import { CoursePart } from "../types";

interface Props {
  courseParts: CoursePart[]
}

const Total = (props: Props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  )
}

export default Total