import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Nykaa from '../assets/icons/nykaa.png'
import Flipkart from '../assets/icons/flipkart.png'
import Amazon from '../assets/icons/amazon.png'
import Myntra from '../assets/icons/myntra.png'
import Ajio from '../assets/icons/ajio.png'
import SouledStore from '../assets/icons/souledstore.png'
import Powerlook from '../assets/icons/powerlook.png'

export const Integrations = () => {
  const sectionRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    gsap.fromTo(
      iconRefs.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, delay: 0.3, stagger: 0.1, ease: 'back.out(1.7)' }
    );
  }, []);

  const icons = [
    { src: Nykaa, alt: 'Nykaa' },
    { src: Flipkart, alt: 'Flipkart' },
    { src: Amazon, alt: 'Amazon' },
    { src: Myntra, alt: 'Myntra' },
    { src: Ajio, alt: 'Ajio' },
    { src: SouledStore, alt: 'SouledStore' },
    { src: Powerlook, alt: 'Powerlook', className: 'w-32 h-8 md:w-60 md:h-12' },
  ];

  return (
    <section
      ref={sectionRef}
      className="my-20 py-14 px-6 md:px-12 bg-white/90 rounded-3xl shadow-2xl max-w-6xl mx-auto"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4 text-gray-900 tracking-tight font-['Roboto_Slab','serif']">
        Integrate with any platform
      </h1>
      <p className="text-gray-700 text-lg md:text-2xl text-center mb-10 font-medium max-w-3xl mx-auto">
        We built the ultimate tool for showcasing your satisfied customers. With just 3 lines of HTML, you can embed all your testimonials on any platform!
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 w-full">
        {icons.map((icon, i) => (
          <img
            key={icon.alt}
            ref={el => (iconRefs.current[i] = el)}
            src={icon.src}
            alt={icon.alt}
            className={`w-16 h-16 md:w-24 md:h-24 object-contain transition-transform duration-200 hover:scale-110 hover:brightness-110 ${icon.className || ''}`}
          />
        ))}
      </div>
    </section>
  )
}
