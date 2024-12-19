import { useState, useMemo } from 'react';
import { applyAllFilters } from '../utils/filterTools';

export function useFilters(initialTools) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPricing, setSelectedPricing] = useState('All Pricing');

  const filteredTools = useMemo(() => {
    return applyAllFilters(initialTools, {
      searchQuery,
      category: selectedCategory,
      pricing: selectedPricing
    });
  }, [initialTools, searchQuery, selectedCategory, selectedPricing]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedPricing,
    setSelectedPricing,
    filteredTools
  };
}