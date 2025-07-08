import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const mockUser = {
  name: "Amit Sharma",
  email: "amit.sharma@email.com",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  ordersManaged: 27,
  memberSince: "2023-01-15",
};

const Profile = () => {
  const cardRef = useRef(null);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-black via-red-900 to-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-0">
        <div className="w-32 h-32 bg-gradient-to-tr from-red-700 via-red-400 to-transparent opacity-30 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <button
        onClick={() => {
          setRedirecting(true);
          window.location.href = 'http://localhost:5000/api/auth/google';
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        disabled={redirecting}
      >
        {redirecting ? 'Redirecting to Google...' : 'Connect Gmail'}
      </button>
      {redirecting && (
        <div className="text-blue-300 text-sm mb-2">Please wait, redirecting to Google for Gmail access...</div>
      )}
      <div
        ref={cardRef}
        className="relative bg-black/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 max-w-md w-full flex flex-col items-center border-4 border-transparent bg-clip-padding"
        style={{ borderImage: 'linear-gradient(135deg, #e53935 40%, #fff 100%) 1' }}
      >
        <div className="relative mb-4">
          <img
            src={mockUser.avatar}
            alt={mockUser.name}
            className="w-28 h-28 rounded-full border-4 border-red-700 shadow-xl drop-shadow-lg"
          />
          <span className="absolute -bottom-2 -right-2 bg-gradient-to-tr from-red-600 to-black text-white text-xs px-3 py-1 rounded-full shadow font-semibold border border-white/20">Pro</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 font-['Roboto_Slab','serif'] tracking-tight flex items-center gap-2">
          {mockUser.name}
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Online" />
        </h1>
        <span className="bg-black/60 border border-red-700 text-red-300 text-xs px-3 py-1 rounded-full mb-4 font-mono tracking-wide shadow-sm">{mockUser.email}</span>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-4">
          <div className="bg-black/60 border border-red-700 rounded-xl px-4 py-2 flex flex-col items-center w-full">
            <span className="text-lg font-bold text-white">{mockUser.ordersManaged}</span>
            <span className="text-xs text-gray-400">Orders Managed</span>
          </div>
          <div className="bg-black/60 border border-red-700 rounded-xl px-4 py-2 flex flex-col items-center w-full">
            <span className="text-lg font-bold text-white">{new Date(mockUser.memberSince).toLocaleDateString()}</span>
            <span className="text-xs text-gray-400">Member Since</span>
          </div>
        </div>
        <button className="mt-2 bg-gradient-to-r from-red-700 to-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-black hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-400 w-full shadow-lg">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile; 