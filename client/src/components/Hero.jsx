import React from 'react'

export const Hero = () => {
  return (
    <section className="text-center py-20 bg-white px-4">
    <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
      Smarter Order Tracking.
    </h1>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
      One dashboard for all your online orders. Connect your Gmail and get automatic updates from Amazon, Flipkart, and more.
    </p>
    <div className="flex justify-center gap-4 mb-8">
      <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">📦 Amazon</span>
      <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">🛒 Flipkart</span>
      <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">👕 Myntra</span>
    </div>
    <button className="bg-purple-600 text-white px-8 py-3 text-lg font-medium rounded hover:bg-purple-700 transition">
      Sign in with Google
    </button>
  </section>
  
  
  )
}
