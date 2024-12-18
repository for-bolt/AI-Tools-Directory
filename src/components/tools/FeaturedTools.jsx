import React from 'react';
import { Sparkles } from 'lucide-react';
import ToolCard from './ToolCard';

const featuredTools = [
  {
    name: 'ChatGPT',
    description: 'Advanced language model for natural conversations and content generation',
    category: 'Text Generation',
    pricing: 'Freemium',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    rating: 4.8
  },
  {
    name: 'DALL·E 3',
    description: 'Create stunning, photorealistic images from text descriptions',
    category: 'Image Generation',
    pricing: 'Paid',
    image: 'https://images.unsplash.com/photo-1686191128892-3b37813f0dc5',
    rating: 4.9
  },
  {
    name: 'GitHub Copilot',
    description: 'AI-powered code completion and suggestion tool',
    category: 'Code Assistant',
    pricing: 'Paid',
    image: 'https://images.unsplash.com/photo-1687186735445-df877226fae9',
    rating: 4.7
  },
  {
    name: 'Midjourney',
    description: 'Create artistic images with AI-powered generation',
    category: 'Image Generation',
    pricing: 'Paid',
    image: 'https://images.unsplash.com/photo-1686191128892-3b37813f0dc5',
    rating: 4.8
  }
];

export default function FeaturedTools() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-900">Featured Tools</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredTools.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </section>
  );
}