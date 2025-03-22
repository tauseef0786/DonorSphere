import Comment from '../models/comment.model.js';
import Campaign from '../models/campaign.model.js';

// Create a comment
export const createComment = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const { content, parentComment } = req.body;
        const userId = req.user._id;

        // Validate campaign existence
        const campaign = await Campaign.findById(campaignId);
        if (!campaign) {
            return res.status(404).json({ error: 'Campaign not found' });
        }

        // Create and save the comment
        const newComment = new Comment({
            campaign: campaignId,
            user: userId,
            content,
            parentComment: parentComment || null,
        });

        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all comments for a campaign
export const getComments = async (req, res) => {
    try {
        const { campaignId } = req.params;

        // Validate campaign existence
        const campaign = await Campaign.findById(campaignId);
        if (!campaign) {
            return res.status(404).json({ error: 'Campaign not found' });
        }

        // Fetch comments for the campaign, populate user details
        const comments = await Comment.find({ campaign: campaignId })
            .populate('user', 'fullName avatarUrl')
            .populate('parentComment')
            .sort('-createdAt');

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a comment
export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        const userId = req.user._id;

        // Find comment and ensure ownership
        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        if (comment.user.toString() !== userId.toString()) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        // Update and save
        comment.content = content;
        await comment.save();

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a comment
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;

        // Find comment and ensure ownership
        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        if (comment.user.toString() !== userId.toString()) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        // Delete the comment
        await comment.deleteOne();
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
