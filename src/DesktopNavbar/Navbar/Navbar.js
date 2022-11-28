import React, { useEffect, useState } from 'react';
import './Navbar.css';
import LogoImg from '../../images/logo.png';
import {HiOutlineMenuAlt1,HiOfficeBuilding,HiDeviceMobile} from 'react-icons/hi';
import {BiSearchAlt} from 'react-icons/bi';
import {BsPerson,BsQuestionCircle} from 'react-icons/bs';
import {CgSoftwareDownload} from 'react-icons/cg';
import {RiArrowDropRightLine} from 'react-icons/ri';
import {GiAmpleDress,GiWashingMachine,GiDeliveryDrone,GiGamepad} from 'react-icons/gi';
import {FaTshirt} from 'react-icons/fa';
import {BsFillCameraFill,BsSpeakerFill} from 'react-icons/bs';

const Navbar = () => {
    const [stickyNav,setStickyNav] = useState("")

    const stickNavbar = () => {
        let windowHeight = window.scrollY;
        windowHeight > 280 ? setStickyNav("sticky-nav") : setStickyNav("");
    }

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    }, []);
  return (
    <div className={`navbar ${stickyNav}`}>

        <div className='nav-logo'>
            <div className='menubtn'>

            <div className='menuicon'>
                <HiOutlineMenuAlt1/>
            </div>

            <div className='menu-items'>

                <div className='items'>
                <li className='item'>
                    <span className='name'><GiWashingMachine/>Electronics</span>
                    <span className='icon'><RiArrowDropRightLine/></span>
                    
                    <div className='sub-items'>
                        <div className='t-subitems'>
                            <ul>
                                <h3>Accessories</h3>
                                <li>Samsung TV</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                                <li>Headphone</li>
                                <li>Camera</li>
                            </ul>
                            <ul>
                                <h3>Bottoms</h3>
                                <li>Speaker</li>
                                <li>Portable</li>
                                <li>Google Glass</li>
                                <li>Drone</li>
                                <li>Bluetooth</li>
                            </ul>
                            <ul>
                                <h3>Bottoms</h3>
                                <li>Watch</li>
                                <li>Spaeker</li>
                                <li>Projector</li>
                                <li>Gamepad</li>
                                <li>3d Glass</li>
                            </ul>
                        </div>
                        <div className='b-subitems'>
                        <ul>
                                <h3>Tops</h3>
                                <li>Samsung TV</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                                <li>Headphone</li>
                                <li>Camera</li>
                            </ul>
                            <ul>
                                <h3>Hot Categories</h3>
                                <li>Speaker</li>
                                <li>Portable</li>
                                <li>Google Glass</li>
                                <li>Drone</li>
                                <li>Bluetooth</li>
                            </ul>
                            <ul>
                                <h3>OutWear</h3>
                                <li>Watch</li>
                                <li>Spaeker</li>
                                <li>Projector</li>
                                <li>Gamepad</li>
                                <li>3d Glass</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className='item'>
                    <span className='name'><FaTshirt/>Men's Fashion</span><span className='icon'><RiArrowDropRightLine/></span>

                    <div className='sub-items'>
                        <div className='t-subitems'>
                            <ul>
                                <h3>Accessories</h3>
                                <li>Samsung TV</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                                <li>Headphone</li>
                                <li>Camera</li>
                            </ul>
                            <ul>
                                <h3>Bottoms</h3>
                                <li>Speaker</li>
                                <li>Portable</li>
                                <li>Google Glass</li>
                                <li>Drone</li>
                                <li>Bluetooth</li>
                            </ul>
                            <ul>
                                <h3>Bottoms</h3>
                                <li>Watch</li>
                                <li>Spaeker</li>
                                <li>Projector</li>
                                <li>Gamepad</li>
                                <li>3d Glass</li>
                            </ul>
                        </div>
                        <div className='b-subitems'>
                        <ul>
                                <h3>Tops</h3>
                                <li>Samsung TV</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                                <li>Headphone</li>
                                <li>Camera</li>
                            </ul>
                            <ul>
                                <h3>Hot Categories</h3>
                                <li>Speaker</li>
                                <li>Portable</li>
                                <li>Google Glass</li>
                                <li>Drone</li>
                                <li>Bluetooth</li>
                            </ul>
                            <ul>
                                <h3>OutWear</h3>
                                <li>Watch</li>
                                <li>Spaeker</li>
                                <li>Projector</li>
                                <li>Gamepad</li>
                                <li>3d Glass</li>
                            </ul>
                        </div>
                    </div>

                </li>
                <li className='item'>
                    <span className='name'><GiAmpleDress/>Women's Fashion</span><span className='icon'><RiArrowDropRightLine/></span>

                    <div className='sub-items'>
                        <div className='t-subitems'>
                            <ul>
                                <h3>Accessories</h3>
                                <li>Samsung TV</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                                <li>Headphone</li>
                                <li>Camera</li>
                            </ul>
                            <ul>
                                <h3>Bottoms</h3>
                                <li>Speaker</li>
                                <li>Portable</li>
                                <li>Google Glass</li>
                                <li>Drone</li>
                                <li>Bluetooth</li>
                            </ul>
                            <ul>
                                <h3>Bottoms</h3>
                                <li>Watch</li>
                                <li>Spaeker</li>
                                <li>Projector</li>
                                <li>Gamepad</li>
                                <li>3d Glass</li>
                            </ul>
                        </div>
                        <div className='b-subitems'>
                        <ul>
                                <h3>Tops</h3>
                                <li>Samsung TV</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                                <li>Headphone</li>
                                <li>Camera</li>
                            </ul>
                            <ul>
                                <h3>Hot Categories</h3>
                                <li>Speaker</li>
                                <li>Portable</li>
                                <li>Google Glass</li>
                                <li>Drone</li>
                                <li>Bluetooth</li>
                            </ul>
                            <ul>
                                <h3>OutWear</h3>
                                <li>Watch</li>
                                <li>Spaeker</li>
                                <li>Projector</li>
                                <li>Gamepad</li>
                                <li>3d Glass</li>
                            </ul>
                        </div>
                    </div>

                </li>
                <li className='item'>
                    <span className='name'><HiOfficeBuilding/>Office & Security</span><span className='icon'><RiArrowDropRightLine/></span>

                    <div className='sub-items'>
                        <div className='t-subitems'>
                            <ul>
                                <h3>Accessories</h3>
                                <li>Samsung TV</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                                <li>Headphone</li>
                                <li>Camera</li>
                            </ul>
                            <ul>
                                <h3>Bottoms</h3>
                                <li>Speaker</li>
                                <li>Portable</li>
                                <li>Google Glass</li>
                                <li>Drone</li>
                                <li>Bluetooth</li>
                            </ul>
                            <ul>
                                <h3>Bottoms</h3>
                                <li>Watch</li>
                                <li>Spaeker</li>
                                <li>Projector</li>
                                <li>Gamepad</li>
                                <li>3d Glass</li>
                            </ul>
                        </div>
                        <div className='b-subitems'>
                        <ul>
                                <h3>Tops</h3>
                                <li>Samsung TV</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                                <li>Headphone</li>
                                <li>Camera</li>
                            </ul>
                            <ul>
                                <h3>Hot Categories</h3>
                                <li>Speaker</li>
                                <li>Portable</li>
                                <li>Google Glass</li>
                                <li>Drone</li>
                                <li>Bluetooth</li>
                            </ul>
                            <ul>
                                <h3>OutWear</h3>
                                <li>Watch</li>
                                <li>Spaeker</li>
                                <li>Projector</li>
                                <li>Gamepad</li>
                                <li>3d Glass</li>
                            </ul>
                        </div>
                    </div>

                </li>
                <li className='item'>
                    <span className='name'><BsFillCameraFill/>Camera</span><span className='icon'><RiArrowDropRightLine/></span>

                    <div className='sub-items'>
                        <div className='t-subitems'>
                            <ul>
                                <h3>Accessories</h3>
                                <li>Samsung TV</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                                <li>Headphone</li>
                                <li>Camera</li>
                            </ul>
                            <ul>
                                <h3>Bottoms</h3>
                                <li>Speaker</li>
                                <li>Portable</li>
                                <li>Google Glass</li>
                                <li>Drone</li>
                                <li>Bluetooth</li>
                            </ul>
                            <ul>
                                <h3>Bottoms</h3>
                                <li>Watch</li>
                                <li>Spaeker</li>
                                <li>Projector</li>
                                <li>Gamepad</li>
                                <li>3d Glass</li>
                            </ul>
                        </div>
                        <div className='b-subitems'>
                        <ul>
                                <h3>Tops</h3>
                                <li>Samsung TV</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                                <li>Headphone</li>
                                <li>Camera</li>
                            </ul>
                            <ul>
                                <h3>Hot Categories</h3>
                                <li>Speaker</li>
                                <li>Portable</li>
                                <li>Google Glass</li>
                                <li>Drone</li>
                                <li>Bluetooth</li>
                            </ul>
                            <ul>
                                <h3>OutWear</h3>
                                <li>Watch</li>
                                <li>Spaeker</li>
                                <li>Projector</li>
                                <li>Gamepad</li>
                                <li>3d Glass</li>
                            </ul>
                        </div>
                    </div>

                </li>
                <li className='item'>
                    <span className='name'><GiDeliveryDrone/>Drone</span>
                    {/* <span className='icon'><RiArrowDropRightLine/></span> */}
                </li>
                <li className='item'>
                    <span className='name'><GiGamepad/>GamePad</span>
                    {/* <span className='icon'><RiArrowDropRightLine/></span> */}
                </li>
                <li className='item'>
                    <span className='name'><HiDeviceMobile/>Mobile</span>
                    {/* <span className='icon'><RiArrowDropRightLine/></span> */}
                </li>
                <li className='item'>
                    <span className='name'><BsSpeakerFill/>Speaker</span>
                    {/* <span className='icon'><RiArrowDropRightLine/></span> */}
                </li>
                </div>

                <div className='all-cat'><span className='name'>All Categories</span><span className='icon'><RiArrowDropRightLine/></span></div>

            </div>


            </div>
         <img src={LogoImg} alt='' className='logo'/>
        </div>





        <div className='nav-search'>
            <select>
                <option>Product/Services</option>
                <option>Buyers</option>
            </select>
            <input type='text' placeholder="Enter Product or Services to search"/>
            <button><span className='icon'><BiSearchAlt/></span><span>Search</span></button>
        </div>


        <div className='nav-menu'>
            <div className='login'>
                <span><BsPerson/></span>
                <span>Sign In</span>
            </div>
            <div className='downloadapp'>
                <span ><CgSoftwareDownload/></span>
                <span>Download App</span>
            </div>
            <div className='help'>
                <span ><BsQuestionCircle/></span>
                <span>Help</span>
            </div>
            <div className='btn'>
            <button>Post Buy Requirement</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar