import express from 'express';
import { authMiddleware as protect, adminMiddleware as restrictToAdmin, superAdminMiddleware } from '../middleware/auth.js';
import { getProfile, updateProfile, getAllUsers } from '../controller/user.controller.js';

const router = express.Router();

// User Routes
router.get('/profile', protect, getProfile);
router.patch('/profile', protect, updateProfile);

// Admin & Super Admin Routes
router.get('/', protect, restrictToAdmin, getAllUsers);

export default router;
