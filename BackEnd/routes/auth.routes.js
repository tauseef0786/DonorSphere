import express from 'express';
import { register, login } from '../controller/auth.controller.js'; // Correct Import

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router; // Correct Export
