import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

const app = express();
dotenv.config();
app.use(express.json()) //allow json to input as backend

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb is connected!!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => console.log("Server is running on port 5000!!!"));

app.use('/api/user',userRoutes)
app.use('/api/auth', authRoutes)