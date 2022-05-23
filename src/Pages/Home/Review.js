import React from 'react';
import Reviews from './Reviews';

const Review = () => {
  const reviews = [
    { id: 1, name: "Jerry", rating: "5 Start", des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, tenetur.", img: "https://i.ibb.co/k3KzzVv/people2.png" },
    { id: 2, name: "Michel", rating: "5 Start", des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, tenetur.", img: "https://i.ibb.co/k3KzzVv/people2.png" },
    { id: 3, name: "Puspi", rating: "5 Start", des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, tenetur.", img: "https://i.ibb.co/k3KzzVv/people2.png" },
  ]
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