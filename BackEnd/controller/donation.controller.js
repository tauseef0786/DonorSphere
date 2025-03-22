import Donation from '../models/donation.model.js';
import Campaign from '../models/campaign.model.js';

// Create a donation
export const createDonation = async (req, res) => {
  try {
    const { campaign, donor, amount, paymentMethod, bankDetails, qrCodeUrl, message, anonymous } = req.body;

    // Validate payment method and required fields
    if (paymentMethod === 'bank_transfer' && !bankDetails) {
      return res.status(400).json({ message: 'Bank details are required for bank transfer.' });
    }
    if (paymentMethod === 'qr_code' && !qrCodeUrl) {
      return res.status(400).json({ message: 'QR code is required for QR payment.' });
    }

    const donation = new Donation({
      campaign,
      donor,
      amount,
      paymentMethod,
      bankDetails,
      qrCodeUrl,
      message,
      anonymous,
      status: 'pending'
    });

    await donation.save();
    res.status(201).json({ message: 'Donation created successfully', donation });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all donations for a specific campaign
export const getDonationsByCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const donations = await Donation.find({ campaign: campaignId }).populate('donor', 'name email');
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all donations (admin panel)
export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate('campaign', 'title').populate('donor', 'name email');
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update donation status (e.g., mark as completed)
export const updateDonationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, transactionId } = req.body;

    if (!['pending', 'completed', 'failed'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const donation = await Donation.findByIdAndUpdate(
      id,
      { status, transactionId },
      { new: true }
    );

    if (!donation) {
      return res.status(404).json({ message: 'Donation not found' });
    }

    res.status(200).json({ message: 'Donation status updated', donation });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a donation
export const deleteDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donation.findByIdAndDelete(id);
    if (!donation) {
      return res.status(404).json({ message: 'Donation not found' });
    }
    res.status(200).json({ message: 'Donation deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
