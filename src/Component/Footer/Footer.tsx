import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-screen px-6 py-6 ">
          <div>
            <div className="leading-10 lg:flex justify-around lg:px-[25rem]">
              <Link to="/" className="flex justify-center text-gray-100 font-semibold lg:text-[1.2rem] cursor-pointer hover:text-[#8750f7]">  Home</Link>
              <Link to="/about" className="flex justify-center text-gray-100 font-semibold lg:text-[1.2rem] cursor-pointer hover:text-[#8750f7]">  About me</Link>
              <Link to="/resume" className="flex justify-center text-gray-100 font-semibold lg:text-[1.2rem] cursor-pointer hover:text-[#8750f7]">  Resume</Link>
              <Link to="/contactUs" className="flex justify-center text-gray-100 font-semibold lg:text-[1.2rem] cursor-pointer hover:text-[#8750f7]">  Contact Us</Link>
            </div>
            <div className="flex justify-center text-[#8750f7] py-5 lg:text-[1.2rem]"> © 2024 All Rights Reserved by Parth Dave</div>
          </div>
          
      </div>
    </>
  );
}

export default Footer;