import React from 'react';
import HomeSlider from './component/HomeSlider/HomeSlider';
import HomeVoucher from './component/HomeVoucher/HomeVoucher';
import HomeProduct from './component/HomeProduct/HomeProduct';
import ActionNew from './component/ActionNew/ActionNew';
import Experience from './component/Experience/Experience';
import Banner from './component/Banner/Banner';
import Partner from './component/Partner/Partner';

function Home(props) {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <HomeVoucher></HomeVoucher>
      <HomeProduct></HomeProduct>
      <ActionNew></ActionNew>
      <Experience></Experience>
      <Banner></Banner>
      <Partner></Partner>
      
    </div>
  );
}

export default Home;