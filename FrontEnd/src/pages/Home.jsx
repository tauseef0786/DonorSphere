import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiClient } from "../apiClient";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        getCampaigns();
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % campaigns.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [campaigns.length]);

    const getCampaigns = async () => {
        try {
            const response = await apiClient.get("/campaigns");
            setCampaigns(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Slideshow */}
            <div className="relative w-full h-[500px] overflow-hidden">
                {campaigns.length > 0 && (
                    <div
                        className="absolute w-full h-full bg-cover bg-center transition-opacity duration-700"
                        style={{
                            backgroundImage: `url(${campaigns[currentSlide]?.images[0]})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-6">
                            <h1 className="text-5xl font-bold">{campaigns[currentSlide]?.title}</h1>
                            <p className="mt-3 text-lg max-w-3xl">{campaigns[currentSlide]?.description.substring(0, 120)}...</p>
                            <Link
                                to={`/campaigns/${campaigns[currentSlide]?._id}`}
                                className="mt-5 bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg text-white font-semibold flex items-center gap-3 text-lg"
                            >
                                View Campaign <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Featured Campaigns */}
            <section className="py-16 px-8">
                <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Featured Campaigns</h2>
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {campaigns.slice(0, 6).map((campaign) => (
                        <div key={campaign._id} className="overflow-hidden rounded-lg">
                            <Link to={`/campaigns/${campaign._id}`} className="block">
                                <img src={campaign.images[0]} alt={campaign.title} className="w-full h-[350px] object-cover rounded-t-lg" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold">{campaign.title}</h3>
                                    <p className="text-md text-gray-600 mt-2">{campaign.category}</p>
                                    <p className="text-gray-700 mt-3 text-lg">
                                        {campaign.description.substring(0, 100)}...
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-8 bg-green-100">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold text-green-800">Why Crowdfunding?</h2>
                        <p className="mt-5 text-gray-700 text-lg leading-relaxed">
                            Crowdfunding is a powerful tool that allows individuals, startups, and non-profits to raise funds
                            for various causes. Whether it's for medical help, disaster relief, education, or personal projects,
                            crowdfunding connects people who need financial assistance with those who are willing to help.
                        </p>
                        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                            Our platform is dedicated to empowering communities by making fundraising simple and transparent.
                            Every campaign on our platform is verified, ensuring that your donations reach the right hands.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img
                            src="https://wallstreetmojo-files.s3.ap-south-1.amazonaws.com/2020/07/Crowdfunding.jpg"
                            alt="Crowdfunding Impact"
                            className="w-full h-72 object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Additional Articles Section */}
            <section className="py-16 px-8">
                <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Learn More About Crowdfunding</h2>
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
                    {/* Article 1 */}
                    <div className="bg-white rounded-lg overflow-hidden">
                        <img src="https://bloomerang.co/wp-content/uploads/2022/05/Fundraising-Strategy_Supplementary.jpg.webp" alt="Fundraising Strategies" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold">Effective Fundraising Strategies</h3>
                            <p className="text-gray-700 mt-3 text-lg">
                                Discover the best practices to maximize donations and engage your supporters in your cause.
                            </p>
                            <Link to="/articles/fundraising-strategies" className="text-green-600 font-semibold mt-3 inline-block">
                                Read More →
                            </Link>
                        </div>
                    </div>

                    {/* Article 2 */}
                    <div className="bg-white rounded-lg overflow-hidden">
                        <img src="https://crowdfundinghealth.org/wp-content/uploads/2021/11/content_img_05-768x529.jpg" alt="How Crowdfunding Works" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold">How Crowdfunding Works</h3>
                            <p className="text-gray-700 mt-3 text-lg">
                                Learn how crowdfunding helps individuals and organizations raise money for meaningful projects.
                            </p>
                            <Link to="/articles/how-crowdfunding-works" className="text-green-600 font-semibold mt-3 inline-block">
                                Read More →
                            </Link>
                        </div>
                    </div>

                    {/* Article 3 */}
                    <div className="bg-white rounded-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvMg7T67z8F6lG7lMsk7qxZCh3q-2_3wsKw&s" alt="Success Stories" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold">Crowdfunding Success Stories</h3>
                            <p className="text-gray-700 mt-3 text-lg">
                                Get inspired by real success stories of people who made a difference using crowdfunding.
                            </p>
                            <Link to="/articles/success-stories" className="text-green-600 font-semibold mt-3 inline-block">
                                Read More →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
