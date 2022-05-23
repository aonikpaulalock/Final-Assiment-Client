import React from 'react';

const Summery = () => {
  // const summaries = [
  //   { id: 1, name: 'Customers', quantity: "100+" },
  //   { id: 2, name: 'Annual revenue', quantity: "120M+" },
  //   { id: 3, name: 'Reviews', quantity: "40K" },
  //   { id: 4, name: 'Tools', quantity: "1500+" },
  // ]
  return (
    <div className='my-4'>
      <h1 className="text-center text-accent font-bold md:text-4xl my-8 sm:text-3xl text-2xl">SUMMERY</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-col-1 bg-base-200 p-4 gap-4">
        <div class="stat place-items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <div class="stat-title font-bold text-accent text-2xl my-2">Customers</div>
          <div class="stat-value text-secondary">100+</div>
        </div>
        <div class="stat place-items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </div>
          <div class="stat-title font-bold text-accent text-2xl my-2">Annual revenue</div>
          <div class="stat-value text-secondary">120M+</div>
        </div>
        <div class="stat place-items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div class="stat-title font-bold text-accent text-2xl my-2">Reviews</div>
          <div class="stat-value text-secondary">33K+</div>
        </div>
        <div class="stat place-items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div class="stat-title font-bold text-accent text-2xl my-2">Tools</div>
          <div class="stat-value text-secondary">100+</div>
        </div>
      </div>
    </div >
  );
};

export default Summery;