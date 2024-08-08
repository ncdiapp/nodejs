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

const query_getProfiles = `
       SELECT kiosk_profiles_1.*, t_honorsdisplay.honorsdisplay, t_servicebranchesdisplay.servicebranchesdisplay, t_warperiodsdisplay.warperiodsdisplay
 FROM  
 kiosk_profiles_1
 left join 
    (SELECT 
        kiosk_profilehonor.decedent_id, 
        GROUP_CONCAT(kiosk_honor.descr ORDER BY kiosk_honor.descr SEPARATOR ', ') AS honorsdisplay
    FROM 
         kiosk_honor
    INNER JOIN 
         kiosk_profilehonor 
        ON kiosk_honor.honor_cd = kiosk_profilehonor.honor_cd
    GROUP BY 
        kiosk_profilehonor.decedent_id) as t_honorsdisplay on kiosk_profiles_1.decedent_id = t_honorsdisplay.decedent_id
left join 
    (SELECT 
        kiosk_profileservicebranch.decedent_id, 
        GROUP_CONCAT(kiosk_servicebranch.description ORDER BY kiosk_servicebranch.description SEPARATOR ', ') AS servicebranchesdisplay
    FROM 
         kiosk_servicebranch
    INNER JOIN 
         kiosk_profileservicebranch 
        ON kiosk_servicebranch.service_branch_id = kiosk_profileservicebranch.service_branch_id
    GROUP BY 
        kiosk_profileservicebranch.decedent_id) as t_servicebranchesdisplay on kiosk_profiles_1.decedent_id = t_servicebranchesdisplay.decedent_id	
left join 
    (SELECT 
    kiosk_profilewarperiods.decedent_id, 
    GROUP_CONCAT(kiosk_warperiods.description ORDER BY kiosk_warperiods.description SEPARATOR ', ') AS warperiodsdisplay
FROM 
     kiosk_warperiods
INNER JOIN 
     kiosk_profilewarperiods 
    ON kiosk_warperiods.war_period_id = kiosk_profilewarperiods.war_period_id
GROUP BY 
    kiosk_profilewarperiods.decedent_id) as t_warperiodsdisplay on kiosk_profiles_1.decedent_id = t_warperiodsdisplay.decedent_id	
    `;


const app = express();

app.use(cors());

app.get('/api/v1/cemeteries', async (req, res) => {
  try {
    const [cemeteries] = await pool.query(`
          SELECT *
          FROM chalicedb.cemeteries_top100
        `);


    return res.status(200).json({ cemeteries });
  } catch (error) {
    console.log(error);
    throw error;
  }

});

app.get('/api/v1/profiles', async (req, res) => {
  try { 
    const [profiles] = await pool.query(query_getProfiles);    

    return res.status(200).json({ profiles });
  } catch (error) {
    console.log(error);
    throw error;
  }

})

app.get('/api/v1/profiles/:id', async (req, res) => {
  try {
    // Extract the cemetery_id from the request parameters
    const { id } = req.params;

    // Query the database for the specific cemetery
    const [profile] = await pool.query(
     `SELECT * FROM (${query_getProfiles}) AS temp WHERE decedent_id = ?`, 
      [id]);

    // Check if the cemetery was found
    if (profile.length === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Return the cemetery data
    return res.status(200).json({ profile: profile[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(5000, () => console.log('App listening on port 5000!'));