import adminService from '../services/adminService.js';

const login = async (req, res) => {
  const { login, password } = req.body;
  try {
    const admin = await adminService.getAdmin(login, password);
    if (admin) {
      // Создайте здесь сессию или JWT, и отправьте его обратно клиенту.
      res.json({ message: "Admin logged in" });
    } else {
      res.status(401).json({ message: "Invalid login or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { login };