import mysql from 'mysql2';
import dotenv from 'dotenv';
import { query_getProfiles } from './queryList.js';  

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise();



export const getCemeteries = async (req, res) => {
  try {
    const [cemeteries] = await pool.query(`
          SELECT *
          FROM chalicedb.cemeteries_top100
        `);

    return res.status(200).json({ cemeteries });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCemeteryById = async (req, res) => {
    try {
      const { id } = req.params;
        
      const [cemetery] = await pool.query(
        `SELECT *
          FROM chalicedb.cemeteries_top100 WHERE cemetery_id = ?`,
        [id]);
  
      if (cemetery.length === 0) {
        return res.status(404).json({ error: 'Cemetery not found' });
      }
  
      return res.status(200).json({ cemetery: cemetery[0] });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

export const getProfiles = async (req, res) => {
  try {
    const { name } = req.query;

    if (name) {
      let query = `SELECT * FROM (${query_getProfiles}) AS temp WHERE full_name LIKE ?`;
      let queryParams = [];
      queryParams.push(`%${name}%`);

      const [profiles] = await pool.query(query, queryParams);

      return res.status(200).json({ profiles });
    } else {
      const profiles = [];
      return res.status(200).json({ profiles });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProfileById = async (req, res) => {
  try {
    const { id } = req.params;

    const [profile] = await pool.query(
      `SELECT * FROM (${query_getProfiles}) AS temp WHERE decedent_id = ?`,
      [id]);

    if (profile.length === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    return res.status(200).json({ profile: profile[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
