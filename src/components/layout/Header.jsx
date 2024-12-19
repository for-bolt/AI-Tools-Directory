import React from 'react';
import { Menu, X, Brain, Bookmark, List, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AITools Hub</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/bookmarks" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
              <Bookmark className="h-5 w-5" />
              <span>Bookmarks</span>
            </Link>
            <Link to="/full-list" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
              <List className="h-5 w-5" />
              <span>Full List</span>
            </Link>
            <Link to="/categories" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
              <Grid className="h-5 w-5" />
              <span>Categories</span>
            </Link>
            <Link to="/submit" className="text-gray-600 hover:text-blue-600">Submit Tool</Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
}