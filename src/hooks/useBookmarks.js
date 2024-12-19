import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'aitools_bookmarks';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem(STORAGE_KEY);
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = useCallback((tool) => {
    setBookmarks(prev => {
      if (prev.some(b => b.name === tool.name)) return prev;
      return [...prev, tool];
    });
  }, []);

  const removeBookmark = useCallback((toolName) => {
    setBookmarks(prev => prev.filter(tool => tool.name !== toolName));
  }, []);

  const isBookmarked = useCallback((toolName) => {
    return bookmarks.some(tool => tool.name === toolName);
  }, [bookmarks]);

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked
  };
}