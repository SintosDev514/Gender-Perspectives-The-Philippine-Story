import React, { useState } from "react";
import logo from "../assets/imges/logs.png";
import "../assets/Style/NavStyle.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHistoryDropdownOpen, setIsHistoryDropdownOpen] = useState(false);

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  const historicalEras = [
    { label: "Pre-Colonial Era", path: "/precol" },
    { label: "Spanish & American Period", path: "/colonial" },
    { label: "Post-War to Modern Era", path: "/modern" },
  ];

  const additionalItems = [
    { label: "Contemporary Issues", path: "/contemporary" },
    { label: "Resources", path: "/resources" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHistoryDropdown = () => {
    setIsHistoryDropdownOpen(!isHistoryDropdownOpen);
  };

  return (
    <nav className="nav-container bg-amber-50 text-amber-900 w-full h-auto p-3 shadow-sm border-b-2 border-amber-200 font-serif">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="brand-section text-xl font-bold flex items-center space-x-3">
          <img
            src={logo}
            alt="Gender Evolution Philippines Academic Research Logo"
            className="h-12 w-auto filter sepia(0.3) brightness(0.9)"
          />
          <span className="text-amber-800 tracking-tight">
            Gender Evolution PH
            <br />
            <span className="text-amber-600 text-sm font-normal">
              Multimedia Course Output
            </span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav hidden md:flex items-center space-x-6 font-medium">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="nav-link hover:text-amber-700 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-amber-100"
            >
              {item.label}
            </a>
          ))}

          {/* History Dropdown */}
          <div className="dropdown-container relative group">
            <button className="dropdown-trigger hover:text-amber-700 transition-colors duration-200 flex items-center px-3 py-2 rounded-lg hover:bg-amber-100">
              Historical Eras
              <span className="ml-1 transform transition-transform group-hover:rotate-180 text-amber-600">
                ▼
              </span>
            </button>
            <div className="dropdown-menu absolute hidden group-hover:block bg-amber-50 shadow-lg rounded-lg p-3 space-y-2 w-56 z-10 border border-amber-200">
              {historicalEras.map((era) => (
                <a
                  key={era.label}
                  href={era.path}
                  className="dropdown-item block hover:text-amber-700 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-amber-100 border-l-2 border-transparent hover:border-amber-600"
                >
                  {era.label}
                </a>
              ))}
            </div>
          </div>

          {additionalItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="nav-link hover:text-amber-700 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-amber-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="mobile-menu-button md:hidden text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-lg p-2 hover:bg-amber-100"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav md:hidden bg-amber-50 text-amber-900 space-y-1 px-4 py-4 font-medium border-t border-amber-200">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="mobile-nav-link block hover:text-amber-700 transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-amber-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile History Dropdown */}
          <div className="mobile-dropdown-container">
            <button
              onClick={toggleHistoryDropdown}
              className="mobile-dropdown-trigger w-full text-left hover:text-amber-700 transition-colors duration-200 flex justify-between items-center py-3 px-4 rounded-lg hover:bg-amber-100"
            >
              Historical Eras
              <span className="transform transition-transform text-amber-600">
                {isHistoryDropdownOpen ? "▲" : "▼"}
              </span>
            </button>

            {isHistoryDropdownOpen && (
              <div className="mobile-dropdown-menu pl-6 mt-1 space-y-1 border-l-2 border-amber-300">
                {historicalEras.map((era) => (
                  <a
                    key={era.label}
                    href={era.path}
                    className="mobile-dropdown-item block hover:text-amber-700 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-amber-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {era.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {additionalItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="mobile-nav-link block hover:text-amber-700 transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-amber-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
