import React from 'react';
import BigProductMob from '../../components/BigProductMob/BigProductMob';
import BigProductsView from '../../components/BigProductsView/BigProductsView';
import CarouselAds from '../../components/CarouselAds/CarouselAds';
import ProductMenuView from '../../components/ProductMenuView/ProductMenuView';
import ProductsView from '../../components/ProductsView/ProductsView';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>

      <CarouselAds/>
     
      <div className='miniproduct'>
        <div className='deskproductview'>
           <ProductsView/>
        </div>
        <div className='mobproductview'>
          <ProductMenuView/>
       </div>
      </div>

      <div className='bigproduct'>
        <div className='deskbigproductview'>
          <BigProductsView/>
        </div>
        <div className='mobbigproductview'>
          <BigProductMob/>
        </div>
      </div>

    </div>
  )
}

export default Home