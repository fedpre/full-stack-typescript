// interface BmiValues {
//   height: number;
//   weight: number;
// }

// function parseArgsBmi(args: Array<string>): BmiValues {
//   if (args.length < 4 || args.length > 4) throw new Error('Invalid amount of arguments. Please provide one value for weight and one value for height');

//   if(!isNaN(Number(args[2])) && (!isNaN(Number(args[3])))) {
//     return {
//       height: Number(args[2]),
//       weight: Number(args[3])
//     }
//   } else {
//     throw new Error('Provided values were not numbers.')
//   }
// }

export function calculateBmi(height: number, weight: number): string {
  const bmiIndex= weight / ((height / 100) * (height / 100))

  if (bmiIndex < 18.5) {
    return "Underweight"
  } else if (bmiIndex < 24.9) {
    return "Normal (healthy weight)"
  } else if (bmiIndex < 29.9) {
    return "Overweight"
  } else {
    return "Obese"
  }
}

// try {
//   const { height, weight } = parseArgsBmi(process.argv);
//   console.log(calculateBmi(height, weight));
// } catch (error: unknown) {
//   let errorMessage = 'Something is wrong ->'
//   if (error instanceof Error) {
//     errorMessage += ` Error: ${error.message}`
//   }
//   console.log(errorMessage);
// }