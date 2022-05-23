import React from 'react';
import feature from "../../Assets/Feature/banner-7.png.webp"
const FetureShop = () => {
  return (
    <div className="sm:px-10 my-6">
      <div class="hero bg-base-100 p-4">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={feature} class="p-4" alt="" />
          <div className="md:text-left text-center">
            <h1 class="md:text-3xl font-bold text-accent text-2xl ">ACCESSORIES INCLUDED POWER
             TOOLS FEATURE SHOP</h1>
            <p class="py-6 font-medium text-gray-600">You contribute over half of your life operating. Let us help you find the right fit for you or your corporation. Brushless Motor Technology provides 25% more power, 50% more run time and increased motor life…</p>
            <button class="btn btn-secondary rounded-full px-14 py-0 text-white font-bold">Veiw-Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetureShop;