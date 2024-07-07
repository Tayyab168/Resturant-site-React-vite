import React from "react";
// import {logo} from "../assets/images/logo.png"
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <div className="flex flex-wrap justify-between items-center h-auto sm:h-28 sticky top-0 z-50 navbar" data-aos="fade-down">
      <div>
        <img className="h-20 w-22 mt-2 ml-24" src={logo} alt="logo" />
      </div>
      <ul className="flex flex-wrap gap-6">
        <li>
          <a className="link" href="#home">Home</a>
        </li>
        <li>
          <a className="link" href="#about">About</a>
        </li>
        <li>
          <a className="link" href="#menu">Menu</a>
        </li>
        <li>
          <a className="link" href="#product">Product</a>
        </li>
        <li>
          <a className="link" href="#REVIEW">Review</a>
        </li>
        <li>
          <a className="link" href="#Contact">Contact</a>
        </li>
        <li>
          <a className="link" href="#blogs">Blogs</a>
        </li>
      </ul>
      <div className="flex flex-wrap gap-6 mr-10 icons">
        <div>
          <i className="fa-solid fa-magnifying-glass text-[25px] cursor-pointer hover:text-yellow-300"></i>
        </div>
        <div>
          <i className="fa-solid fa-cart-shopping text-[25px] hover:text-yellow-300"></i>
        </div>
        <div>
          <i className="fa-solid fa-bars text-[25px]" id="menu-btn"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
