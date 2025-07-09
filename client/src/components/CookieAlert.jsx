import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaCookieBite } from 'react-icons/fa';

const CookieAlert = () => {
  const [visible, setVisible] = useState(false);
  const alertRef = useRef(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible && alertRef.current) {
      // Animate in from bottom
      gsap.fromTo(
        alertRef.current,
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [visible]);

  const handleAccept = () => {
    // Animate out before hiding
    gsap.to(alertRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        localStorage.setItem("cookieConsent", "true");
        setVisible(false);
      }
    });
  };

  const handleDecline = () => {
    // Animate out before hiding
    gsap.to(alertRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setVisible(false);
      }
    });
  };

  if (!visible) return null;

  return (
    <div
      ref={alertRef}
      className="fixed bottom-4 left-4 right-4 max-w-sm mx-auto z-50
                 sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-md
                 lg:bottom-8 lg:right-8 lg:max-w-lg"
    >
      {/* Background with glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black rounded-2xl blur-sm opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 rounded-2xl blur-md" />
      
      {/* Main content */}
      <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-red-600/30 shadow-2xl">
        {/* Cookie icon */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg mr-2">
            <FaCookieBite className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">
              Cookie Consent
            </h3>
            
            {/* Description */}
            <p className="text-xs sm:text-sm text-red-200 leading-relaxed mb-4">
              We use cookies to enhance your browsing experience and analyze our traffic. 
              By clicking "Accept", you consent to our use of cookies.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                Accept All
              </button>
              
              <button
                onClick={handleDecline}
                className="flex-1 bg-transparent border border-red-600/50 hover:bg-red-900/20 text-red-200 hover:text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 hover:border-red-500/70"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
        
        {/* Close button */}
        <button
          onClick={handleDecline}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-red-300 hover:text-white hover:bg-red-900/30 rounded-full transition-all duration-200"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500/30 rounded-full blur-sm animate-pulse" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-600/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default CookieAlert;