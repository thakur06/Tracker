import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Brand and Description */}
        <div className="flex-1 mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">🛒</span>
            <span className="text-xl font-bold tracking-wide">OrderNest</span>
          </div>
          <p className="text-gray-400 max-w-xs text-center md:text-left text-sm">
            Effortlessly track and manage all your orders from Amazon, Flipkart, Myntra, and more—delivered to your doorstep, all in one place.
          </p>
        </div>
        {/* Links */}
        <div className="flex-1 flex flex-col md:flex-row md:justify-end gap-8">
          <div className="flex flex-col space-y-2 min-w-[120px]">
            <span className="font-semibold text-gray-300 mb-1">Legal</span>
            <a href="#" className="hover:underline flex items-center space-x-1">
              <span role="img" aria-label="Privacy">📝</span>
              <span>Privacy Policy</span>
            </a>
          </div>
          <div className="flex flex-col space-y-2 min-w-[120px]">
            <span className="font-semibold text-gray-300 mb-1">About</span>
            <a href="#" className="hover:underline flex items-center space-x-1">
              <span role="img" aria-label="About">🛠️</span>
              <span>About / Contact</span>
            </a>
          </div>
          <div className="flex flex-col space-y-2 min-w-[120px]">
            <span className="font-semibold text-gray-300 mb-1">Connect</span>
            <a href="mailto:your@email.com" className="hover:underline flex items-center space-x-1">
              <span role="img" aria-label="Email">📬</span>
              <span>Email</span>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.018-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} OrderNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 