import React from 'react';
import './BigProductCard.css';

const BigProductCard = () => {
  return (
    <div className='bigproductcard'>

        <div className='heading'>
            <h3>Fashions & Apperal</h3>
        </div>

        <div className='main'>

             <div className='l-bigproduct'>
                <img src="https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/apparel-fashion.jpg" alt=""/>
             </div>
             
              <div className='r-bigproduct'>

                <div className='top-bp'>
                    <div className='item'>
                        <img src='https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/womens-clothing.jpg' alt=''/>
                        <ul>
                            <h4>Womens Clothing</h4>
                            <li>Tops</li>
                            <li>Ladies Jeans</li>
                            <li>Salwar Suits</li>
                            <li>Ladies Gown</li>
                        </ul>
                    </div>
                    <div className='item'>
                    <img src='	https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion//mens-clothing.jpg' alt=''/>
                        <ul>
                            <h4>Mens Clothing</h4>
                            <li>Mens Tshirts</li>
                            <li>Mens Jeans</li>
                            <li>Mens Trousers</li>
                            <li>Ladies Gown</li>
                        </ul>
                    </div>
                    <div className='item'>
                    <img src='https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/kids-clothing.jpg' alt=''/>
                        <ul>
                            <h4>Kids Clothing & Dresses</h4>
                            <li>Kids Jeans</li>
                            <li>Kids Tops</li>
                            <li>Kids Romper</li>
                            <li>School Uniforms</li>
                        </ul>
                    </div>
                </div>

                <div className='bottom-bp'>
                <div className='item'>
                    <img src='https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/casual-wear.jpg' alt=''/>
                        <ul>
                            <h4>Casual Wear</h4>
                            <li>Casual Shirts</li>
                            <li>Jeans</li>
                            <li>Tshirt</li>
                            <li>Trousers</li>
                        </ul>
                    </div>
                    <div className='item'>
                    <img src='https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/saree.jpg' alt=''/>
                        <ul>
                            <h4>Saree & Lehenga</h4>
                            <li>Lehenga</li>
                            <li>Designers Sarees</li>
                            <li>Cotton Sarees</li>
                            <li>Silk Sarees</li>
                        </ul>
                    </div>
                    <div className='item'>
                    <img src='https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/scarves-stoles.jpg' alt=''/>
                        <ul>
                            <h4>Scraves & Stoles</h4>
                            <li>Silk Scraves</li>
                            <li>Viscos Stoles</li>
                            <li>Designer Scraves</li>
                            <li>Cotton Scraves</li>
                        </ul>
                    </div>
                </div>

              </div>

        </div>

    </div>
  )
}

export default BigProductCard