import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedTools from '../components/tools/FeaturedTools';
import ToolsList from '../components/tools/ToolsList';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FeaturedTools />
        <ToolsList />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}