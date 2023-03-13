import Button from '../UI/Button';
import RatingStar from './RatingStar';

const Favorites = ({ favorites, removeFavorite }) => {
  return (
    <main>
      <div className='favorites__container'>
        {favorites.length === 0 && (
          <h2>You have not added favorite books yet.</h2>
        )}
        {favorites.map((item) => (
          <div className='favorites__content' key={item.id}>
            <img src={item.image_url} alt='book' />
            <div className='favorites__content--info'>
              <h3 className='favorites__content--title'>{item.title}</h3>
              <p className='favorites__content--authors'>{item.authors}</p>
              <p className='favorites__content--description'>
                {item.description}
              </p>

              <div className='favorites__content--rating'>
                <RatingStar rate={item.rating} />
                <p>{item.rating}</p>
              </div>
              <Button
                className='book__button--favorite'
                onClick={() => removeFavorite(item.id)}
              >
                Remove favorite
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Favorites;
