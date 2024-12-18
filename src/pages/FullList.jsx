import React from 'react';
import { allTools } from '../data/tools';
import CategoryTools from '../components/tools/CategoryTools';
import SearchBar from '../components/home/SearchBar';
import FilterDropdowns from '../components/home/FilterDropdowns';
import { useFilters } from '../hooks/useFilters';

export default function FullList() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedPricing,
    setSelectedPricing,
    filteredTools
  } = useFilters(allTools);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">All AI Tools</h1>
      
      <div className="mb-8 space-y-4">
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(filteredTools).map(([category, tools]) => (
          <CategoryTools
            key={category}
            category={category}
            tools={tools}
            showAll={false}
          />
        ))}
      </div>

      {Object.keys(filteredTools).length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No tools found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}