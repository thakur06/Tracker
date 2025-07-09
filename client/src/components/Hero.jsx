import React, { useEffect, useRef, useState } from 'react'

export const Hero = () => {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const badgesRef = useRef([]);
  const buttonRef = useRef(null);
  const statRef = useRef(null);
  const mockupRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);

  // Simple animation function to replace GSAP
  const animateElement = (element, fromStyle, toStyle, duration = 800, delay = 0) => {
    if (!element) return;
    
    setTimeout(() => {
      // Apply initial styles
      Object.assign(element.style, fromStyle);
      
      // Force reflow
      element.offsetHeight;
      
      // Apply transition
      element.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      
      // Apply final styles
      Object.assign(element.style, toStyle);
    }, delay);
  };

  useEffect(() => {
    setIsLoaded(true);
    
    // Animate heading
    animateElement(
      headingRef.current,
      { transform: 'translateY(40px)', opacity: '0' },
      { transform: 'translateY(0)', opacity: '1' },
      800,
      0
    );
    
    // Animate subtext
    animateElement(
      subtextRef.current,
      { transform: 'translateY(30px)', opacity: '0' },
      { transform: 'translateY(0)', opacity: '1' },
      700,
      300
    );
    
    // Animate badges with stagger
    badgesRef.current.forEach((badge, i) => {
      if (badge) {
        animateElement(
          badge,
          { transform: 'translateY(20px)', opacity: '0' },
          { transform: 'translateY(0)', opacity: '1' },
          600,
          600 + i * 100
        );
      }
    });
    
    // Animate button
    animateElement(
      buttonRef.current,
      { transform: 'scale(0.9)', opacity: '0' },
      { transform: 'scale(1)', opacity: '1' },
      500,
      900
    );
    
    // Animate stat
    animateElement(
      statRef.current,
      { transform: 'translateY(20px)', opacity: '0' },
      { transform: 'translateY(0)', opacity: '1' },
      600,
      1200
    );
    
    // Animate mockup
    animateElement(
      mockupRef.current,
      { transform: 'translateX(50px)', opacity: '0' },
      { transform: 'translateX(0)', opacity: '1' },
      1000,
      400
    );
  }, []);

  const platforms = [
    { name: 'Amazon', icon: '🛒', color: 'from-orange-600 to-yellow-600' },
    { name: 'Flipkart', icon: '🛍️', color: 'from-blue-600 to-blue-400' },
    { name: 'Myntra', icon: '👗', color: 'from-pink-600 to-purple-600' },
  ];

  return (
    <section className="relative min-h-screen min-w-sreeen flex items-center py-12 md:py-32 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-900 to-red-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-gray-800 to-black rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-800 to-black rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Enhanced Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-600 to-red-400 text-white text-sm font-semibold rounded-full shadow-lg">
              ✨ Smart Order Management
            </span>
          </div>
          
          <h1
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 bg-gradient-to-r from-red-500 via-white to-red-300 bg-clip-text text-transparent tracking-tight leading-tight"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Smarter Order
            <br />
            <span className="relative">
              Tracking
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
            </span>
          </h1>
          
          <p 
            ref={subtextRef} 
            className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 mb-10 font-medium leading-relaxed"
          >
            One unified dashboard for all your online orders. Connect your Gmail and get 
            <span className="text-red-400 font-semibold"> automatic updates</span> from Amazon, Flipkart, and more.
          </p>
          
          {/* Enhanced platform badges */}
          <div className="flex justify-center lg:justify-start gap-4 mb-10 flex-wrap">
            {platforms.map((platform, i) => (
              <div
                key={platform.name}
                ref={el => (badgesRef.current[i] = el)}
                className="group relative"
                onMouseEnter={() => setHoveredPlatform(platform.name)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm border border-red-400/30 rounded-full text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg">
                  <span className="text-2xl">{platform.icon}</span>
                  <span className="font-semibold text-sm md:text-base">{platform.name}</span>
                </div>
                
                {/* Tooltip */}
                {hoveredPlatform === platform.name && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                    Connect {platform.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA button */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-10">
            <button
              ref={buttonRef}
              className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-xl font-bold rounded-xl hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 focus:outline-none focus:ring-4 focus:ring-red-300/50"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in with Google
              </span>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300">
              View Demo
            </button>
          </div>
          
          {/* Enhanced stats */}
          <div
            ref={statRef}
            className="flex justify-center lg:justify-start gap-6 flex-wrap"
          >
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm text-white font-semibold px-6 py-4 rounded-2xl border border-red-600/30 shadow-xl">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-lg">400+ orders managed</span>
            </div>
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm text-white font-semibold px-6 py-4 rounded-2xl border border-red-600/30 shadow-xl">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-lg">50+ active users</span>
            </div>
          </div>
        </div>
        
        {/* Right: Enhanced Dashboard Mockup */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Mockup container with enhanced styling */}
            <div 
              ref={mockupRef}
              className="relative bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-2xl p-8 max-w-lg w-full"
              style={{ minHeight: 400 }}
            >
              {/* Browser-like header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 bg-gray-200 rounded-full h-6 ml-4 flex items-center px-3">
                  <span className="text-gray-600 text-sm">ordernest.app</span>
                </div>
              </div>
              
              {/* Mock dashboard content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
                    <div>
                      <div className="font-semibold text-gray-800">Amazon Order</div>
                      <div className="text-sm text-gray-600">Delivered Today</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">F</div>
                    <div>
                      <div className="font-semibold text-gray-800">Flipkart Order</div>
                      <div className="text-sm text-gray-600">In Transit</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
                    <div>
                      <div className="font-semibold text-gray-800">Myntra Order</div>
                      <div className="text-sm text-gray-600">Processing</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Stats at bottom */}
              <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">12</div>
                  <div className="text-sm text-red-700">Active Orders</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements around mockup */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-red-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}