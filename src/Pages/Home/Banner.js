import React from 'react';
// import banner1 from "../../Assets/Banner/banner-9.png.webp"
import product1 from "../../Assets/Feature/banner-6.png.png"
const Banner = () => {
  return (
    <div class="hero min-h-[89vh] bg-base-200" style={{
      background:`url(${product1})`,
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      backgroundSize:"cover",
    }}>
      <div class="hero-content text-center">
        <div class="max-w-md text-gray-300">
          <h1 class="md:text-6xl text-4xl font-extrabold leading-snug">FUTURE TOOLS SOLUTIONS</h1>
          <p class="pt-4 pb-6 text-md text-gray-300 font-medium racking-wider">Exclusive email offers and limited time discount</p>
          <button class="btn btn-secondary rounded-full px-14 py-0 text-white font-bold">Shop-Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;