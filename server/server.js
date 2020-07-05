import express from 'express';
import 'babel-polyfill'; 

import {process, sift} from './process';

const app = express();
app.use(express.json())

app.get('/', async (req, res) => {
  const message = process();
  res.send({
    message: JSON.stringify(message)
  });
});

app.post('/sift', async (req, res) => {
  let message;
  console.warn(req.body)
  if (req.body.moves || req.body.grade) {
    message = sift(req.body);
  } else {
    message = 'Error, no params';
  }

  res.send({
    message: JSON.stringify(message),
  })
})

export default app;
