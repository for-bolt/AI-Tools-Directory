import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allTools } from '../data/tools';
import ToolCard from '../components/tools/ToolCard';
import SearchBar from '../components/home/SearchBar';
import FilterDropdowns from '../components/home/FilterDropdowns';
import { useFilters } from '../hooks/useFilters';

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const categoryName = React.useMemo(() => 
    category?.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    [category]
  );

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedPricing,
    setSelectedPricing,
    filteredTools
  } = useFilters({ [categoryName]: allTools[categoryName] || [] });

  // Set the current category when the page loads
  React.useEffect(() => {
    setSelectedCategory(categoryName);
  }, [categoryName, setSelectedCategory]);

  const handleCategoryChange = (newCategory) => {
    if (newCategory === 'All Categories') {
      navigate('/full-list');
    } else {
      const categoryPath = newCategory.toLowerCase().replace(/\s+/g, '-');
      navigate(`/category/${categoryPath}`);
    }
    setSelectedCategory(newCategory);
  };

  if (!categoryName || !allTools[categoryName]) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <p className="text-gray-600">The category you're looking for doesn't exist.</p>
      </div>
    );
  }

  const tools = filteredTools[categoryName] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">{categoryName} Tools</h1>
      
      <div className="mb-8">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <div className="mt-4">
          <FilterDropdowns 
            selectedCategory={selectedCategory}
            selectedPricing={selectedPricing}
            onCategoryChange={handleCategoryChange}
            onPricingChange={setSelectedPricing}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>

      {tools.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No tools found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}