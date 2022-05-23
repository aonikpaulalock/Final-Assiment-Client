import React from 'react';
import contact from "../../Assets/Contact/flat-design-illustration-customer-support_23-2148887720.webp"
const Contact = () => {
  return (
    <div className="sm:px-10 my-6">
      <h1 className="text-center text-accent font-bold md:text-4xl my-8 sm:text-3xl text-2xl">CONTACT US</h1>
      <div class="flex justify-around items-center flex-col md:flex-row rounded-xl">
        <div className="md:flex-1 w-full">
          <img src={contact} class="lg:max-w-lg" alt="" />
        </div>
        <div className="md:flex-1 w-full bg-base-200 p-10 shadow rounded-xl">
          <h1 className="text-bold text-2xl pb-4 text-accent">Contact</h1>
          <input type="text" placeholder="Enter Your Name" class="input shadow-md w-full max-w-lg mb-4" />
          <br />
          <input type="email" placeholder="Enter Your Email" class="input w-full shadow-md max-w-lg mb-4 " />
          <input type="text" placeholder="Enter Your Adress" class="input shadow-md w-full max-w-lg mb-4" />
          <br />
          <textarea class="textarea w-full max-w-lg mb-4 shadow-md" placeholder="Message"></textarea>
          <br />
          <button class="btn btn-secondary rounded-full px-10 py-0 text-white font-bold">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;