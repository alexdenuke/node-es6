import adminService from '../services/adminService.js';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
  console.log('hi5');
  const { login, password } = req.body;
  try {
    const admin = await adminService.getAdmin(login, password);
    if (admin) {
      const token = jwt.sign({ adminId: admin.id }, 'your secret here', { expiresIn: '1h' }); // Create the JWT here
      res.cookie('jwt', token, { 
        httpOnly: true, 
        // secure: true, // помните, что этот флаг должен быть установлен только если вы используете HTTPS
        maxAge: 3600000 // время жизни куки в миллисекундах
      });
      res.json({ redirect: '/adminPanel' });
    } else {
      res.status(401).json({ message: "Invalid login or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const authDone = function (req, res) {
  const token = req.cookies.jwt;  // Предполагается, что токен хранится в куках

  // Проверка на наличие токена
  if (!token) {
    return res.status(401).send("Access Denied. No token provided.");
  }

  try {
    // Если токен есть, то мы пытаемся его проверить
    const decoded = jwt.verify(token, 'your secret here');
    req.adminId = decoded.adminId;

    // Если токен успешно проверен, рендерим страницу админ-панели
    res.render('adminPanel'); 
  } 
  catch (ex) {
    // Если токен не валиден, то возвращаем ошибку
    console.error('Error in authDone controller:', ex); // Выводим ошибку в консоль
    res.status(400).send("Invalid token.");
  }
}

export default { login, authDone };