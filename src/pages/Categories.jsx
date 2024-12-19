import React from 'react';
import { 
  Brain, MessageSquare, Video, Type 
} from 'lucide-react';
import CategoryCard from '../components/categories/CategoryCard';
import { allTools } from '../data/tools';

const categories = [
  {
    title: 'Text Generation',
    icon: Type,
    subcategories: [
      { name: 'Text Generation', count: allTools['Text Generation']?.length || 0 },
      { name: 'Writing & Web SEO', count: 132 },
      { name: 'Prompts & Aids', count: 62 },
      { name: 'Summarizer', count: 67 }
    ]
  },
  {
    title: 'Image Generation',
    icon: Brain,
    subcategories: [
      { name: 'Image Generation', count: allTools['Image Generation']?.length || 0 }
    ]
  },
  {
    title: 'Code Assistant',
    icon: MessageSquare,
    subcategories: [
      { name: 'Code Assistant', count: allTools['Code Assistant']?.length || 0 }
    ]
  },
  {
    title: 'Video Tools',
    icon: Video,
    subcategories: [
      { name: 'Video Edition', count: 115 },
      { name: 'Video Generators', count: 142 },
      { name: 'Text-to-video', count: 43 }
    ]
  }
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
}