import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, List, Grid } from 'lucide-react';

export default function MobileMenu({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          to="/categories"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:text-blue-600"
        >
          <Grid className="h-5 w-5" />
          <span>Categories</span>
        </Link>
        <Link
          to="/bookmarks"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:text-blue-600"
        >
          <Bookmark className="h-5 w-5" />
          <span>Bookmarks</span>
        </Link>
        <Link
          to="/full-list"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:text-blue-600"
        >
          <List className="h-5 w-5" />
          <span>Full List</span>
        </Link>
        <Link
          to="/submit"
          className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600"
        >
          Submit Tool
        </Link>
      </div>
    </div>
  );
}