import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { CATEGORIES, PRICING_OPTIONS } from '../../constants/filterOptions';
import FilterSelect from './FilterSelect';

export default function FilterDropdowns({ 
  selectedCategory, 
  selectedPricing, 
  onCategoryChange, 
  onPricingChange 
}) {
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    if (category !== 'All Categories') {
      const categoryPath = category.toLowerCase().replace(/\s+/g, '-');
      navigate(`/category/${categoryPath}`);
    }
    onCategoryChange(category);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <FilterSelect
        options={CATEGORIES}
        value={selectedCategory}
        onChange={handleCategoryChange}
        placeholder="Select Category"
      />
      <FilterSelect
        options={PRICING_OPTIONS}
        value={selectedPricing}
        onChange={onPricingChange}
        placeholder="Select Pricing"
      />
    </div>
  );
}