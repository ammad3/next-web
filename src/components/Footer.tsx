import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto px-4">
        {/* Copyright Section */}
        <p className="text-sm">
          &copy; 2024 Ammad Sheikh. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="mt-4">
          <a
            href="https://linkedin.com/in/ammad2"
            className="text-blue-500 hover:text-blue-300 mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ammad3"
            className="text-gray-400 hover:text-gray-300 mx-2"
          >
            GitHub
          </a>
        </div>

        {/* Optional Footer Links */}
        <div className="mt-4">
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-white mx-2 text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-gray-400 hover:text-white mx-2 text-sm"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
