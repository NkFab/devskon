import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { logger } from './helpers';

dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    logger.info('Connected to MongoBD...');
  })
  .catch(err => {
    logger.info(err);
  });
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Devskon');
});

export default app;
