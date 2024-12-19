import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function CategoryCard({ title, icon: Icon, subcategories }) {
  const categoryPath = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      
      <div className="space-y-3">
        {subcategories.map(({ name, count }) => (
          <Link
            key={name}
            to={`/category/${categoryPath}/${name.toLowerCase().replace(/[\s/]+/g, '-')}`}
            className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded-lg group"
          >
            <span className="text-gray-700 group-hover:text-blue-600">{name}</span>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm">({count})</span>
              <ChevronRight className="h-4 w-4 group-hover:text-blue-600" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}