import { pool } from '../db.js';

const getAdminByLogin = async (login) => {
  const { rows } = await pool.query(
    'SELECT * FROM admins WHERE login = $1',
    [login]
  );
  return rows[0];
};

export default { getAdminByLogin };