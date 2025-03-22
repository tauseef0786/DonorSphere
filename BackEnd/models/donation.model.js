import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  campaign: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campaign',
    required: true
  },
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['bank_transfer', 'qr_code'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  rewardTier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campaign.rewardTiers'
  },
  message: String,
  anonymous: {
    type: Boolean,
    default: false
  },
  transactionId: String,
  bankDetails: {
    accountNumber: String,
    ifscCode: String,
    receiverName: String
  },
  qrCodeUrl: String,  // Store QR code image URL
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Update campaign current amount after donation is completed
donationSchema.post('save', async function(doc) {
  if (doc.status === 'completed') {
    const Campaign = mongoose.model('Campaign');
    await Campaign.findByIdAndUpdate(
      doc.campaign,
      { $inc: { currentAmount: doc.amount } }
    );
  }
});

const Donation = mongoose.model('Donation', donationSchema);
export default Donation;
