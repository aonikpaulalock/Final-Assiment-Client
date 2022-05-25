import React from 'react';
// import banner1 from "../../Assets/Banner/banner-9.png.webp"
import product1 from "../../Assets/Feature/banner-6.png.png"
const Banner = () => {
  return (
    <div class="hero min-h-[90vh] bg-base-200" style={{
      background:`url(${product1})`,
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      backgroundSize:"cover",
    }}>
      <div class="hero-content text-center">
        <div class="max-w-lg text-gray-300">
          <h1 class="md:text-4xl text-4xl font-extrabold">FUTURE TOOLS SOLUTIONS</h1>
          <p class="pt-3 pb-7 text-md text-gray-300 font-medium racking-wider">Exclusive email offers and limited time discount </p>
          <button class="bg-secondary rounded-full px-20 py-2 text-white font-bold">Shop-Now</button>
        </div>
      </div>
    </div>
    // <div className="sm:px-10">
    //   <div class="hero lg:p-8">
    //     <div class="hero-content flex-col lg:flex-row-reverse ">
    //       <img src={product1} class="lg:p-4 sm:max-w-sm" alt="" />
    //       <div className="md:text-left text-center">
    //         <h1 class="md:text-3xl font-bold text-accent text-2xl ">OOPS! PAGE NOT FOUND.</h1>
    //         <p class="py-6 font-medium text-gray-600">Sory but the page you are looking for does not exit, have been removed or name changed. Go back Homepage or enter the key words to search, please!</p>
    //         <button class="btn btn-secondary rounded-full px-14 py-0 text-white font-bold">Back to Home</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;