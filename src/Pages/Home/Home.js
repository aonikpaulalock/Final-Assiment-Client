import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Brand from './Brand';
import Contact from './Contact';
import FetureShop from './FetureShop';
import Review from './Review';
import Sale from './Sale';
import Summery from './Summery';
import Tools from './Tools';

const Home = () => {
  return (
    <>
      <Banner/>
      <Brand/>
      <Tools/>
      <Summery/>
      <FetureShop/>
      <Review/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;