import express from 'express';
import { body, param } from 'express-validator';
import { getAllCampaigns, createCampaign, updateCampaign, deleteCampaign } from '../controller/campaign.controller.js';
import { authMiddleware, adminMiddleware } from '../middleware/auth.js';

const router = express.Router();

// 📌 Get all campaigns
router.get('/', getAllCampaigns);

// 📌 Create campaign (Admin only)
router.post('/',
    authMiddleware,
    adminMiddleware,
    [
        body('title').notEmpty().trim(),
        body('description').notEmpty(),
        body('goal').isFloat({ min: 0 }),
        body('startDate').isISO8601(),
        body('endDate').isISO8601(),
    ],
    createCampaign
);

// 📌 Update campaign
router.put('/:id',
    authMiddleware,
    adminMiddleware,
    [
        param('id').isMongoId(),
        body('title').optional().trim(),
        body('description').optional(),
        body('goal').optional().isFloat({ min: 0 }),
    ],
    updateCampaign
);

// 📌 Delete campaign
router.delete('/:id',
    authMiddleware,
    adminMiddleware,
    [param('id').isMongoId()],
    deleteCampaign
);

export default router;
