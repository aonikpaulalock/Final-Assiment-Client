import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from "../../Assets/Notfound/image_404.png"
const Notfond = () => {
  const navigate = useNavigate()
  return (
    <div className="sm:px-10">
      <div class="hero lg:p-8">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img src={notfound} class="lg:p-4 sm:max-w-sm" alt="" />
          <div className="md:text-left text-center">
            <h1 class="md:text-3xl font-bold text-accent text-2xl ">OOPS! PAGE NOT FOUND.</h1>
            <p class="py-6 font-medium text-gray-600">Sory but the page you are looking for does not exit, have been removed or name changed. Go back Homepage or enter the key words to search, please!</p>
            <button class="btn btn-secondary rounded-full px-14 py-0 text-white font-bold" onClick={() => navigate('/')}>Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfond;