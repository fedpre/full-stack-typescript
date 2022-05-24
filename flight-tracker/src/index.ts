import express from 'express';
import diaryRouter from './routes/diaries';

// create instance of express server
const app = express();
// add the middleware to accept json HTTP requests
app.use(express.json());

// define the port on which the server will be running
const PORT = 3000;

// test endpoint
app.get('/ping', (_req, res) => {
  console.log("someone pinged here");
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});