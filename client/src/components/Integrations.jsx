import React, { useEffect, useRef, useState } from 'react'
import Nykaa from '../assets/icons/nykaa.png'
import Flipkart from '../assets/icons/flipkart.png'
import Amazon from '../assets/icons/amazon.png'
import Myntra from '../assets/icons/myntra.png'
import Ajio from '../assets/icons/ajio.png'
import SouledStore from '../assets/icons/souledstore.png'
import Powerlook from '../assets/icons/powerlook.png'
import Meesho from '../assets/icons/meesho.png'
import Uniqlo from '../assets/icons/uniqlo.png'
import Zara from '../assets/icons/zara.png'
import Nike from '../assets/icons/nike.png'
import Addidas from '../assets/icons/addidas.png'
import Lenskart from '../assets/icons/lenskart.png'
import Puma from '../assets/icons/puma.png'
import Boat from '../assets/icons/boat.png'
export const Integrations = () => {
  const sectionRef = useRef(null);
  const iconRefs = useRef([]);
  const [showAllBrands, setShowAllBrands] = useState(false);

  useEffect(() => {
    // Animate section on mount
    if (sectionRef.current) {
      sectionRef.current.style.opacity = '0';
      sectionRef.current.style.transform = 'translateY(40px)';
      
      setTimeout(() => {
        sectionRef.current.style.transition = 'all 0.8s ease-out';
        sectionRef.current.style.opacity = '1';
        sectionRef.current.style.transform = 'translateY(0)';
      }, 100);
    }

    // Animate icons with stagger
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        icon.style.opacity = '0';
        icon.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
          icon.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
          icon.style.opacity = '1';
          icon.style.transform = 'scale(1)';
        }, 300 + (index * 100));
      }
    });
  }, []);

  // Mock brand data with PNG icon paths
  const allBrands = [
    // Featured brands (always visible)
    { name: 'Nykaa', category: 'Beauty', color: 'from-pink-500 to-purple-600', icon: Nykaa },
    { name: 'Flipkart', category: 'E-commerce', color: 'from-blue-500 to-blue-700', icon: Flipkart },
    { name: 'Amazon', category: 'E-commerce', color: 'from-orange-400 to-yellow-500', icon: Amazon },
    { name: 'Myntra', category: 'Fashion', color: 'from-purple-500 to-pink-600', icon: Myntra },
    { name: 'Ajio', category: 'Fashion', color: 'from-yellow-400 to-orange-500', icon: Ajio },
    { name: 'SouledStore', category: 'Fashion', color: 'from-red-500 to-red-700', icon: SouledStore },
    { name: 'Powerlook', category: 'Fashion', color: 'from-green-500 to-teal-600', icon: Powerlook },
    { name: 'Boat', category: 'Electronics', color: 'from-gray-700 to-gray-800', icon: Boat },
    
    // Additional brands (shown when expanded)
    { name: 'Zara', category: 'Food', color: 'from-red-500 to-red-600', icon: Zara },
    { name: 'Uniqlo', category: 'Food', color: 'from-orange-500 to-orange-600', icon: Uniqlo },
    { name: 'Nike', category: 'Grocery', color: 'from-green-500 to-green-600', icon: Nike },
    { name: 'Addidas', category: 'Grocery', color: 'from-blue-500 to-blue-600', icon: Addidas },
    { name: 'Lenskart', category: 'E-commerce', color: 'from-blue-600 to-indigo-600', icon: Lenskart },
    { name: 'Puma', category: 'E-commerce', color: 'from-red-500 to-red-600', icon: Puma },
    { name: 'Meesho', category: 'E-commerce', color: 'from-red-400 to-pink-500', icon: Meesho },
    
    ,
  ];

  const featuredBrands = allBrands.slice(0, 8);
  const additionalBrands = allBrands.slice(8);

  const BrandIcon = ({ brand, index, isAdditional = false }) => (
    <div
      ref={el => !isAdditional && (iconRefs.current[index] = el)}
      className={`group cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-2 ${
        isAdditional ? 'animate-slideIn' : ''
      }`}
      style={isAdditional ? { animationDelay: `${index * 50}ms` } : {}}
    >
      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 border-white/20 group-hover:border-white/40 p-3`}>
        <img
          src={brand.icon}
          alt={`${brand.name} logo`}
          className="w-full h-full object-contain "
          onError={(e) => {
            // Fallback to text if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="hidden text-white font-bold text-lg md:text-xl text-center leading-tight">
          {brand.name.split(' ').map((word, i) => (
            <div key={i} className="text-xs md:text-sm">
              {word}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mt-2 text-center">
        <div className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors duration-300">
          {brand.name}
        </div>
        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full mt-1 inline-block">
          {brand.category}
        </div>
      </div> */}
    </div>
  );

  const toggleShowAllBrands = () => {
    setShowAllBrands(!showAllBrands);
  };

  return (
    <section
      ref={sectionRef}
      className="my-20 py-16 px-6 md:px-12 bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-red-100 to-blue-100 rounded-full text-sm font-semibold text-gray-700 shadow-lg">
            ✨ Seamless Integration
          </div>
          </div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 via-transparent to-red-50/50"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.03),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 tracking-tight font-['Roboto_Slab','serif']">
            Integrate with{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              any platform
            </span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto mb-6 leading-relaxed">
            We built the ultimate tool for showcasing your satisfied customers. With just 3 lines of HTML, 
            you can embed all your testimonials on any platform!
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{allBrands.length}+</div>
              <div className="text-sm text-gray-600">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">500K+</div>
              <div className="text-sm text-gray-600">Orders Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
          </div>
        </div>

        {/* Featured Brands */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
          {featuredBrands.map((brand, index) => (
            <BrandIcon key={brand.name} brand={brand} index={index} />
          ))}
        </div>

        {/* Show All Brands Button */}
        <div className="text-center mb-8">
          <button
            onClick={toggleShowAllBrands}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-red-700 hover:to-red-800"
          >
            <span className="relative z-10">
              {showAllBrands ? 'Show Less' : `Show All ${allBrands.length}+ Brands`}
            </span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                showAllBrands ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Additional Brands (Expandable) */}
        <div className={`transition-all duration-500 ease-in-out ${
          showAllBrands 
            ? 'max-h-none opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4 overflow-hidden'
        }`}>
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              And many more platforms...
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {additionalBrands.map((brand, index) => (
                <BrandIcon key={brand.name} brand={brand} index={index} isAdditional={true} />
              ))}
            </div>
          </div>
        </div>

        {/* Integration Features */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mt-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Why Choose Our Integration?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Lightning Fast</h4>
              <p className="text-gray-600 text-sm">Real-time order tracking with instant notifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">100% Secure</h4>
              <p className="text-gray-600 text-sm">Bank-level encryption for all your order data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Easy Setup</h4>
              <p className="text-gray-600 text-sm">Get started in minutes with our simple integration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Integrations;