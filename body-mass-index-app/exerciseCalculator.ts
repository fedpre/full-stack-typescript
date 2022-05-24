interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
};


// function parseArgsCalc(args: Array<string>) {
//   if (args.length < 3) throw new Error('Invalid amount of arguments. Please provide the target amount and the training hours per day');
//   const hours = Array()
//   const target = Number(args[2])
//   for (let i=3; i < args.length; i++) {
//     if (isNaN(Number(args[i]))) {
//       throw new Error('Provided values were not numbers.')
//     } else {
//       hours.push(Number(args[i]))
//     }
//   }

//   return {target, hours}
// }

export const calculateExercise = (target: number, trainingWeek: Array<number>): Result => {
  return {
    periodLength: trainingWeek.length,
    trainingDays: trainingWeek.filter(d => d !== 0).length,
    success: trainingWeek.filter(d => d !== 0).length === 4 ? true : false,
    rating: Math.round(trainingWeek.reduce((sum, curr) => curr + sum) / trainingWeek.length),
    ratingDescription: trainingWeek.reduce((sum, curr) => curr + sum) / trainingWeek.length == 1 ? "poor" : "great",
    target: target,
    average: trainingWeek.reduce((sum, curr) => curr + sum) / trainingWeek.length
  }
};

// try {
//   const { target, hours } = parseArgsCalc(process.argv);
//   console.log(calculateExercise(target, hours));
// } catch (error: unknown) {
//   let errorMessage = 'Something is wrong ->'
//   if (error instanceof Error) {
//     errorMessage += ` Error: ${error.message}`
//   }
//   console.log(errorMessage);
// }