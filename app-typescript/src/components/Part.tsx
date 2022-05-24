import { CoursePart } from "../types";

interface Props {
  courseParts: CoursePart[];
}

const Part = (props: Props) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };
  return (

    <>
      {props.courseParts.map((part: CoursePart) => {
        switch (part.type) {
          case "normal":
            return(
              <div key={part.name}>
                <p>
                  <strong>{part.name} {part.exerciseCount}</strong><br/>
                  <i>{part.description}</i>
                </p>
              </div>
            );
          case "groupProject":
            return (
              <div key={part.name}>
                <p>
                  <strong>{part.name} {part.exerciseCount}</strong><br/> 
                  Project exercises: {part.groupProjectCount}
                </p>
              </div>
            )
          case "submission":
            return (
              <div key={part.name}>
                <p>
                  <strong>{part.name} {part.exerciseCount}</strong><br/>
                  <i>{part.description}</i><br/>
                  submit to: {part.exerciseSubmissionLink}
                </p>
              </div>
            )
          case "special":
            return (
              <div key={part.name}>
              <p>
                <strong>{part.name} {part.exerciseCount}</strong><br/>
                <i>{part.description}</i><br/>
                required skills:&nbsp;
                {
                  part.requirements.map(requirement => (
                    <span key={requirement}>
                       {requirement},&nbsp;
                    </span>
                  ))
                }
              </p>
            </div>
            )
          default:
            return assertNever(part);
        }
      })}
    </>
  )
};

export default Part;

