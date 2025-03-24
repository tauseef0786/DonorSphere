import Campaign from '../models/campaign.model.js';

// Get all campaigns
export const getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find()
            .populate('creator', 'username email')
            .populate('teamMembers', 'username email')
            .sort('-createdAt');

        res.status(200).json(campaigns);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new campaign
export const createCampaign = async (req, res) => {
    try {
        const {
            title, description, goal, startDate, endDate, category, images, videos,
            paymentDetails, location, teamMembers, socialLinks, campaignUpdates, tags
        } = req.body;

        const campaign = new Campaign({
            title, description, goal, startDate, endDate, category, images, videos,
            paymentDetails, location, teamMembers, socialLinks, campaignUpdates, tags,
            creator: req.user._id
        });

        const savedCampaign = await campaign.save();
        res.status(201).json({ message: "Campaign created successfully", campaign: savedCampaign });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single campaign by ID
export const getCampaignById = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id)
            .populate('creator', 'username email')
            .populate('teamMembers', 'username email');

        if (!campaign) return res.status(404).json({ error: 'Campaign not found' });

        res.status(200).json(campaign);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update campaign
export const updateCampaign = async (req, res) => {
    try {
        const updatedCampaign = await Campaign.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate('creator', 'username email');

        if (!updatedCampaign) return res.status(404).json({ error: 'Campaign not found' });

        res.json({ message: "Campaign updated successfully", campaign: updatedCampaign });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 📌 Delete campaign
export const deleteCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findByIdAndDelete(req.params.id);
        if (!campaign) return res.status(404).json({ error: 'Campaign not found' });

        res.status(200).json({ message: "Campaign deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
