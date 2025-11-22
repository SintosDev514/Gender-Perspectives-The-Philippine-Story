import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">
              Gender Evolution in the Philippines
            </h2>
            <p className="text-sm">
              Exploring past and present gender roles in the Philippine society.
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">
            &copy; 2025 Gender Evolution in the Philippines. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
