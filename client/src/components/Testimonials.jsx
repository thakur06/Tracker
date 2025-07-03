import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amit Sharma",
    platform: "Amazon & Flipkart",
    feedback:
      "OrderNest made it so easy to track all my orders in one place. No more searching through emails! Highly recommended.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    platform: "Myntra",
    feedback:
      "I love the clean interface and how I can see my delivery status instantly. A must-have for online shoppers!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    platform: "All Platforms",
    feedback:
      "OrderNest saves me so much time. I never miss a delivery now!",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="my-20 py-14 px-4 md:px-10 rounded-3xl shadow-2xl max-w-6xl mx-auto bg-gradient-to-br from-black via-red-900 to-black"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-white tracking-tight font-['Roboto_Slab','serif'] flex items-center justify-center gap-2">
        <span className="text-5xl text-red-600">&#10077;</span> What Our Users Say
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-12 testimonials-swiper"
        a11y={{ prevSlideMessage: 'Previous testimonial', nextSlideMessage: 'Next testimonial' }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="bg-black/80 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-red-900/40 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer min-h-[370px] min-w-[320px] max-w-[350px] mx-auto justify-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 border-4 border-red-700 shadow group-hover:border-red-500 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-white italic mb-4 text-lg md:text-xl group-hover:text-red-400 transition-colors duration-300 font-medium">"{t.feedback}"</p>
              <div className="font-semibold text-red-400 text-lg mb-1">{t.name}</div>
              <div className="text-xs text-gray-300 tracking-wide">{t.platform}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials; 