


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaBook, FaMusic, FaTree, FaHandHoldingHeart, FaUsers, FaCalendar, FaTags, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
import { apiClient } from "../apiClient";

const categoryIcons = {
    "Health": <FaHeart className="text-red-500 text-2xl" />,
    "Education": <FaBook className="text-blue-500 text-2xl" />,
    "Music": <FaMusic className="text-purple-500 text-2xl" />,
    "Environment": <FaTree className="text-green-500 text-2xl" />,
    "Charity": <FaHandHoldingHeart className="text-yellow-500 text-2xl" />,
    "Women Empowerment": <FaUsers className="text-pink-500 text-2xl" />,
};

const Campaign = () => {
    const [campaign, setCampaign] = useState(null);
    const [amount, setAmount] = useState("");
    const [utr, setUTR] = useState("");
    const [thankYou, setThankYou] = useState(false);
    const { campaignId } = useParams();

    useEffect(() => {
        getCampaign();
    }, []);

    const getCampaign = async () => {
        try {
            const response = await apiClient.get(`/campaigns/${campaignId}`);
            setCampaign(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        if (!amount || !utr) {
            alert("Please enter amount and UTR number.");
            return;
        }
        setThankYou(true);
        setAmount("");
        setUTR("");
        setTimeout(() => setThankYou(false), 3000);
    };

    if (!campaign) return <p className="text-center text-gray-600">Loading...</p>;

    const percentage = Math.min((campaign.currentAmount / campaign.goal) * 100, 100);

    return (
        <div className="flex gap-8 p-8 bg-gray-100 min-h-screen">
            {/* Left Side - Campaign Details */}
            <div className="w-3/5 bg-white shadow-lg rounded-lg p-6">
                {/* Banner Image */}
                <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img src={campaign.images[0]} alt={campaign.title} className="w-full h-full object-cover" />
                </div>

                {/* Campaign Info */}
                <div className="mt-6">
                    <div className="flex items-center gap-3">
                        {categoryIcons[campaign.category] || <FaHandHoldingHeart className="text-gray-500 text-2xl" />}
                        <h2 className="text-3xl font-bold">{campaign.title}</h2>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{campaign.category}</p>
                    <p className="mt-4 text-gray-700 leading-relaxed">{campaign.description}</p>
                </div>

                {/* Goal & Progress */}
                <div className="mt-6">
                    <p className="text-lg font-semibold">Funding Progress</p>
                    <div className="relative w-full bg-gray-300 h-4 rounded-full mt-2">
                        <div
                            className="absolute top-0 left-0 h-4 bg-green-500 rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <p>Goal: ₹{campaign.goal}</p>
                        <p>Raised: ₹{campaign.currentAmount}</p>
                    </div>
                </div>

                {/* Extra Details */}
                <div className="mt-6 space-y-2">
                    <p className="flex items-center gap-2 text-gray-700"><FaCalendar className="text-gray-500" /> Start Date: {new Date(campaign.startDate).toDateString()}</p>
                    <p className="flex items-center gap-2 text-gray-700"><FaCalendar className="text-gray-500" /> End Date: {new Date(campaign.endDate).toDateString()}</p>
                    <p className="flex items-center gap-2 text-gray-700"><FaCheckCircle className="text-green-500" /> Status: {campaign.status}</p>
                    <p className="flex items-center gap-2 text-gray-700"><FaTags className="text-gray-500" /> Tags: {campaign.tags.join(", ")}</p>
                </div>

                {/* Image Album */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Image Gallery</h3>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        {campaign.images.map((img, index) => (
                            <img key={index} src={img} alt={`Gallery ${index}`} className="w-full h-32 object-cover rounded-lg" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Fixed Payment Section */}
            <div className="w-2/5 bg-white shadow-lg rounded-lg p-6 sticky top-6 h-fit">
                <h3 className="text-lg font-semibold flex items-center gap-2"><FaMoneyBillWave className="text-green-500" /> Payment Details</h3>
                <p className="text-gray-700 mt-2"><strong>Account Holder:</strong> {campaign.paymentDetails.bankAccount.accountHolderName}</p>
                <p className="text-gray-700"><strong>Bank:</strong> {campaign.paymentDetails.bankAccount.bankName}</p>
                <p className="text-gray-700"><strong>Account Number:</strong> {campaign.paymentDetails.bankAccount.accountNumber}</p>
                <p className="text-gray-700"><strong>IFSC Code:</strong> {campaign.paymentDetails.bankAccount.ifscCode}</p>
                <p className="text-gray-700"><strong>UPI ID:</strong> {campaign.paymentDetails.upiId}</p>
                <img src={campaign.paymentDetails.qrCode} alt="QR Code" className="w-full h-96 mt-4 rounded-lg shadow" />

                {/* Donation Form */}
                <form onSubmit={handleDonationSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold">Donation Amount (₹)</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">UTR Number</label>
                        <input
                            type="text"
                            value={utr}
                            onChange={(e) => setUTR(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition">
                        Submit Donation
                    </button>
                </form>

                {/* Thank You Message */}
                {thankYou && (
                    <p className="mt-4 text-center text-green-600 font-semibold">
                        Thank you for your donation! 🎉
                    </p>
                )}
            </div>
        </div>
    );
};

export default Campaign;
