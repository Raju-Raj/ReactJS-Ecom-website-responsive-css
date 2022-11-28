import React from 'react';
import './ProductMenuView.css';
import { BsFillCameraFill } from 'react-icons/bs'
import { FaTshirt } from 'react-icons/fa'
import { GiAmpleDress, GiDeliveryDrone, GiGamepad, GiWashingMachine } from 'react-icons/gi'
import { HiOfficeBuilding } from 'react-icons/hi'
import { IoMdOptions } from 'react-icons/io'

const ProductMenuView = () => {
  return (
    <div className='productMenu'>

        <div className='t-productMenu'>
            <div className='item'>
                <span className='icon all-cat'><IoMdOptions/></span>
                <span className='name'>All Categories</span>
            </div>
            <div className='item'>
                <span className='icon'><GiWashingMachine/></span>
                <span className='name'>Electronics</span>
            </div>
            <div className='item'>
                <span className='icon'><FaTshirt/></span>
                <span className='name'>Men's Fashion</span>
            </div>
            <div className='item'>
                <span className='icon'><GiAmpleDress/></span>
                <span className='name'>Women's Fashion</span>
            </div>
        </div>

        <div className='b-productMenu'>
        <div className='item'>
                <span className='icon'><HiOfficeBuilding/></span>
                <span className='name'>Office & security</span>
            </div>
            <div className='item'>
                <span className='icon'><BsFillCameraFill/></span>
                <span className='name'>Camera</span>
            </div>
            <div className='item'>
                <span className='icon'><GiDeliveryDrone/></span>
                <span className='name'>Drone</span>
            </div>
            <div className='item'>
                <span className='icon'><GiGamepad/></span>
                <span className='name'>Game Pad</span>
            </div>
        </div>

    </div>
  )
}

export default ProductMenuView