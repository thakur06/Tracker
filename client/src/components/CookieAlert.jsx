import React, { useState, useEffect } from "react";

const CookieAlert = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4 z-50 animate-fade-in">
      <span className="text-sm">This website uses cookies to enhance the user experience. By continuing, you accept our cookie policy.</span>
      <button
        onClick={handleAccept}
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded transition-colors duration-150"
      >
        Allow Cookies
      </button>
    </div>
  );
};

export default CookieAlert; 