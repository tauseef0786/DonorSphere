
import mongoose from 'mongoose';

const milestoneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  description: String,
  reached: { type: Boolean, default: false }
});

const rewardTierSchema = new mongoose.Schema({
  title: { type: String, required: true },
  minimumDonation: { type: Number, required: true },
  description: String,
  maxClaims: Number,
  claimedCount: { type: Number, default: 0 }
});

const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  goal: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  category: { type: String, required: true },
  status: { type: String, enum: ['draft', 'active', 'completed', 'cancelled'], default: 'draft' },
  images: [{ type: String }],
  videos: [{ type: String }],
  paymentDetails: {
    bankAccount: {
      accountNumber: String,
      bankName: String,
      accountHolderName: String,
      ifscCode: String
    },
    qrCode: String,
    upiId: String, 
    paypalEmail: String 
  },
  milestones: [milestoneSchema],
  rewardTiers: [rewardTierSchema],
  tags: [String],
  featured: { type: Boolean, default: false },
  location: { type: String }, 
  teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    website: String
  },
  campaignUpdates: [
    {
      title: String,
      content: String,
      date: { type: Date, default: Date.now }
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the `updatedAt` timestamp before saving
campaignSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

// Export Model
const Campaign = mongoose.model('Campaign', campaignSchema);
export default Campaign;
