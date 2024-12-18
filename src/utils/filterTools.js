export function filterToolsBySearch(tools, searchQuery) {
  if (!searchQuery) return tools;
  const query = searchQuery.toLowerCase().trim();
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(query) ||
    (tool.description && tool.description.toLowerCase().includes(query))
  );
}

export function filterToolsByCategory(tools, category) {
  if (!category || category === 'All Categories') return tools;
  return tools.filter(tool => tool.category === category);
}

export function filterToolsByPricing(tools, pricing) {
  if (!pricing || pricing === 'All Pricing') return tools;
  return tools.filter(tool => tool.pricing === pricing);
}

export function applyAllFilters(toolsByCategory, { searchQuery, category, pricing }) {
  if (!toolsByCategory || typeof toolsByCategory !== 'object') return {};

  // If category is selected, only filter that specific category
  if (category !== 'All Categories') {
    const categoryTools = toolsByCategory[category] || [];
    const filteredTools = filterToolsByPricing(
      filterToolsBySearch(categoryTools, searchQuery),
      pricing
    );
    return filteredTools.length ? { [category]: filteredTools } : {};
  }

  // Otherwise, filter all categories
  const filteredCategories = {};
  for (const [categoryName, tools] of Object.entries(toolsByCategory)) {
    const filteredTools = filterToolsByPricing(
      filterToolsBySearch(tools, searchQuery),
      pricing
    );
    if (filteredTools.length > 0) {
      filteredCategories[categoryName] = filteredTools;
    }
  }
  return filteredCategories;
}