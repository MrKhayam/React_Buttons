import React from 'react';
import { BtnSimple } from 'react-buttons-library'


const SimpleCard = ({btnType, handleClick1}) => {
  return (
    <>
      <div className="w-52 h-52 bg-[#07070763] rounded-xl flex justify-center items-center">
      <BtnSimple label='Show Code' btnClass={btnType} onClick={()=>handleClick1(btnType)} />
      </div>
    </>
  );
}

export default SimpleCard;
