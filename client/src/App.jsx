import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import About from "./pages/About";
import CookieAlert from "./components/CookieAlert";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GoogleOAuthProvider } from '@react-oauth/google';

function NotFound() {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const helpRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([iconRef.current, headingRef.current, textRef.current, buttonsRef.current, helpRef.current], {
      opacity: 0,
      y: 40
    });
    
    // Animate container fade in
    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    )
    // Animate 404 icon with scale and rotation
    .fromTo(
      iconRef.current,
      { opacity: 0, scale: 0.5, rotation: -180 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }
    )
    // Animate heading with slight bounce
    .fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    )
    // Animate text elements
    .fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    )
    // Animate buttons with stagger
    .fromTo(
      buttonsRef.current.children,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out", stagger: 0.1 },
      "-=0.2"
    )
    // Animate help text
    .fromTo(
      helpRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
      "-=0.1"
    );
    
    // Add floating animation to the 404 icon
    gsap.to(iconRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
    
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-red-900 to-black text-white px-4 relative overflow-hidden">
      {/* Animated background particles */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div> */}
      
      <div className="text-center max-w-md z-10">
        {/* Professional 404 Icon */}
        <div ref={iconRef} className="mx-auto mb-8 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-2xl border-2 border-red-500">
          <div className="text-white text-6xl font-bold">404</div>
        </div>
        
        {/* Heading */}
        <h1 ref={headingRef} className="text-4xl font-bold mb-4 text-white">
          Page Not Found
        </h1>
        
        {/* Text content */}
        <div ref={textRef}>
          <p className="text-lg text-red-200 mb-2">
            We can't seem to find the page you're looking for.
          </p>
          
          <p className="text-sm text-red-300 mb-8">
            The page may have been moved, deleted, or you may have typed the URL incorrectly.
          </p>
        </div>
        
        {/* Action buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 hover:shadow-lg transition-all duration-200 shadow-md border border-red-500"
          >
            Go Home
          </a>
          
          <button 
            onClick={() => window.history.back()} 
            className="bg-transparent text-red-200 px-8 py-3 rounded-lg font-semibold hover:bg-red-800 hover:text-white transition-all duration-200 border border-red-400"
          >
            Go Back
          </button>
        </div>
        
        {/* Additional help */}
        <div ref={helpRef} className="mt-8 text-sm text-red-300">
          <p>Need help? <a href="/contact" className="text-red-400 hover:text-red-200 hover:underline transition-colors duration-200">Contact support</a></p>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <Router>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieAlert />
        <Footer />
      </GoogleOAuthProvider>
    </Router>
  );
}

export default App;
