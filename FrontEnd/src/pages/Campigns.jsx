
import React, { useEffect, useState } from "react";
import { apiClient } from "../apiClient";
import { CampaignCard } from "../components/CampaignCard";

const Campigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns();
  }, []);

  const getCampaigns = async () => {
    try {
      const response = await apiClient.get("/campaigns");
      setCampaigns(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2 flex justify-center"> {/* 🔹 Centers content */}
      <div className="w-full max-w-7xl px-2"> {/* 🔹 Ensures equal left & right padding */}
        <h2 className="text-4xl font-bold text-center text-green-600 mb-10">
          Active Campaigns
        </h2>
        {campaigns.length === 0 ? (
          <p className="text-center text-gray-500">No campaigns available.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign._id} campaign={campaign} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Campigns;
