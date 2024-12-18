import React from 'react';

export default function Newsletter() {
  return (
    <section className="bg-blue-600 rounded-2xl p-8 text-white text-center mt-16">
      <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
      <p className="mb-6">Get weekly updates about the latest AI tools and trends.</p>
      <div className="max-w-md mx-auto flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
        />
        <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Subscribe
        </button>
      </div>
    </section>
  );
}