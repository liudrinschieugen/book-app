import { useState, useRef, useCallback } from 'react';

import useBooks from '../hooks/useBooks';
import Book from './Book';

const BooksList = ({ addFavorite, removeFavorite, checkFavorite }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const { books, isLoading, isError, error, nextPage } = useBooks(pageNumber);

  const observer = useRef();

  const lastBookRef = useCallback(
    (elem) => {
      if (isLoading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((books) => {
        if (books[0].isIntersecting && nextPage) {
          setPageNumber((prevState) => prevState + 1);
        }
      });

      if (elem) observer.current.observe(elem);
    },
    [isLoading, nextPage]
  );

  if (isError) return <p className='error center'>Error: {error.message}</p>;

  return (
    <main>
      <div className='book__container'>
        {books.map((book, i) => {
          if (books.length === i + 1) {
            return (
              <Book
                ref={lastBookRef}
                key={book.id}
                book={book}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                checkFavorite={checkFavorite}
              />
            );
          }

          return (
            <Book
              key={book.id}
              book={book}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              checkFavorite={checkFavorite}
            />
          );
        })}
      </div>
      {isLoading && <p className='center'>Loading more books...</p>}
    </main>
  );
};

export default BooksList;
