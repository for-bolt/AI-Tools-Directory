import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Clock, Trophy, Star, Sparkles } from 'lucide-react';

const iconComponents = {
  Clock,
  Trophy,
  Star,
  Sparkles,
};

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600 border-blue-100',
  purple: 'bg-purple-50 text-purple-600 border-purple-100',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  amber: 'bg-amber-50 text-amber-600 border-amber-100',
};

export default function ToolsColumn({ title, tools, accentColor, icon }) {
  const IconComponent = iconComponents[icon];
  const colorClass = colorClasses[accentColor];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className={`p-4 border-b ${colorClass} flex items-center gap-2`}>
        <IconComponent className="h-5 w-5" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      
      <div className="divide-y divide-gray-100">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div>
              <h4 className="font-medium text-gray-900">{tool.name}</h4>
              <span className={`text-sm ${
                tool.pricing === 'Free' ? 'text-green-600' :
                tool.pricing === 'Freemium' ? 'text-purple-600' :
                'text-blue-600'
              }`}>
                {tool.pricing}
              </span>
            </div>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title={`Visit ${tool.name}`}
            >
              <ExternalLink className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}