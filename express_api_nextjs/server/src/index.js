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

        //const [users] = await pool.query("select * from user limit 10")

        const [users] = await pool.query(`
          SELECT
            cemeteries_top100Id,
            cemetery_id,
            \`name\`,
            contact,
            address1,
            address2,
            address3,
            city,
            governing_district,
            governing_district_cd,
            url,
            phone_number,
            email,
            lat,
            \`long\`,
            ncp,
            vlm_active,
            image_id,
            created_date,
            updated_date,
            deleted_date,
            postal_area,
            country,
            country_cd,
            cemetery_type_indicator,
            OriginalFile
          FROM chalicedb.cemeteries_top100
        `);
        

        return res.status(200).json({ users });
      } catch (error) {
        console.log(error);
        throw error;
      }

})

app.listen(5000, () => console.log('App listening on port 5000!'));