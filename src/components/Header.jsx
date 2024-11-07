import React from 'react';
import { RiMenu2Line } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const Header = ({isClick}) => {
  return (
    <>
       <div className="flex rightHead items-center justify-center">
        <RiMenu2Line onClick={isClick} className='menuIcon hidden' size={25} cursor="pointer" /> 
      <h1 className='text-center md:text-[4vw] text-[5vw] font-semibold font-["Poppins", san-serif]'>React Buttons Library</h1>
        <a href="https://github.com/MrKhayam/React_Buttons" target='blank'><FaGithub className='gitIcon hidden' size={30} cursor="pointer" /></a>
      </div>
    </>
  );
}

export default Header;
