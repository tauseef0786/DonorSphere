import Campaign from '../models/campaign.model.js';

// 📌 Get all campaigns
export const getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find()
            .populate('creator', 'fullName avatarUrl')
            .sort('-createdAt');
        res.json(campaigns);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 📌 Create a new campaign
export const createCampaign = async (req, res) => {
    try {
        const campaign = new Campaign({
            ...req.body,
            creator: req.user._id
        });
        const savedCampaign = await campaign.save();
        res.status(201).json(savedCampaign);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 📌 Update campaign
export const updateCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!campaign) return res.status(404).json({ error: 'Campaign not found' });
        res.json(campaign);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 📌 Delete campaign
export const deleteCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findByIdAndDelete(req.params.id);
        if (!campaign) return res.status(404).json({ error: 'Campaign not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
