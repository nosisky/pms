import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import validator from 'express-validator';
import path from 'path';
import locationRouter from "./routes/locationRouter";

dotenv.load();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const server = express();
const port = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(validator());

server.use('/api/v1/location', locationRouter);

server.listen(port);

console.log(`App connected to port: ${port}`);
