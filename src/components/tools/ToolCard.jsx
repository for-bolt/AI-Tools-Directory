import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import BookmarkButton from './BookmarkButton';

export default function ToolCard({ name, description, image, rating, featured }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative">
      {featured && (
        <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
          Featured
        </div>
      )}
      
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-xl" />
        <div className="absolute top-3 right-3">
          <BookmarkButton tool={{ name, description, image, rating }} />
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{rating?.toFixed(1)}</span>
          </div>
          
          <button className="flex items-center space-x-1 text-sm font-medium text-blue-600 hover:text-blue-700">
            <span>Visit</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}