import React from 'react';
import { BookmarkPlus, BookmarkCheck } from 'lucide-react';
import { useBookmarkContext } from '../../context/BookmarkContext';

export default function BookmarkButton({ tool }) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarkContext();
  const bookmarked = isBookmarked(tool.name);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (bookmarked) {
      removeBookmark(tool.name);
    } else {
      addBookmark(tool);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full transition-colors duration-200 ${
        bookmarked 
          ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
          : 'bg-white/90 hover:bg-white text-gray-600'
      }`}
      title={bookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
    >
      {bookmarked ? (
        <BookmarkCheck className="h-5 w-5" />
      ) : (
        <BookmarkPlus className="h-5 w-5" />
      )}
    </button>
  );
}