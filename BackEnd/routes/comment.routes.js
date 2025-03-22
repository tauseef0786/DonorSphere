import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { createComment, getComments, updateComment, deleteComment } from '../controller/comment.controller.js';

const router = express.Router();

// Public route to fetch comments for a campaign
router.get('/:campaignId', getComments);

// Protected routes (requires authentication)
router.post('/:campaignId', authMiddleware, createComment);
router.patch('/:id', authMiddleware, updateComment);
router.delete('/:id', authMiddleware, deleteComment);

export default router;
