import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold text-green-700 mb-4">About DonorSphere</h2>
        <p className="text-gray-600 text-lg">
          DonorSphere is a crowdfunding platform dedicated to supporting meaningful causes. We connect donors with impactful projects to bring real change.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-12 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to empower individuals and organizations by providing a transparent and efficient platform for fundraising.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-green-700 mb-3">Our Vision</h3>
          <p className="text-gray-600">
            We envision a world where every noble cause gets the support it deserves, helping communities grow stronger together.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12 max-w-5xl">
        <h3 className="text-3xl font-semibold text-green-700 text-center mb-6">Why Choose DonorSphere?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h4 className="text-xl font-semibold text-gray-700">Secure Transactions</h4>
            <p className="text-gray-600 mt-2">We ensure all donations are securely processed and delivered to the right cause.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h4 className="text-xl font-semibold text-gray-700">Transparency</h4>
            <p className="text-gray-600 mt-2">We provide clear updates and reports on how funds are being used.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h4 className="text-xl font-semibold text-gray-700">Community Driven</h4>
            <p className="text-gray-600 mt-2">Our platform is built for and by people who care about making a difference.</p>
          </div>
        </div>
      </div>

      {/* Team Section (Optional) */}
      <div className="mt-16 max-w-5xl">
        <h3 className="text-3xl font-semibold text-green-700 text-center mb-6">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <img src="https://avatars.githubusercontent.com/u/164810977?v=4&size=64" alt="Team Member" className="mx-auto rounded-full mb-3" />
            <h4 className="text-xl font-semibold text-gray-700">Tauseef</h4>
            <p className="text-gray-600 mt-1">Founder & CEO</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <img src="https://avatars.githubusercontent.com/u/164810977?v=4&size=64" alt="Team Member" className="mx-auto rounded-full mb-3" />
            <h4 className="text-xl font-semibold text-gray-700">Raza</h4>
            <p className="text-gray-600 mt-1">Head of Operations</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <img src="https://avatars.githubusercontent.com/u/164810977?v=4&size=64" alt="Team Member" className="mx-auto rounded-full mb-3" />
            <h4 className="text-xl font-semibold text-gray-700">Muhammad</h4>
            <p className="text-gray-600 mt-1">Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
