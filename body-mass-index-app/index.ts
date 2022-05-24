import express from "express";
const app = express();
// add the middleware express.json() to parse incoming JSON data from POST request (for example)
app.use(express.json());

// Import BMI module
import { calculateBmi } from "./bmiCalculator";
import { calculateExercise } from "./exerciseCalculator";
//import { calculateExercise } from "./exerciseCalculator"

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

// BMI ENDPOINT
app.get('/bmi', (req, res) => {
  console.log(req.query);
  // check if the parameters are not numbers
  // return json error
  if (isNaN(Number(req.query.height)) || isNaN(Number(req.query.weight))) {
    res.status(500).json({ error: "Malformatted parameters"});
  };

  // call the function to calculate the BMI
  const bmiResponse = {
    ...req.query,
    bmi: calculateBmi(Number(req.query.height), Number(req.query.weight)),
  };

  // Return the bmi answer
  res.status(200).json(bmiResponse);
})

// EXERCISE CALCULATOR ENDPOINT
app.post('/calculate', (req, res) => {
  
  if (!req.body.target || !req.body.daily_exercises) {
    res.status(400).json({ error: "parameters missing" })
  }

  if (isNaN(req.body.target) || isNaN(req.body.daily_exercises)) {
    res.status(400).json({ error: "malformatted parameters"})
  }

  const calcRes = calculateExercise(req.body.target, req.body.daily_exercises);
  res.status(200).json(calcRes);
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});