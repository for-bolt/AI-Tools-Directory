import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FilterDropdowns from './FilterDropdowns';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPricing, setSelectedPricing] = useState('All Pricing');

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Discover the Best AI Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of cutting-edge AI tools to enhance your productivity and creativity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <FilterDropdowns 
            selectedCategory={selectedCategory}
            selectedPricing={selectedPricing}
            onCategoryChange={setSelectedCategory}
            onPricingChange={setSelectedPricing}
          />
        </div>
      </div>
    </div>
  );
}