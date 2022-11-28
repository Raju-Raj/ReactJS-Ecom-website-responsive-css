import React from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';
import './ProductCard.css';

const ProductCard = ({title,img1,img2,img3,img4,name1,name2,name3,name4,icon}) => {
  return (
    <div>
    <div className='product-card'>
        <div className='heading'>
            <div className='icon'>{icon}</div>
            <h4 className='title'>{title}</h4>
        </div>
        <div className='body'>
            <div className='t-body'>
            <div className='img-one'>
                <img src={img1} alt=""/>
                <p>{name1}</p>
            </div>
            <div className='img-two'>
               <img src={img2} alt=""/>
                <p>{name2}</p>
            </div>
            </div>

           <div className='b-body'>
           <div className='img-one'>
               <img src={img3} alt=""/>
                <p>{name3}</p>
            </div>
            <div className='img-two'>
                <img src={img4} alt=""/>
                <p>{name4}</p>
            </div>
           </div>

        </div>
        <div className='foot'>
            <span className='name'>View All</span>
            <span className='icon'><RiArrowDropRightLine/></span>
        </div>
    </div>
    </div>
  )
}

export default ProductCard