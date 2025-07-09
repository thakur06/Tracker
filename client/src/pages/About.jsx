import React from "react";
import { FaInfoCircle, FaShieldAlt, FaUsers, FaRocket, FaEnvelope, FaLinkedin, FaLock, FaChartLine, FaHeart } from 'react-icons/fa';

const team = [
  {
    name: "Amit Sharma",
    role: "Founder & Developer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "5+ years building scalable e-commerce solutions. Previously at Amazon India, passionate about user-centric design.",
    skills: ["React", "Node.js", "AWS"]
  },
  {
    name: "Priya Singh",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Design lead with expertise in fintech and e-commerce. Certified UX researcher with 4+ years experience.",
    skills: ["Figma", "User Research", "Design Systems"]
  },
];

const features = [
  {
    icon: <FaShieldAlt className="text-red-400 text-2xl" />,
    title: "Bank-Grade Security",
    description: "Your data is encrypted end-to-end and never shared with third parties"
  },
  {
    icon: <FaUsers className="text-red-400 text-2xl" />,
    title: "50,000+ Happy Users",
    description: "Trusted by thousands of shoppers across India for reliable order tracking"
  },
  {
    icon: <FaRocket className="text-red-400 text-2xl" />,
    title: "Lightning Fast",
    description: "Real-time updates and instant notifications for all your orders"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-0">
        <div className="w-40 h-40 bg-gradient-to-tr from-red-700 via-red-400 to-transparent opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 z-0">
        <div className="w-32 h-32 bg-gradient-to-bl from-red-600 via-red-500 to-transparent opacity-15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 max-w-4xl lg:max-w-none w-full mx-auto lg:mx-6 bg-black/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 border border-red-700/30">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 font-['Roboto_Slab','serif'] tracking-tight">
            <FaInfoCircle className="inline-block text-red-400 text-4xl mb-2 mr-3" />
            About OrderNest
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Your trusted companion for seamless order tracking across India's leading e-commerce platforms. 
            We simplify online shopping with intelligent tracking, real-time updates, and complete transparency.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/60 border border-red-700/40 rounded-xl p-6 text-center hover:border-red-500/60 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex justify-center mb-3">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-red-900/30 to-black/30 rounded-2xl p-6 mb-8 border border-red-700/20">
          <div className="flex items-center gap-3 mb-4">
            <FaHeart className="text-red-400 text-2xl" />
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-gray-200 text-lg leading-relaxed">
            To revolutionize how Indians track their online purchases by providing a unified, secure, and intelligent platform 
            that brings clarity to the chaos of multiple shopping apps and delivery services.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-400 mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div key={member.name} className="bg-black/60 border border-red-700/40 rounded-xl p-6 hover:border-red-500/60 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-16 h-16 rounded-full border-2 border-red-500 shadow-lg" 
                  />
                  <div>
                    <div className="text-white font-semibold text-xl">{member.name}</div>
                    <div className="text-red-300 text-sm font-medium">{member.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="bg-red-700/30 text-red-300 px-3 py-1 rounded-full text-xs font-medium border border-red-600/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="bg-black/60 border border-red-700/40 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaLock className="text-red-400 text-2xl" />
            <h2 className="text-xl font-bold text-white">Security & Privacy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="text-sm">• End-to-end encryption for all data</p>
              <p className="text-sm">• No personal information shared with retailers</p>
              <p className="text-sm">• GDPR compliant data handling</p>
            </div>
            <div>
              <p className="text-sm">• Regular security audits and updates</p>
              <p className="text-sm">• Secure cloud infrastructure on AWS</p>
              <p className="text-sm">• 24/7 monitoring and support</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-6">Get In Touch</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:hello@ordernest.com" 
              className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-lg hover:shadow-xl flex items-center gap-2 min-w-[160px] justify-center"
            >
              <FaEnvelope className="text-sm" />
              Email Us
            </a>
            <a 
              href="https://linkedin.com/company/ordernest" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black/60 border border-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 hover:border-red-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-lg hover:shadow-xl flex items-center gap-2 min-w-[160px] justify-center"
            >
              <FaLinkedin className="text-sm" />
              Follow Us
            </a>
          </div>
          <div className="mt-6 text-gray-400 text-sm">
            <p>Response time: Within 24 hours • Available: Mon-Fri, 9 AM - 6 PM IST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;