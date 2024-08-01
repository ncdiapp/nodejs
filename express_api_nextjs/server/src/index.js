import express from 'express';
import cors from "cors";
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }).promise()




const app = express();

app.use(cors());

app.get('/api/v1/users', async (req, res) =>{
      try {
        // const users = [
        //   { id: 1, name: "John Doe" },
        //   { id: 2, name: "Jane Doe" },
        // ];

        const [users] = await pool.query("select * from user limit 10")

        return res.status(200).json({ users });
      } catch (error) {
        console.log(error);
        throw error;
      }

})

app.listen(5000, () => console.log('App listening on port 5000!'));