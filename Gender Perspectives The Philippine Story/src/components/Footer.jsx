import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerContent = {
    title: "Gender Evolution in the Philippines",
    description:
      "An academic research initiative exploring historical and contemporary gender roles in Philippine society through scholarly analysis and evidence-based research.",
    copyright: "All Rights Reserved.",
  };

  return (
    <footer
      className="bg-amber-900 text-amber-50 py-8 font-serif"
      role="contentinfo"
    >
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className="text-center md:text-left mb-6 md:mb-0 flex-1">
            <h2 className="text-2xl font-semibold mb-3 text-amber-100">
              {footerContent.title}
            </h2>
            <p className="text-amber-200 text-sm max-w-md leading-relaxed">
              {footerContent.description}
            </p>
          </div>

          {/* Academic Links Section */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <div className="flex space-x-6">
              <a
                href="/privacy-policy"
                className="text-amber-300 hover:text-amber-50 transition-colors duration-200 text-sm hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-amber-300 hover:text-amber-50 transition-colors duration-200 text-sm hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="text-amber-300 hover:text-amber-50 transition-colors duration-200 text-sm hover:underline"
              >
                Contact Research Team
              </a>
            </div>
            <div className="text-amber-400 text-xs italic">
              Peer-Reviewed Academic Content
            </div>
          </div>
        </div>

        {/* Academic Divider */}
        <hr className="border-amber-700 mb-6" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-amber-300 text-sm">
              &copy; {currentYear} {footerContent.title}.{" "}
              {footerContent.copyright}
            </p>
            <p className="text-amber-400 text-xs mt-1">
              This academic research may be cited with proper attribution
            </p>
          </div>

          {/* Academic Credentials */}
          <div className="flex flex-col items-center md:items-end space-y-1">
            <span className="text-amber-400 text-sm font-medium">
              Academic Research Project
            </span>
            <span className="text-amber-500 text-xs">
              Gender Studies • Historical Analysis • Cultural Anthropology
            </span>
          </div>
        </div>

        {/* Research Methodology Note */}
        <div className="mt-6 pt-4 border-t border-amber-800">
          <p className="text-amber-500 text-xs text-center italic">
            This research adheres to academic standards of historical
            methodology, employs peer-reviewed sources where applicable, and
            maintains scholarly integrity in all presented content.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
