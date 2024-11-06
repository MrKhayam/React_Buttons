import React, { useState } from 'react';
import SimpleCard from './SimpleCard';

const SimpleButtons = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [btnTxt, setBtnTxt] = useState('');

    const handleClick = (btnType) => {
        setIsClicked(true);
        setBtnTxt(btnType);
    }
    const handleCross = () => {
        setIsClicked(false);
    }
  return (
    <>
      <div className="w-full h-full md:p-4 py-4">
      <h1 className="text-[#9064ff] text-xl font-semibold md:mt-0 mt-3 ">
            Simple Buttons
          </h1>
         <div className="w-full h-auto flex flex-wrap gap-5 justify-center
          cards mt-10">
            <SimpleCard handleClick={handleClick} btnType='primary' />
            <SimpleCard handleClick={handleClick} btnType='info' />
            <SimpleCard handleClick={handleClick} btnType='danger' />
            <SimpleCard handleClick={handleClick} btnType='btnWht' />
            <SimpleCard handleClick={handleClick} btnType='btnBlk' />
            <SimpleCard handleClick={handleClick} btnType='btnSmp1' />
            <SimpleCard handleClick={handleClick} btnType='btnSmp2' />
            <SimpleCard handleClick={handleClick} btnType='btnSmp3' />
            <SimpleCard handleClick={handleClick} btnType='btnSmp4' />
            <SimpleCard handleClick={handleClick} btnType='btnSmp5' />
            <SimpleCard handleClick={handleClick} btnType='btnSmp6' />
            <SimpleCard handleClick={handleClick} btnType='btnSmp7' />
            <SimpleCard handleClick={handleClick} btnType='btnSmp8' />
            <SimpleCard handleClick={handleClick} btnType='btnSmp9' />
            <SimpleCard handleClick={handleClick} btnType='btnSmp10' />
         </div>

      </div>
    </>
  );
}

export default SimpleButtons;
