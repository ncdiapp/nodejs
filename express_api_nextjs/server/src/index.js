import express from 'express';
import cors from "cors";
import mysql from 'mysql2';
import dotenv from 'dotenv';
import { getCemeteries, getProfiles, getProfileById } from './service/appService.js';


dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

const app = express();

app.use(cors());

app.get('/api/v1/cemeteries', getCemeteries);
app.get('/api/v1/profiles', getProfiles);
app.get('/api/v1/profiles/:id', getProfileById);


app.listen(5000, () => console.log('App listening on port 5000!'));