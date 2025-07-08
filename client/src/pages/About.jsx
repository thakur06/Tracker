import React from "react";

const team = [
  {
    name: "Amit Sharma",
    role: "Founder & Developer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Passionate about simplifying online shopping and building delightful user experiences.",
  },
  {
    name: "Priya Singh",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Designs with empathy and a love for clean, modern interfaces.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-0">
        <div className="w-40 h-40 bg-gradient-to-tr from-red-700 via-red-400 to-transparent opacity-20 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      <div className="relative z-10 max-w-2xl w-full mx-auto bg-black/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 border-4 border-transparent bg-clip-padding" style={{ borderImage: 'linear-gradient(135deg, #e53935 40%, #fff 100%) 1' }}>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-['Roboto_Slab','serif'] tracking-tight">About OrderNest</h1>
        <p className="text-gray-200 mb-6 text-base sm:text-lg">
          OrderNest is your all-in-one dashboard for tracking and managing online orders from Amazon, Flipkart, Myntra, and more. Our mission is to make order tracking effortless, transparent, and delightful for everyone.
        </p>
        <h2 className="text-xl font-bold text-red-400 mb-2 mt-6">Our Team</h2>
        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          {team.map(member => (
            <div key={member.name} className="flex flex-col items-center bg-black/60 border border-red-700 rounded-xl p-4 flex-1 min-w-[140px]">
              <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-full border-2 border-red-500 shadow mb-2" />
              <div className="text-white font-semibold text-lg">{member.name}</div>
              <div className="text-red-300 text-xs mb-1">{member.role}</div>
              <div className="text-gray-400 text-xs text-center">{member.bio}</div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold text-red-400 mb-2 mt-6">Contact</h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="mailto:hello@ordernest.com" className="bg-red-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-black hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-400 shadow">Email Us</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="bg-black/60 border border-red-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-400 shadow">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default About; 