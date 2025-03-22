import express from 'express';
import { 
  createDonation, 
  getDonationsByCampaign, 
  getAllDonations, 
  updateDonationStatus, 
  deleteDonation 
} from '../controller/donation.controller.js';

const router = express.Router();

// Public Routes
router.get('/:campaignId', getDonationsByCampaign);  // Get donations by campaign

// Protected Routes (you can add middleware for authentication)
router.post('/', createDonation);
router.get('/', getAllDonations); // Get all donations for admin panel
router.patch('/:id', updateDonationStatus);
router.delete('/:id', deleteDonation);

export default router;
