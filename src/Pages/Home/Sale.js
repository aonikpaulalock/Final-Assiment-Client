// import React from 'react';
// import sale1 from "../../Assets/Vouser/banner-32.jpg.webp"
// import sale2 from "../../Assets/Vouser/banner-33.jpg.webp"
// const Sale = () => {
//   return (
//     <div className='my-14 sm:px-10'>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
//         <div className='shadow-xl'>
//           <img src={sale1} alt="" />
//         </div>
//         <div className='shadow-xl'>
//           <img src={sale2} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sale;

import React from 'react';
import brand1 from "../../Assets/Logos/blogo1.png"
import brand2 from "../../Assets/Logos/blogo2.png"
import brand3 from "../../Assets/Logos/blogo3.png"
import brand4 from "../../Assets/Logos/blogo4.png"
const brands = [
  { id: 1, img: brand1 },
  { id: 2, img: brand2 },
  { id: 3, img: brand3 },
  { id: 4, img: brand4 },
]

const Brand = () => {
  return (
    <div className="lg:px-12 mt-8 mb-16">
      <h1 className="text-center text-accent font-bold md:text-4xl my-8 sm:text-3xl text-2xl">OUR BRANDS</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {
          brands.map(brand =>
            <div className='rounded-xl cursor-pointer hover:bg-gray-200 ease-in duration-500  hover:scale-110 ' key={brand.id}>
              <img src={brand.img} alt="" className='w-7/12 mx-auto' />
            </div>)
        }
      </div>
    </div>
  );
};

export default Brand;