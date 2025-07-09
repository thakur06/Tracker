import React, { useEffect, useRef, useState } from "react";
import { MdEmail } from 'react-icons/md';
import { FaBoxOpen, FaCalendarAlt, FaEdit, FaShieldAlt, FaTrophy, FaStar, FaGooglePlusG } from 'react-icons/fa';

const mockUser = {
  name: "Amit Sharma",
  email: "amit.sharma@email.com",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  ordersManaged: 27,
  memberSince: "2023-01-15",
  trustScore: 98,
  totalSavings: 2450,
  achievements: ["Early Adopter", "Order Master", "Deal Hunter"]
};

const Profile = () => {
  const cardRef = useRef(null);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      // Using CSS animation instead of GSAP for better compatibility
      cardRef.current.style.opacity = '0';
      cardRef.current.style.transform = 'translateY(40px)';
      
      setTimeout(() => {
        cardRef.current.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        cardRef.current.style.opacity = '1';
        cardRef.current.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-black via-red-900 to-black min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-0">
        <div className="w-32 h-32 bg-gradient-to-tr from-red-700 via-red-400 to-transparent opacity-30 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 z-0">
        <div className="w-24 h-24 bg-gradient-to-bl from-red-600 via-red-500 to-transparent opacity-20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Gmail Connection Button */}
      <div className="mb-6 text-center">
        <button
          onClick={() => {
            setRedirecting(true);
            window.location.href = 'http://localhost:5000/api/auth/google';
          }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg hover:shadow-xl flex items-center gap-2 disabled:opacity-50"
          disabled={redirecting}
        >
          <FaGooglePlusG className="text-lg" />
          {redirecting ? 'Redirecting to Google...' : 'Connect Gmail'}
        </button>
        {redirecting && (
          <div className="text-blue-300 text-sm mt-2">Please wait, redirecting to Google for Gmail access...</div>
        )}
      </div>

      <div
        ref={cardRef}
        className="relative bg-black/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 max-w-md lg:max-w-2xl w-full flex flex-col items-center border border-red-700/30"
      >
        {/* Profile Header */}
        <div className="relative mb-6">
          <img
            src={mockUser.avatar}
            alt={mockUser.name}
            className="w-32 h-32 rounded-full border-4 border-red-700 shadow-xl drop-shadow-lg"
          />
          <span className="absolute -bottom-2 -right-2 bg-gradient-to-tr from-red-600 to-black text-white text-xs px-3 py-1 rounded-full shadow font-semibold border border-white/20">
            Pro
          </span>
          <div className="absolute -top-2 -left-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white animate-pulse flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* User Info */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-['Roboto_Slab','serif'] tracking-tight text-center">
          {mockUser.name}
        </h1>
        
        <div className="bg-black/60 border border-red-700/40 text-red-300 text-sm px-4 py-2 rounded-full mb-6 font-mono tracking-wide shadow-sm flex items-center gap-2">
          <MdEmail className="text-lg" />
          {mockUser.email}
        </div>

        {/* Trust Score */}
        <div className="bg-gradient-to-r from-green-900/30 to-black/30 rounded-xl p-4 mb-6 w-full border border-green-700/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-green-400 text-2xl" />
              <div>
                <div className="text-white font-semibold">Trust Score</div>
                <div className="text-green-300 text-sm">Verified Account</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-400">{mockUser.trustScore}%</div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-6">
          <div className="bg-black/60 border border-red-700/40 rounded-xl p-4 text-center hover:border-red-500/60 transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaBoxOpen className="text-red-400 text-xl" />
              <span className="text-2xl font-bold text-white">{mockUser.ordersManaged}</span>
            </div>
            <span className="text-xs text-gray-400">Orders Managed</span>
          </div>
          
          <div className="bg-black/60 border border-red-700/40 rounded-xl p-4 text-center hover:border-red-500/60 transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaCalendarAlt className="text-red-400 text-xl" />
              <span className="text-lg font-bold text-white">{new Date(mockUser.memberSince).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
            </div>
            <span className="text-xs text-gray-400">Member Since</span>
          </div>

          <div className="bg-black/60 border border-red-700/40 rounded-xl p-4 text-center hover:border-red-500/60 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaTrophy className="text-yellow-400 text-xl" />
              <span className="text-lg font-bold text-white">₹{mockUser.totalSavings.toLocaleString()}</span>
            </div>
            <span className="text-xs text-gray-400">Total Savings</span>
          </div>
        </div>

        {/* Achievements */}
        <div className="w-full mb-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <FaTrophy className="text-yellow-400" />
            Achievements
          </h3>
          <div className="flex flex-wrap gap-2">
            {mockUser.achievements.map((achievement, index) => (
              <span 
                key={index} 
                className="bg-red-700/30 text-red-300 px-3 py-1 rounded-full text-xs font-medium border border-red-600/30 hover:bg-red-600/40 transition-colors"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button className="flex-1 bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-800 hover:to-red-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            <FaEdit />
            Edit Profile
          </button>
          
          <button className="flex-1 bg-black/60 border border-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 hover:border-red-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-lg hover:shadow-xl">
            Settings
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>Last active: Just now • Next reward milestone: 5 orders</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;