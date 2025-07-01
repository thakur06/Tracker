import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="bg-white shadow-md py-5 px-6 text-black"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className=" text-2xl font-bold tracking-wide flex items-center">
          <span className="mr-2">🛒</span> OrderNest
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className=" hover:text-indigo-200 font-medium transition-colors duration-150">Home</Link>
          <Link to="/orders" className=" hover:text-indigo-200 font-medium transition-colors duration-150">Orders</Link>
          <Link to="/profile" className=" hover:text-indigo-200 font-medium transition-colors duration-150">Profile</Link>
          <Link to="/about" className=" hover:text-indigo-200 font-medium transition-colors duration-150">About</Link>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden  focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden mt-2 flex flex-col space-y-2 shadow p-4 animate-fade-in"
        >
          <Link to="/" className=" hover:text-indigo-200 font-medium transition-colors duration-150" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/orders" className=" hover:text-indigo-200 font-medium transition-colors duration-150" onClick={() => setMenuOpen(false)}>Orders</Link>
          <Link to="/profile" className=" hover:text-indigo-200 font-medium transition-colors duration-150" onClick={() => setMenuOpen(false)}>Profile</Link>
          <Link to="/about" className=" hover:text-indigo-200 font-medium transition-colors duration-150" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 