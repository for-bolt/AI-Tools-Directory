import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookmarkProvider } from './context/BookmarkContext';
import Header from './components/layout/Header';
import Home from './pages/Home';
import FullList from './pages/FullList';
import Bookmarks from './pages/Bookmarks';
import CategoryPage from './pages/CategoryPage';

export default function App() {
  return (
    <BookmarkProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/full-list" element={<FullList />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </div>
      </Router>
    </BookmarkProvider>
  );
}