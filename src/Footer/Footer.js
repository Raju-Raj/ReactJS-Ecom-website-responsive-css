import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import {
  FaHandsHelping,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-foot">
        <div className="l-side-foot">
          <div className="top-items">
            <span className="icon">
              <FaHandsHelping />
            </span>
            <h3>Happy to help you!</h3>
          </div>

         
          <div className="bottom-items">
            <div className="details">
              <div className="phnum">
                <span className="icon">
                  <AiOutlinePhone />
                </span>
                <span className="name">+91 876-645-2828</span>
              </div>
              <div className="email">
                <span className="icon">
                  <AiOutlineMail />
                </span>
                <span className="name">support@nextclick.com</span>
              </div>
            </div>

            <div className="socialMedia">
              <h4>Keep in touch:</h4>
              <div className="icons">
                <AiFillFacebook />
                <FaTwitterSquare />
                <AiFillLinkedin />
                <FaYoutubeSquare />
              </div>
            </div>
          </div>
        </div>

        <div className="r-side-foot">
          <div className="top-items">
            <ul className="item">
              <h3>DIRECTORY</h3>
              <li>Agriculture</li>
              <li>Apparel Manufacturers</li>
              <li>Health & Beauty</li>
              <li>Home Supplies</li>
              <li>Industrial Machinery</li>
            </ul>

            <ul className="item">
              <h3>BUYERS</h3>
              <li>Post Buy Requirements</li>
              <li>Search Products & Suppliers</li>
              <li>Join Free</li>
            </ul>

            <ul className="item">
              <h3>SELLERS</h3>
              <li>Buyers Directory</li>
              <li>List your Company Free</li>
              <li>Create your Catalog</li>
              <li>B2b Portal in India</li>
              <li>Advertise with us</li>
            </ul>

            <ul className="item">
              <h3>QUICK LINKS</h3>
              <li>Help & FAQs</li>
              <li>Career with us</li>
              <li>Contact Us</li>
              <li>Give your Feedback</li>
              <li>Submit a Complaint</li>
            </ul>
          </div>
          
          <div className="bottom-items">
            <p>About Us</p>
            <p>Private Policy</p>
            <p>Refund Policy</p>
            <p>Terms Of Use</p>
          </div>
        </div>
      </div>

      <div className="bottom-foot">
        <p>Copyright © 2022 <span>NextClick.com.</span> All rights reserved.</p>
      </div>

    </div>
  );
};

export default Footer;
