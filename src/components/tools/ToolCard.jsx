import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import BookmarkButton from './BookmarkButton';

export default function ToolCard({ name, description, category, pricing, image, rating }) {
  const getPricingColor = (pricing) => {
    switch (pricing) {
      case 'Free': return 'bg-green-100 text-green-800';
      case 'Freemium': return 'bg-purple-100 text-purple-800';
      case 'Paid': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-xl" />
        <div className="absolute top-3 right-3">
          <BookmarkButton tool={{ name, description, category, pricing, image, rating }} />
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPricingColor(pricing)}`}>
            {pricing}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{rating?.toFixed(1)}</span>
          </div>
          
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {category}
          </span>
          
          <button className="flex items-center space-x-1 text-sm font-medium text-blue-600 hover:text-blue-700">
            <span>Visit</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}