import React from 'react';
import { useParams } from 'react-router-dom';
import ToolCard from '../components/tools/ToolCard';
import { allTools } from '../data/tools';

export default function SubcategoryPage() {
  const { category, subcategory } = useParams();
  
  const formattedSubcategory = subcategory
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Get the tools for this subcategory from allTools
  const categoryTools = allTools[formattedSubcategory] || [];

  if (!categoryTools.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">No Tools Found</h1>
        <p className="text-gray-600">No tools available for this category yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">{formattedSubcategory}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </div>
  );
}