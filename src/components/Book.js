import React, { useEffect, useState } from 'react';

import Button from '../UI/Button';
import BookModal from './BookModal';
import RatingStar from './RatingStar';

const Book = React.forwardRef(
  ({ book, addFavorite, removeFavorite, checkFavorite }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = 'hidden';
      }

      return () => (document.body.style.overflow = 'scroll');
    }, [isModalOpen]);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    const bookBody = (
      <>
        <img src={book.image_url} alt='book' />
        <h3 className='book__title'>{book.title}</h3>
        <p className='book__authors'>{book.authors}</p>
        <RatingStar rate={book.rating} />
        <p className='book__rating'>{book.rating}</p>
        <div className='book_actions'>
          <Button className='book__button' onClick={openModal}>
            Show details
          </Button>
          {!checkFavorite(book.id) ? (
            <Button className='book__button' onClick={() => addFavorite(book)}>
              Add favorite
            </Button>
          ) : (
            <Button
              className='book__button--favorite'
              onClick={() => removeFavorite(book.id)}
            >
              Remove favorite
            </Button>
          )}
        </div>
        {isModalOpen && <BookModal closeModal={closeModal} book={[book]} />}
      </>
    );

    const content = ref ? (
      <div className='book' ref={ref}>
        {bookBody}
      </div>
    ) : (
      <div className='book'>{bookBody}</div>
    );

    return content;
  }
);

export default Book;
