import React from 'react';
import BigProductCard from '../BigProductCard/BigProductCard';
import './BigProductsView.css';

const BigProductsView = () => {
  return (
    <div className='bigproductsview'>
        <BigProductCard/>
        <br/>
        <BigProductCard/>
    </div>
  )
}

export default BigProductsView