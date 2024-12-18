import React from 'react';
import { Bot, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ToolListItem from './ToolListItem';

export default function CategoryTools({ category, tools, showAll = false }) {
  if (!tools || tools.length === 0) return null;
  
  const displayTools = showAll ? tools : tools.slice(0, 5);
  const totalTools = tools.length;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
        <p className="text-sm text-gray-500 mt-1">{totalTools} tools available</p>
      </div>
      
      <div className="space-y-4">
        {displayTools.map((tool) => (
          <ToolListItem key={tool.name} tool={tool} />
        ))}
      </div>

      {!showAll && totalTools > 5 && (
        <div className="mt-6 text-center">
          <Link
            to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            <span>See All {totalTools} Tools</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}