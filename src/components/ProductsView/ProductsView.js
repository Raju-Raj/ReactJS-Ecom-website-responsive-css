import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsView.css';
import { FaTshirt } from 'react-icons/fa';
import { GiAmpleDress, GiWashingMachine } from 'react-icons/gi';
import { BsFillCameraFill } from 'react-icons/bs';



const ProductsView = () => {
  return (
    <div className='product-view'>
        <div className='t-products'>
        <ProductCard
        title="Electronic's"
        img1="https://www.dial4trade.com/uploaded_files/product_images/electronic-equipments-1848890542324.jpg"
        img2="https://www.dial4trade.com/uploaded_files/product_images/electronic-u-211709954492457.jpg"
        img3="https://www.dial4trade.com/uploaded_files/product_images/led-tv-u-35731126438502554.jpg"
        img4="https://www.dial4trade.com/uploaded_files/product_images/mobile-phones-u-35732026438501239.jpg"
        name1="All Equipment"
        name2="Watchs"
        name3="TV's"
        name4="Mobiles"
        icon={<GiWashingMachine/>}
        />
        <ProductCard 
        title="Men's Fashion"
        img1="https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/mens-clothing.jpg"
        img2="https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/footwear.jpg"
        img3="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/casual-wear/casual-denim-jeans.jpg"
        img4="https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/mens-clothing.jpg"
        name1="t-shirt"
        name2="shoes"
        name3="pants"
        name4="Dresses"
        icon={<FaTshirt/>}
        />
        <ProductCard
        title="Women's Fashion"
        img1="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/ladies-casual-shirts.jpg"
        img2="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/fancy-tops.jpg"
        img3="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/ladies-long-shirts.jpg"
        img4="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/casual-tops.jpg"
        name1="Ladies Casual's"
        name2="Fansy-tops"
        name3="Ladies Shirts"
        name4="Casual Tops"
        icon={<GiAmpleDress/>}
        />
        <ProductCard
        title="Camera's"
        img1="https://www.dial4trade.com/uploaded_files/product_images/1.3mp-bullet-camera-u-1852095458843.jpg"
        img2="https://www.dial4trade.com/uploaded_files/product_images/spy-hanger-camera-u-35735376438500346.jpg"
        img3="https://www.dial4trade.com/uploaded_files/product_images/spy-button-camera-u-35735366438500259.jpg"
        img4="https://www.dial4trade.com/uploaded_files/product_images/camera-spectacles-u-35735156438505614.jpg"
        name1="CC tv HD"
        name2="Spy Anger CC"
        name3="Dolly Camera"
        name4="Camera Specs"
        icon={<BsFillCameraFill/>}
        />
        </div>
        <div className='m-products'>
        <ProductCard
        title="Camera's"
        img1="https://www.dial4trade.com/uploaded_files/product_images/1.3mp-bullet-camera-u-1852095458843.jpg"
        img2="https://www.dial4trade.com/uploaded_files/product_images/spy-hanger-camera-u-35735376438500346.jpg"
        img3="https://www.dial4trade.com/uploaded_files/product_images/spy-button-camera-u-35735366438500259.jpg"
        img4="https://www.dial4trade.com/uploaded_files/product_images/camera-spectacles-u-35735156438505614.jpg"
        name1="CC tv HD"
        name2="Spy Anger CC"
        name3="Dolly Camera"
        name4="Camera Specs"
        icon={<BsFillCameraFill/>}
        />
      
        <ProductCard
        title="Women's Fashion"
        img1="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/ladies-casual-shirts.jpg"
        img2="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/fancy-tops.jpg"
        img3="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/ladies-long-shirts.jpg"
        img4="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/casual-tops.jpg"
        name1="Ladies Casual's"
        name2="Fansy-tops"
        name3="Ladies Shirts"
        name4="Casual Tops"
        icon={<GiAmpleDress/>}
        />
         <ProductCard
        title="Electronic's"
        img1="https://www.dial4trade.com/uploaded_files/product_images/electronic-equipments-1848890542324.jpg"
        img2="https://www.dial4trade.com/uploaded_files/product_images/electronic-u-211709954492457.jpg"
        img3="https://www.dial4trade.com/uploaded_files/product_images/led-tv-u-35731126438502554.jpg"
        img4="https://www.dial4trade.com/uploaded_files/product_images/mobile-phones-u-35732026438501239.jpg"
        name1="All Equipment"
        name2="Watchs"
        name3="TV's"
        name4="Mobiles"
        icon={<GiWashingMachine/>}
        />
          <ProductCard 
        title="Men's Fashion"
        img1="https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/mens-clothing.jpg"
        img2="https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/footwear.jpg"
        img3="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/casual-wear/casual-denim-jeans.jpg"
        img4="https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/mens-clothing.jpg"
        name1="t-shirt"
        name2="shoes"
        name3="pants"
        name4="Dresses"
        icon={<FaTshirt/>}
        />
        
        </div>

        <div className='b-products'>
        <ProductCard
        title="Electronic's"
        img1="https://www.dial4trade.com/uploaded_files/product_images/electronic-equipments-1848890542324.jpg"
        img2="https://www.dial4trade.com/uploaded_files/product_images/electronic-u-211709954492457.jpg"
        img3="https://www.dial4trade.com/uploaded_files/product_images/led-tv-u-35731126438502554.jpg"
        img4="https://www.dial4trade.com/uploaded_files/product_images/mobile-phones-u-35732026438501239.jpg"
        name1="All Equipment"
        name2="Watchs"
        name3="TV's"
        name4="Mobiles"
        icon={<GiWashingMachine/>}
        />
        <ProductCard 
        title="Men's Fashion"
        img1="https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/mens-clothing.jpg"
        img2="https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/footwear.jpg"
        img3="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/casual-wear/casual-denim-jeans.jpg"
        img4="https://www.dial4trade.com/staticdt/images/home-v1/apparel-fashion/mens-clothing.jpg"
        name1="t-shirt"
        name2="shoes"
        name3="pants"
        name4="Dresses"
        icon={<FaTshirt/>}
        />
        <ProductCard
        title="Women's Fashion"
        img1="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/ladies-casual-shirts.jpg"
        img2="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/fancy-tops.jpg"
        img3="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/ladies-long-shirts.jpg"
        img4="https://cdn.d4tcdn.com/staticdt/images/catg-imgs/womens-clothing/casual-tops.jpg"
        name1="Ladies Casual's"
        name2="Fansy-tops"
        name3="Ladies Shirts"
        name4="Casual Tops"
        icon={<GiAmpleDress/>}
        />
        <ProductCard
        title="Camera's"
        img1="https://www.dial4trade.com/uploaded_files/product_images/1.3mp-bullet-camera-u-1852095458843.jpg"
        img2="https://www.dial4trade.com/uploaded_files/product_images/spy-hanger-camera-u-35735376438500346.jpg"
        img3="https://www.dial4trade.com/uploaded_files/product_images/spy-button-camera-u-35735366438500259.jpg"
        img4="https://www.dial4trade.com/uploaded_files/product_images/camera-spectacles-u-35735156438505614.jpg"
        name1="CC tv HD"
        name2="Spy Anger CC"
        name3="Dolly Camera"
        name4="Camera Specs"
        icon={<BsFillCameraFill/>}
        />
        </div>
    </div>
  )
}

export default ProductsView