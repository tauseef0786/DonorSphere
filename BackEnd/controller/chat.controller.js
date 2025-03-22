import ChatMessage from '../models/ChatMessage.js';
import Campaign from '../models/campaign.model.js';

// Send a message
export const sendMessage = async (req, res) => {
    try {
        const { campaignId, message } = req.body;
        const senderId = req.user._id;

        // Validate campaign existence
        const campaign = await Campaign.findById(campaignId);
        if (!campaign) {
            return res.status(404).json({ error: 'Campaign not found' });
        }

        // Create and save message
        const chatMessage = new ChatMessage({
            sender: senderId,
            message,
        });

        await chatMessage.save();
        res.status(201).json(chatMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get chat messages for a campaign
export const getChatMessages = async (req, res) => {
    try {
        const { campaignId } = req.params;

        // Validate campaign existence
        const campaign = await Campaign.findById(campaignId);
        if (!campaign) {
            return res.status(404).json({ error: 'Campaign not found' });
        }

        // Fetch messages related to this campaign
        const messages = await ChatMessage.find()
            .populate('sender', 'fullName avatarUrl')
            .sort('timestamp');

        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
