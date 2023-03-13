import Button from '../UI/Button';
import RatingStar from './RatingStar';

const BookModal = ({ closeModal, book }) => {
  return (
    <div className='modal__wrapper' onClick={closeModal}>
      <div
        className='modal__container'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Button className='modal__button' onClick={closeModal}>
          &times;
        </Button>
        {book.map((item) => (
          <div className='modal__content' key={item.id}>
            <img src={item.image_url} alt='book' />
            <div className='modal__content--info'>
              <h3 className='modal__content--title'>{item.title}</h3>
              <p className='modal__content--authors'>{item.authors}</p>
              <p className='modal__content--description'>{item.description}</p>
              <div className='modal__content--rating'>
                <RatingStar rate={item.rating} />
                <p>{item.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookModal;
