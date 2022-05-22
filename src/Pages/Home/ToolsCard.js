import React from 'react';

const ToolsCard = ({ tool }) => {
  const { img, description, name, minimumOrderQuantity, availableQuantity, price } = tool;
  return (
    <div class="card lg:max-w-lg shadow-2xl text-left">
      <figure>
        <img src={img} alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="text-2xl font-semibold text-accent ">{name}</h2>
        <p className='text-justify font-normal text-gray-500'>{description}</p>
        <div className='flex justify-between items-center'>
          <h6><small className='text-md text-accent font-semibold'>Minimum-Quantity: {minimumOrderQuantity}</small></h6>
          <h6><small className='text-md text-accent font-semibold'>Available-Quantity: {availableQuantity}</small></h6>
        </div>
        <h4 className="text-orange-400 text-2xl text-center"><span className="font-bold text-accent text-sm ">Price : </span> ${price}</h4>
        <div class="card-actions justify-center pt-3">
          <button class="btn btn-secondary rounded-full px-14 py-0 text-white font-bold">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;