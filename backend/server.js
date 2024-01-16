import express from "express";
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
import userRoute from './routes/userRoutes.js'
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const app =express();

app.use('/api/users',userRoute)

app.get('/', (req,res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server Started on port ${port}`)
})