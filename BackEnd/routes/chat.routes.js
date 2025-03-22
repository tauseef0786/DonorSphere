import express from 'express';
import { body, param } from 'express-validator';
import { sendMessage, getChatMessages } from '../controller/chat.controller.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Send a message (Authenticated users)
router.post('/',
    authMiddleware,
    [
        body('campaignId').isMongoId(),
        body('message').notEmpty(),
    ],
    sendMessage
);

// Get chat messages for a specific campaign
router.get('/:campaignId',
    authMiddleware,
    [param('campaignId').isMongoId()],
    getChatMessages
);

export default router;
