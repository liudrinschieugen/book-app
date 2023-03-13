import { Rating } from 'react-simple-star-rating';

const RatingStar = ({ rate }) => {
  return (
    <>
      <Rating
        readonly
        allowFraction
        size='18'
        fillColor='#f29f00'
        initialValue={rate}
      />
    </>
  );
};

export default RatingStar;
