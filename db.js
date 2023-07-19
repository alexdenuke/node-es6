// const dotenv = require('dotenv');
import pkg from 'pg';
const { Pool } = pkg;

// dotenv.config();

// const env = process.env.NODE_ENV || 'development';

// const pool = new Pool({
//   user: process.env.DB_USERNAME,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: 5432,
// });

 export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'oilmarketpd',
    password: 'zombi119',
    port: 5432,
  });
  
  
  pool.connect()
    .then(() => console.log('connected'))
    .catch(e => console.error('connection error', e.stack));



// export default pool;