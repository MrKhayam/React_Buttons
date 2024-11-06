import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import RightCon from '../components/RightCon';
import { BrowserRouter as Router } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FaAngleRight } from 'react-icons/fa';


const Home = () => {
  const [isNav, setIsNav] = useState(false);

  const handleClick = () => {
      setIsNav(true);
  }
  const handleCross = () => {
      setIsNav(false);
  }





  const [isClicked, setIsClicked] = useState(true);
    const [btnTxt, setBtnTxt] = useState('');
    const [btnStylehook, setBtnStylehook] = useState('');

    const handleClick1 = (btnType,btnStyle) => {
        setIsClicked(true);
        setBtnTxt(btnType);
        setBtnStylehook(btnStyle)
    }
    const handleCross1 = () => {
        setIsClicked(false);
    }
  
  
  
  
  return (
    <>
        <Router>


        <div className="flex w-full h-screen gap-1">
        <div onClick={handleCross1} className={`${isClicked ? 'flex' : 'hidden'} w-full absolute h-screen transition-all duration-500 bg-[#0000006e] z-50 backdrop-blur-md`}>
        </div>
            <div className={`transition-all z-[55] duration-500 ${isClicked ? 'translate-x-0' : 'translate-x-[100%]'} absolute p-5 h-full md:w-1/2 top-0 right-0 bg-[#272A39] w-full`}>
            <IoClose onClick={handleCross1} className='absolute top-5 right-4' size={30} color='white' cursor="pointer" />

            <h1 className='text-white text-2xl font-semibold mt-10'>Import</h1>
            <div className="codeBlock w-full mt-4 min-h-20 flex flex-col rounded-md bg-[#0e1622]">
              <div className="flex justify-between w-full h-auto items-center">
                <div className="w-20 h-7 rounded-br-md rounded-tl-md flex items-center justify-center bg-[#2c3c53]">
                  <p className="text-sm text-[#9064ff]">Terminal</p>
                </div>
                <HiOutlineClipboardList
                  cursor="pointer"
                  size={20}
                  color='white'
                  className="mr-1 mt-1"
                />
              </div>
              <div className="code mt-2 px-3 w-full h-auto flex gap-3 items-center">
                <FaAngleRight color="#9064ff" />
                <p className="p-3 md:p-0 text-white">{`import { ${btnStylehook} } from 'react-buttons-library' `}</p>
              </div>
            </div>
            <h1 className='text-white text-2xl font-semibold mt-10'>Usage</h1>
            <div className="codeBlock w-full mt-4 min-h-20 flex flex-col rounded-md bg-[#0e1622]">
              <div className="flex justify-between w-full h-auto items-center">
                <div className="w-20 h-7 rounded-br-md rounded-tl-md flex items-center justify-center bg-[#2c3c53]">
                  <p className="text-sm text-[#9064ff]">Jsx</p>
                </div>
                <HiOutlineClipboardList
                  cursor="pointer"
                  size={20}
                  color='white'
                  className="mr-1 mt-1"
                />
              </div>
              <div className="code mt-2 px-3 w-full h-auto flex gap-3 items-center">
                <FaAngleRight color="#9064ff" />
                <p className="p-3 md:p-0 text-white">{`<${btnStylehook} label='Click Me' btnClass='${btnTxt}' onClick={() => alert('Clicked')} />`}</p>
              </div>
            </div>
            </div>
          <Sidebar isCross = {handleCross} isNav={isNav} />
          <RightCon isClick = {handleClick} handleClick1={handleClick1
          } />
        </div>
        </Router>
    </>
  );
}

export default Home;
