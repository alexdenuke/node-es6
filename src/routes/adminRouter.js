import express from 'express';
import adminController from '../controllers/adminController.js';

const router = express.Router();

router.post('/', adminController.login);
router.get('/adminPanel', adminController.authDone);

console.log('hi-route');

export default router;