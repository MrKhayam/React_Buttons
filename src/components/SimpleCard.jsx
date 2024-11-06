import React from 'react';
import { BtnSimple } from 'react-buttons-library'


const SimpleCard = ({btnType, handleClick}) => {
  return (
    <>
      <div className="w-52 h-52 bg-[#07070763] rounded-xl flex justify-center items-center">
      <BtnSimple label='Click Me' btnClass={btnType} onClick={()=>handleClick(btnType)} />
      </div>
    </>
  );
}

export default SimpleCard;
