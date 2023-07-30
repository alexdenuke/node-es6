import knex from 'knex';
import config from '../db/knexfile.js'

// Create a knex instance with the development configuration
const db = knex(config.development);

const getAdminByLogin = async (login) => {
  const admin = await db('admins')
    .where({ login })
    .first();
  return admin;
};

export default { getAdminByLogin };