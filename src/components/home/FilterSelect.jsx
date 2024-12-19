import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FilterSelect({ options, value, onChange, placeholder }) {
  return (
    <div className="relative min-w-[200px]">
      <select 
        className="w-full appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-3 focus:outline-none focus:border-blue-500 text-gray-600"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
  );
}