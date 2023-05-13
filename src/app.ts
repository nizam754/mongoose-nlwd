import express, {Application, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express()

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', );


export default app;