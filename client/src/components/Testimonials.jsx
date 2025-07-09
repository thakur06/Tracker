import React, { useEffect, useRef, useState } from "react";

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    platform: "Amazon & Flipkart",
    feedback: "OrderNest made it so easy to track all my orders in one place. No more searching through emails! The real-time notifications are amazing.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    location: "Mumbai, India",
    orderCount: "150+ orders tracked"
  },
  {
    id: 2,
    name: "Priya Singh",
    platform: "Myntra & Ajio",
    feedback: "I love the clean interface and how I can see my delivery status instantly. The analytics feature helps me track my spending habits too!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    location: "Delhi, India",
    orderCount: "200+ orders tracked"
  },
  {
    id: 3,
    name: "Rahul Verma",
    platform: "All Platforms",
    feedback: "OrderNest saves me so much time. I never miss a delivery now! The unified dashboard is exactly what I needed.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    location: "Bangalore, India",
    orderCount: "300+ orders tracked"
  },
  {
    id: 4,
    name: "Sneha Patel",
    platform: "Zomato & Swiggy",
    feedback: "Perfect for food delivery tracking! The app sends me timely updates and helps me manage all my food orders seamlessly.",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
    location: "Ahmedabad, India",
    orderCount: "100+ orders tracked"
  },
  {
    id: 5,
    name: "Vikram Kumar",
    platform: "BigBasket & Grofers",
    feedback: "Great for grocery delivery management. The order history feature is incredibly useful for reordering essentials.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
    location: "Chennai, India",
    orderCount: "80+ orders tracked"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center justify-center mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'} transition-colors duration-200`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-gradient-to-br from-black/90 via-red-900/10 to-black/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center border transition-all duration-500 transform ${
        isActive 
          ? 'border-red-500/60 scale-105 shadow-red-500/20' 
          : 'border-red-900/30 hover:border-red-700/50'
      } ${isHovered ? 'scale-110 shadow-red-500/30' : ''} min-h-[420px] max-w-[350px] mx-auto relative overflow-hidden group cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${
              i === 0 ? 'animate-ping top-4 left-4' : 
              i === 1 ? 'animate-pulse top-8 right-6' : 
              'animate-bounce bottom-6 left-8'
            }`}
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center h-full justify-between">
        {/* Avatar with enhanced effects */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="relative w-20 h-20 rounded-full border-4 border-red-700 shadow-xl group-hover:border-red-500 transition-all duration-300 transform group-hover:scale-110"
          />
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Star Rating */}
        <StarRating rating={testimonial.rating} />

        {/* Quote Icon */}
        <div className="text-red-400 text-3xl mb-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
          &#10077;
        </div>

        {/* Feedback */}
        <p className="text-white italic mb-4 text-sm leading-relaxed group-hover:text-red-100 transition-colors duration-300 font-medium flex-grow">
          "{testimonial.feedback}"
        </p>

        {/* User Info */}
        <div className="space-y-2 text-center">
          <div className="font-bold text-red-400 text-lg group-hover:text-red-300 transition-colors duration-300">
            {testimonial.name}
          </div>
          <div className="text-xs text-gray-300 tracking-wide mb-1">
            📍 {testimonial.location}
          </div>
          <div className="text-xs text-gray-400 bg-red-900/20 px-3 py-1 rounded-full border border-red-800/30">
            {testimonial.platform}
          </div>
          <div className="text-xs text-green-400 font-semibold">
            ✓ {testimonial.orderCount}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section
      ref={sectionRef}
      className="my-20 py-16 px-4 md:px-10 rounded-3xl shadow-2xl max-w-7xl mx-auto bg-gradient-to-br from-black via-red-900/20 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.05),transparent_50%)]"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Roboto_Slab','serif'] flex items-center justify-center gap-3 mb-4">
          <span className="text-5xl text-red-600 animate-pulse">&#10077;</span> 
          What Our Users Say
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Join thousands of satisfied users who trust OrderNest for their delivery management
        </p>
        <div className="flex items-center justify-center gap-2 mt-4 text-yellow-400">
          <span className="text-2xl">⭐</span>
          <span className="text-xl font-bold">4.9/5</span>
          <span className="text-gray-400">from 10,000+ reviews</span>
        </div>
      </div>

      {/* Testimonials Container */}
      <div className="relative z-10">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center space-x-6 mb-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              isActive={index === 1}
            />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex justify-center mb-8">
          <TestimonialCard 
            testimonial={testimonials[currentSlide]} 
            isActive={true}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-red-900/30 hover:bg-red-700/50 border border-red-700/50 text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-red-500 scale-125' 
                    : 'bg-gray-600 hover:bg-red-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-red-900/30 hover:bg-red-700/50 border border-red-700/50 text-white transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Auto-play indicator */}
        <div className="flex items-center justify-center mt-4 space-x-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm flex items-center space-x-1"
          >
            <span>{isAutoPlaying ? '⏸️' : '▶️'}</span>
            <span>{isAutoPlaying ? 'Pause' : 'Play'} auto-scroll</span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
    </section>
  );
};

export default Testimonials;