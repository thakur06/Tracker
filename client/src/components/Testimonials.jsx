import React from "react";

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

const Testimonials = () => (
  <section className="my-12">
    <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">What Our Users Say</h2>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg p-6 flex-1 max-w-md mx-auto flex flex-col items-center text-center border-t-4 border-indigo-400"
        >
          <img
            src={t.avatar}
            alt={t.name}
            className="w-20 h-20 rounded-full mb-4 border-4 border-indigo-200 shadow"
          />
          <p className="text-gray-700 italic mb-4">"{t.feedback}"</p>
          <div className="font-semibold text-indigo-600">{t.name}</div>
          <div className="text-xs text-gray-500">{t.platform}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 