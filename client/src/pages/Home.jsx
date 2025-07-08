import { Hero } from "../components/Hero";
import { Integrations } from "../components/Integrations";
import Testimonials from "../components/Testimonials";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


const Home = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.3, stagger: 0.15, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black p-4">
      {/* Hero Section */}
      <Hero />

      {/* Integrations Section */}
      <div className="my-12">
        <Integrations />
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      
    </div>
  );
};

export default Home; 