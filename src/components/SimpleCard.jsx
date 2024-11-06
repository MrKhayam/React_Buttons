import React, { useState } from 'react';
import { BtnSimple } from 'react-buttons-library'


const SimpleCard = ({btnType, handleClick1}) => {
  const [btnStyle, setBtnStyle] = useState('BtnSimple');
  return (
    <>
      <div className="w-52 h-52 bg-[#07070763] rounded-xl flex justify-center items-center">
      <BtnSimple label='Show Code' btnClass={btnType} onClick={()=>handleClick1(btnType,btnStyle)} />
      </div>
    </>
  );
}

export default SimpleCard;
