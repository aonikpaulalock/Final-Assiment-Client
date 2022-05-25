import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Reviews from './Reviews';

const Review = () => {
  const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/reviews')
    .then(res => res.json()));

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='lg:px-12'>
      <h1 className="text-center text-accent font-bold md:text-4xl my-8 sm:text-3xl text-2xl">TESTIMONIALS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          reviews.map(review => <Reviews
            key={review.id}
            review={review}
          ></Reviews>)
        }
      </div>
    </div>
  );
};

export default Review;