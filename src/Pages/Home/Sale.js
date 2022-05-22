import React from 'react';
import sale1 from "../../Assets/Vouser/banner-32.jpg.webp"
import sale2 from "../../Assets/Vouser/banner-33.jpg.webp"
const Sale = () => {
  return (
    <div className='my-14 sm:px-10'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
        <div className='shadow-xl'>
          <img src={sale1} alt="" />
        </div>
        <div className='shadow-xl'>
          <img src={sale2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sale;