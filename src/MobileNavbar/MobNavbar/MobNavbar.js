import React, { useEffect, useState } from 'react';
import './MobNavbar.css';
import LogoImg from '../../images/logo.png';
import {BsFillCameraFill, BsPerson, BsSpeakerFill} from 'react-icons/bs';
import {HiDeviceMobile, HiOfficeBuilding, HiOutlineMenuAlt1} from 'react-icons/hi';
import {BiSearchAlt} from 'react-icons/bi';
import {BsFillMicFill,BsPersonCircle} from 'react-icons/bs';
import {FaEdit,FaClipboardList, FaTshirt} from 'react-icons/fa';
import {AiOutlineFileSearch} from 'react-icons/ai';
import {MdOutlineScreenSearchDesktop} from 'react-icons/md';
import {CgMoreO} from 'react-icons/cg';
import { GiAmpleDress, GiDeliveryDrone, GiGamepad, GiWashingMachine } from 'react-icons/gi';
import { IoIosArrowBack, IoMdHelpCircle } from 'react-icons/io';
import {FcAdvertising } from 'react-icons/fc';




const MobNavbar = () => {
    const [menubar,setMenubar] = useState(false)

    const [stickyNav,setStickyNav] = useState("")

    const stickNavbar = () => {
        let windowHeight = window.scrollY;
        windowHeight > 100 ? setStickyNav("sticky-nav") : setStickyNav("");
    }

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    }, []);

  return (
    <div className={`mob-navbar ${stickyNav}`}>

        <div className='t-mobnav'>

             <div className='t-left'>
                <div className='icon' onClick={()=>setMenubar(!menubar)}>
                    <HiOutlineMenuAlt1/>
                </div>
            
                    <img src={LogoImg} alt='' className='logo'/>
               
             </div>

            <div className='t-right'>
                <BsPerson className='icon'/>
            </div>

        </div>

        <div className='b-mobnav'>
        <BiSearchAlt className='searchicon'/>
        <input type='text' placeholder="Enter Product or Services to search"/>
        <BsFillMicFill className='micicon'/>
        </div>


        {/* responsive menu bar */}
        <div className={menubar?'mob-navmenu active':'mob-navmenu'}>

            <div className='menus'>
                <div className='close-btn' onClick={()=>setMenubar(!menubar)}>
                    <IoIosArrowBack className='icon'/>
                </div>

                <div className='menu-one'>

                    <div className='left'>
                        <h4>Welcome User</h4>
                        <div className='btn'>
                            <button>Sign In</button>
                            <button>Join Free</button>
                        </div>
                    </div>

                    <div className='right'>
                        <BsPersonCircle className='icon'/>
                    </div>
                </div>

                <hr/>

                <div className='menu-two'>
                    <ul className='items'>
                        <li>
                            <span>
                                <FaEdit/>
                            </span>
                            <span>Post Your Req</span>
                        </li>
                        <li>
                            <span>
                                <AiOutlineFileSearch/>
                            </span>
                            <span>Browser Categories</span>
                        </li>
                        <li>
                            <span>
                                <FaClipboardList/>
                            </span>
                            <span>List Your Company</span>
                        </li>
                        <li>
                            <span>
                                <MdOutlineScreenSearchDesktop/>
                            </span>
                            <span>Search Buyers</span>
                        </li>
                    </ul>
                </div>

                <div className='menu-three'>
                    <ul>
                        <h3>Top Industry</h3>
                        <li>
                        <span className='icon'><GiWashingMachine/></span>
                        <span className='name'>Electronics</span>
                        </li>
                        <li>
                        <span className='icon'><FaTshirt/></span>
                        <span className='name'>Men's Fashion</span>
                        </li>
                        <li>
                        <span className='icon'><GiAmpleDress/></span>
                        <span className='name'>Women's Fashion</span>
                        </li>
                        <li>
                        <span className='icon'><HiOfficeBuilding/></span>
                        <span className='name'>Office & Security</span>
                        </li>
                        <li>
                        <span className='icon'><BsFillCameraFill/></span>
                        <span className='name'>Camera</span>
                        </li>
                        <li>
                        <span className='icon'><GiDeliveryDrone/></span>
                        <span className='name'>Drone</span>
                        </li>
                        <li>
                        <span className='icon'><GiGamepad/></span>
                        <span className='name'>GamePad</span>
                        </li>
                        <li>
                        <span className='icon'><HiDeviceMobile/></span>
                        <span className='name'>Mobile</span>
                        </li>
                        <li>
                        <span className='icon'><BsSpeakerFill/></span>
                        <span className='name'>Speaker</span>
                        </li>
                        <li>
                        <span className='icon'><CgMoreO/></span>
                        <span className='name'>All Categories</span>
                        </li>
                    </ul>
                    <ul>
                        <h3>Help</h3>
                        <li>
                        <span className='icon'><FcAdvertising/></span>
                        <span className='name'>Advertise with us</span>
                        </li>
                        <li>
                        <span className='icon'><IoMdHelpCircle/></span>
                        <span className='name'>Need Any Help</span>
                        </li>
                    </ul>
                </div>

            </div>

        </div>


    </div>
  )
}

export default MobNavbar