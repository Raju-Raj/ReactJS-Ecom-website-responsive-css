import React from 'react';
import './BigProductMobCard.css';
import {AiOutlineArrowRight} from 'react-icons/ai';

const BigProductMobCard = ({title,icon,img1,img2,img3,img4,img5,name1,name2,name3,name4,name5}) => {
  return (
    <div className='bigProductMobCard'>

        <div className='main'>

            <div className='heading'>
                <span className='icon'>{icon}</span>
                <span className='name'>{title}</span>
            </div>

            <div className='body'>
                <div className='item'>
                    <img src={img1} alt=''/>
                    <p>{name1}</p>
                </div>
                <div className='item'>
                    <img src={img2} alt=''/>
                    <p>{name2}</p>
                </div>
                <div className='item'>
                    <img src={img3} alt=''/>
                    <p>{name3}</p>
                </div>
                <div className='item'>
                    <img src={img4} alt=''/>
                    <p>{name4}</p>
                </div>
                <div className='item'>
                    <img src={img5} alt=''/>
                    <p>{name5}</p>
                </div>
                <div className='moreview'>
                    <span className='icon'>
                        <AiOutlineArrowRight/>
                    </span>
                    <span className='name'>
                        View All
                    </span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default BigProductMobCard