import React from 'react';
import { Bot, ExternalLink } from 'lucide-react';

export default function ToolListItem({ tool }) {
  const { name, pricing } = tool;
  
  const getPricingColor = (pricing) => {
    switch (pricing) {
      case 'Free': return ['bg-green-100 text-green-700', 'text-green-600'];
      case 'Freemium': return ['bg-purple-100 text-purple-700', 'text-purple-600'];
      case 'Paid': return ['bg-blue-100 text-blue-700', 'text-blue-600'];
      default: return ['bg-gray-100 text-gray-700', 'text-gray-600'];
    }
  };

  const [bgColor, textColor] = getPricingColor(pricing);

  return (
    <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors -mx-4">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${bgColor}`}>
          <Bot className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{name}</h3>
          <span className={`text-sm ${textColor}`}>{pricing}</span>
        </div>
      </div>
      <button 
        className="p-2 hover:bg-white rounded-lg transition-colors"
        title={`Visit ${name}`}
      >
        <ExternalLink className="h-4 w-4 text-gray-600" />
      </button>
    </div>
  );
}