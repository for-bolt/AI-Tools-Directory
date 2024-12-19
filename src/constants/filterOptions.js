import { allTools } from '../data/tools';

// Get categories from allTools
const toolCategories = Object.keys(allTools);

export const CATEGORIES = [
  'All Categories',
  ...toolCategories
];

export const PRICING_OPTIONS = [
  'All Pricing',
  'Free',
  'Freemium',
  'Paid'
];