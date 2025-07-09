import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { FaBoxOpen, FaUserCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';
import logo from "../assets/icons/ordernest.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.mobile-menu-button')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  function navLinkClass({ isActive }) {
    return (
      "font-medium transition-all duration-300 px-4 py-2 rounded-lg relative group " +
      (isActive
        ? "text-red-400 bg-red-500/10 shadow-lg shadow-red-500/20"
        : "hover:text-red-300 text-gray-300 hover:bg-red-500/5")
    );
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-red-900/50' 
            : 'bg-black/80 backdrop-blur-md border-b-2 border-red-900/30'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center group">
              <div className="relative">
                {/* <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300"> */}
                 <img src={logo} className="w-16 h-16 drop-shadow-sm drop-shadow-pink-600"/>
               
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-white tracking-wide" style={{fontFamily:""}}>
                  OrderNest
                </h1>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <NavLink to="/" className={navLinkClass} end>
                <AiFillHome className="inline-block mr-2 text-lg" />
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
              <NavLink to="/orders" className={navLinkClass}>
                <FaBoxOpen className="inline-block mr-2 text-lg" />
                Orders
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
              <NavLink to="/profile" className={navLinkClass}>
                <FaUserCircle className="inline-block mr-2 text-lg" />
                Profile
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                <FaInfoCircle className="inline-block mr-2 text-lg" />
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden mobile-menu-button p-2 rounded-lg text-gray-300 hover:text-white hover:bg-red-500/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleMenuClose}></div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-16 right-0 z-50 md:hidden transform transition-all duration-300 ease-out ${
          menuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        }`}
      >
        <div className="w-screen bg-black/95 backdrop-blur-xl shadow-2xl border-l border-red-900/50 h-screen overflow-y-auto">
          <div className="p-6">
            
            <nav className="space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `flex items-center p-4 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-red-500/20 text-red-400 shadow-lg shadow-red-500/10' 
                      : 'text-gray-300 hover:bg-red-500/10 hover:text-red-300'
                  }`
                }
                end 
                onClick={handleMenuClose}
              >
                <AiFillHome className="w-5 h-5 mr-3" />
                <span className="font-medium">Home</span>
              </NavLink>
              
              <NavLink 
                to="/orders" 
                className={({ isActive }) => 
                  `flex items-center p-4 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-red-500/20 text-red-400 shadow-lg shadow-red-500/10' 
                      : 'text-gray-300 hover:bg-red-500/10 hover:text-red-300'
                  }`
                }
                onClick={handleMenuClose}
              >
                <FaBoxOpen className="w-5 h-5 mr-3" />
                <span className="font-medium">Orders</span>
              </NavLink>
              
              <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  `flex items-center p-4 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-red-500/20 text-red-400 shadow-lg shadow-red-500/10' 
                      : 'text-gray-300 hover:bg-red-500/10 hover:text-red-300'
                  }`
                }
                onClick={handleMenuClose}
              >
                <FaUserCircle className="w-5 h-5 mr-3" />
                <span className="font-medium">Profile</span>
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `flex items-center p-4 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-red-500/20 text-red-400 shadow-lg shadow-red-500/10' 
                      : 'text-gray-300 hover:bg-red-500/10 hover:text-red-300'
                  }`
                }
                onClick={handleMenuClose}
              >
                <FaInfoCircle className="w-5 h-5 mr-3" />
                <span className="font-medium">About</span>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;