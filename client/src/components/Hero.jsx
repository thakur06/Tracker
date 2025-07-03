import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import amazonIcon from '../assets/icons/amazon.png';
import flipkartIcon from '../assets/icons/flipkart.png';
import myntraIcon from '../assets/icons/myntra.png';
import dashboardMockup from '/ordernest.png';

export const Hero = () => {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const badgesRef = useRef([]);
  const buttonRef = useRef(null);
  const statRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
    gsap.fromTo(
      subtextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 0.3, ease: 'power3.out' }
    );
    gsap.fromTo(
      badgesRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.6, stagger: 0.1, ease: 'power2.out' }
    );
    gsap.fromTo(
      buttonRef.current,
      { scale: 0.9, opacity: 0, boxShadow: '0 0 0px #a78bfa' },
      { scale: 1, opacity: 1, duration: 0.5, delay: 0.9, ease: 'back.out(1.7)', boxShadow: '0 0 16px #a78bfa' }
    );
    gsap.fromTo(
      statRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 1.2, ease: 'power2.out' }
    );
  }, []);

  const platforms = [
    { name: 'Amazon', icon: amazonIcon },
    { name: 'Flipkart', icon: flipkartIcon },
    { name: 'Myntra', icon: myntraIcon },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12  overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1
            ref={headingRef}
            className="text-5xl p-2 md:text-7xl font-extrabold mb-10 lg bg-gradient-to-r from-red-600 via-black to-white bg-clip-text text-transparent tracking-tight font-['Roboto_Slab','serif']"
          >
            Smarter Order Tracking.
          </h1>
          <p ref={subtextRef} className="text-gray-100 text-xl md:text-2xl max-w-2xl mx-auto md:mx-0 mb-10 font-medium">
            One dashboard for all your online orders. Connect your Gmail and get automatic updates from Amazon, Flipkart, and more.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-10">
            {platforms.map((platform, i) => (
              <span
                key={platform.name}
                ref={el => (badgesRef.current[i] = el)}
                className="flex items-center gap-2 px-5 py-2 bg-white border border-red-400 rounded-full text-base  hover:scale-105 transition-transform duration-200 font-semibold text-black"
              >
                <img src={platform.icon} alt={platform.name} className="w-7 h-7" />
                {platform.name}
              </span>
            ))}
          </div>
          <button
            ref={buttonRef}
            className="bg-red-700 text-white px-10 py-4 text-xl font-bold rounded-lg hover:bg-black hover:text-red-500 transition animate-pulse focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Sign in with Google
          </button>
          <div
            ref={statRef}
            className="mt-8 flex justify-center md:justify-start"
          >
            <span className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-full text-lg  animate-pulse-slow border-2 border-red-600">
              400+ orders managed
            </span>
          </div>
        </div>
        {/* Right: Dashboard Mockup */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={dashboardMockup}
            alt="OrderNest dashboard mockup"
            className="w-full max-w-md rounded-2xl animate-fade-in "
            style={{ minHeight: 320 }}
          />
        </div>
      </div>
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-72 h-72 bg-red-900 rounded-full opacity-30 blur-2xl animate-pulse-slow" />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-black rounded-full opacity-30 blur-2xl animate-pulse-slow" />
      </div>
    </section>
  )
}
