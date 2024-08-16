import mysql from 'mysql2';
import dotenv from 'dotenv';
import { query_getProfiles } from './queryList.js';
import axios from 'axios';

let sessionId = process.env.ANONYMOUS_USER_SESSION_ID;

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
        } `        `

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
            let query = `SELECT * FROM (${query_getProfiles}) AS temp WHERE full_name LIKE ? order by cemeteryname, full_name`;
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

export const getProfilesByCelemteryId = async (req, res) => {
    try {
        const { cemeteryid } = req.params;
        const { name } = req.query;

        if (name && cemeteryid) {
            let query = `SELECT * FROM (${query_getProfiles}) AS temp WHERE full_name LIKE ? and cemetery_num = ? order by full_name`;
            let queryParams = [];
            queryParams.push(`%${name}%`);
            queryParams.push(`${cemeteryid}`);

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


// export const mgtService_getProfiles = async (req, res) => {
//     try {
//         const { name } = req.query;
       
//         if (name) {
//             const apiUrl = `http://pc1/gather_1/webapi/DataIntegration/Profile_api?CurrentUserSessionId=${sessionId}&first_name=${name}`;
            
//             const response = await axios.get(apiUrl);           

//             return res.status(200).json(response);
//         } else {            
//             return res.status(200).json([]);
//         }        
        
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// };