import React from "react";

// Mock icons for demonstration
const MdEmail = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const FaGithub = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const FaLinkedin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-black via-red-900/20 to-black text-gray-200 border-t border-red-800/40 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-4">
          
          {/* Brand Section */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">🛒</span>
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                OrderNest
              </h3>
              <p className="text-xs text-gray-400 -mt-1">Food Delivery Platform</p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
              Orders
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
              About
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:your@email.com" 
              className="group p-2 rounded-full bg-gray-800/30 hover:bg-red-600/20 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <MdEmail className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-2 rounded-full bg-gray-800/30 hover:bg-red-600/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-2 rounded-full bg-gray-800/30 hover:bg-red-600/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <span>© {currentYear} OrderNest</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>Made with</span>
            <span className="text-red-400 animate-pulse">❤️</span>
            <span>for food lovers</span>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;