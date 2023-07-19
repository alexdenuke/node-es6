import adminRepository from '../repositories/adminRepository.js';
import bcrypt from 'bcrypt';

const getAdmin = async (login, password) => {
  const admin = await adminRepository.getAdminByLogin(login);
  console.log('Admin found:', admin);
  if (admin && await bcrypt.compare(password, admin.password)) {
    console.log('Password matches');
    return admin;
  // if (admin && password === admin.password) {
  //   console.log('Password matches');
  //   return admin;
  }
  console.log('Password does not match or admin not found');
  return null;
};

export default { getAdmin };