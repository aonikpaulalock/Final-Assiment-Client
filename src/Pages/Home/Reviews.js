import React from 'react';

const Reviews = ({ review }) => {
  const { name, rating, description, img } = review;
  return (
    <div class="md:max-w-md rounded-xl border shadow-2xl p-4 my-6">
      <div class="flex flex-col items-center pb-10">
        <img class="my-3 w-24 h-24 rounded-full shadow-lg" src={img} alt="" />
        <h5 class=" text-2xl font-medium text-accent">{name}</h5>
        <p class="text-md text-gray-500 font-medium leading-6 py-1">{description}</p>
        <p class="text-md text-orange-500 font-medium leading-6 ">{rating}</p>
      </div>
    </div>
  );
};

export default Reviews;