import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FilterDropdowns from './FilterDropdowns';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPricing, setSelectedPricing] = useState('All Pricing');

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),transparent)]" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/80 shadow-xl shadow-blue-600/10 ring-1 ring-blue-50" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center space-y-8">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-6 animate-fade-in">
              Discover the Best AI Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our curated collection of cutting-edge AI tools to enhance your productivity and creativity.
            </p>

            <div className="max-w-4xl mx-auto space-y-6">
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

            <div className="flex justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">20+</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">10k+</div>
                <div className="text-gray-600">Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}