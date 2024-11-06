import React, { useState } from 'react';
import { BtnOutline } from 'react-buttons-library'


const OutlineCard = ({btnType, handleClick1}) => {
    const [btnStyle, setBtnStyle] = useState('BtnOutline');
  return (
    <>
      <div className="w-52 h-52 bg-[#07070763] rounded-xl flex justify-center items-center">
      <BtnOutline className="text-white" label='Show Code' btnClass={btnType} onClick={()=>handleClick1(btnType,btnStyle)} />
      </div>
    </>
  );
}

export default OutlineCard;
