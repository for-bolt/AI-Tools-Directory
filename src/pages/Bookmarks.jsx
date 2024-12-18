import React from 'react';
import { Bookmark } from 'lucide-react';
import { useBookmarkContext } from '../context/BookmarkContext';
import ToolCard from '../components/tools/ToolCard';

export default function Bookmarks() {
  const { bookmarks } = useBookmarkContext();

  if (bookmarks.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <Bookmark className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Bookmarks Yet</h2>
          <p className="text-gray-600">Start saving your favorite AI tools for quick access.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Your Bookmarked Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {bookmarks.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </div>
  );
}