import React, { useState } from 'react';
import { BtnRounded } from 'react-buttons-library'


const RoundedCard = ({btnType, handleClick1}) => {
    const [btnStyle, setBtnStyle] = useState('BtnRounded');
  return (
    <>
      <div className="w-52 h-52 bg-[#07070763] rounded-xl flex justify-center items-center">
      <BtnRounded label='Show Code' btnClass={btnType} onClick={()=>handleClick1(btnType,btnStyle)} />
      </div>
    </>
  );
}

export default RoundedCard;
