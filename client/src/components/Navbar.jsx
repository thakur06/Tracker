import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import OrderNestLogo from "../assets/icons/ordernest.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // Animate navbar on mount
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (menuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
    if (!menuOpen && isAnimating && mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => setIsAnimating(false),
      });
    }
  }, [menuOpen, isAnimating]);

  function navLinkClass({ isActive }) {
    return (
      "font-medium transition-colors duration-150 px-1 md:px-0 " +
      (isActive
        ? "text-red-500 text-lg font-bold border-b-2 border-red-500 md:border-none"
        : "hover:text-red-400 text-base text-[#8b8b8b]")
    );
  }

  const handleMenuToggle = () => {
    if (menuOpen) {
      setIsAnimating(true);
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const handleMenuClose = () => {
    setIsAnimating(true);
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="bg-black/80 shadow-md px-6 text-[#8b8b8b] border-b-2 border-red-900 backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center text-2xl font-bold tracking-wide text-[#8b8b8b]">
          <img src={OrderNestLogo} alt="OrderNest Logo" className="w-20 h-20 rounded-full mr-2 " />
          OrderNest
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/orders" className={navLinkClass}>Orders</NavLink>
          <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden  focus:outline-none"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7 text-[#8b8b8b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {(menuOpen || isAnimating) && (
        <div
          ref={mobileMenuRef}
          className="md:hidden mt-2 flex flex-col space-y-2 p-4 animate-fade-in text-[#8b8b8b]"
        >
          <NavLink to="/" className={navLinkClass} end onClick={handleMenuClose}>Home</NavLink>
          <NavLink to="/orders" className={navLinkClass} onClick={handleMenuClose}>Orders</NavLink>
          <NavLink to="/profile" className={navLinkClass} onClick={handleMenuClose}>Profile</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={handleMenuClose}>About</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 