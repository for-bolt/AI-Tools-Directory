import React, { createContext, useContext } from 'react';
import { useBookmarks } from '../hooks/useBookmarks';

const BookmarkContext = createContext(null);

export function BookmarkProvider({ children }) {
  const bookmarkUtils = useBookmarks();

  return (
    <BookmarkContext.Provider value={bookmarkUtils}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarkContext() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarkContext must be used within a BookmarkProvider');
  }
  return context;
}