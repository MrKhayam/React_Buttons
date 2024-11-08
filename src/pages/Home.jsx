import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import RightCon from "../components/RightCon";
import { BrowserRouter as Router } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa";
import toast from "react-hot-toast";

const Home = () => {

  const copyText = (toCopy) => {
    window.navigator.clipboard.writeText(document.querySelector(toCopy).innerText);
    toast.success("Code Copied Successfully.");
  }





  const [background, setBackground] = useState("#ffffff");
  const [color, setColor] = useState("#000000");
  const [borderRadiusVal, setBorderRadiusVal] = useState(0);
  const [borderVal, setBorderVal] = useState("#00000");
  const [paddingX, setPaddingX] = useState(0);
  const [paddingY, setPaddingY] = useState(0);
  const [textSize, setTextSize] = useState(15);
  const [borderSize, setBorderSize] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  
  
  
  
  const [isNav, setIsNav] = useState(false);

  const handleClick = () => {
    setIsNav(true);
  };
  const handleCross = () => {
    setIsNav(false);
  };

  const [isGenerate, setIsGenerate] = useState(false);

  const handleGenerate = (background, color, borderRadiusVal, borderVal, paddingX,paddingY,textSize, borderSize, isToggled ) => {
    setIsGenerate(true);
    setBackground(background);
    setColor(color);
    setBorderRadiusVal(borderRadiusVal);
    setBorderVal(borderVal);
    setPaddingX(paddingX);
    setPaddingY(paddingY);
    setTextSize(textSize);
    setBorderSize(borderSize);
    setIsToggled(isToggled);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [btnTxt, setBtnTxt] = useState("");
  const [btnStylehook, setBtnStylehook] = useState("");

  const handleClick1 = (btnType, btnStyle) => {
    setIsClicked(true);
    setBtnTxt(btnType);
    setBtnStylehook(btnStyle);
  };
  const handleCross1 = () => {
    setIsClicked(false);
    setIsGenerate(false);
  };

  return (
    <>
      <Router>
        <div className="flex w-full h-screen gap-1">
          <div
            onClick={handleCross1}
            className={`${
              isClicked ? "flex" : "hidden"
            } w-full absolute h-screen transition-all duration-500 bg-[#0000006e] z-50 backdrop-blur-md`}
          ></div>
          <div
            className={`transition-all z-[55] duration-500 ${
              isClicked ? "translate-x-0" : "translate-x-[100%]"
            } absolute p-5 h-full md:w-1/2 top-0 right-0 bg-[#272A39] w-full`}
          >
            <IoClose
              onClick={handleCross1}
              className="absolute top-5 right-4"
              size={30}
              color="white"
              cursor="pointer"
            />

            <h1 className="text-white text-2xl font-semibold mt-10">Import</h1>
            <div className="codeBlock w-full mt-4 min-h-20 flex flex-col rounded-md bg-[#0e1622]">
              <div className="flex justify-between w-full h-auto items-center">
                <div className="w-20 h-7 rounded-br-md rounded-tl-md flex items-center justify-center bg-[#2c3c53]">
                  <p className="text-sm text-[#9064ff]">Terminal</p>
                </div>
                <HiOutlineClipboardList
                  cursor="pointer"
                  size={20}
                  color="white"
                  className="mr-1 mt-1"
                  onClick={() => {copyText(".copy1")}}
                />
              </div>
              <div className="code mt-2 px-3 w-full h-auto flex gap-3 items-center">
                <FaAngleRight color="#9064ff" />
                <p className="p-3 md:p-0 text-white copy1">{`import { ${btnStylehook} } from 'react-buttons-library' `}</p>
              </div>
            </div>
            <h1 className="text-white text-2xl font-semibold mt-10">Usage</h1>
            <div className="codeBlock w-full mt-4 min-h-20 flex flex-col rounded-md bg-[#0e1622]">
              <div className="flex justify-between w-full h-auto items-center">
                <div className="w-20 h-7 rounded-br-md rounded-tl-md flex items-center justify-center bg-[#2c3c53]">
                  <p className="text-sm text-[#9064ff]">Jsx</p>
                </div>
                <HiOutlineClipboardList
                  cursor="pointer"
                  size={20}
                  color="white"
                  className="mr-1 mt-1"
                  onClick={() => {copyText(".copy2")}}
                />
              </div>
              <div className="code mt-2 px-3 w-full h-auto flex gap-3 items-center">
                <FaAngleRight color="#9064ff" />
                <p className="p-3 md:p-0 text-white copy2">{`<${btnStylehook} label='Click Me' btnClass='${btnTxt}' onClick={() => alert('Clicked')} />`}</p>
              </div>
            </div>
          </div>












          <div
            onClick={handleCross1}
            className={`${
              isGenerate ? "flex" : "hidden"
            } w-full absolute h-screen transition-all duration-500 bg-[#0000006e] z-50 backdrop-blur-md`}
          ></div>
          <div
            className={`transition-all z-[55] duration-500 ${
              isGenerate ? "translate-x-0" : "translate-x-[100%]"
            } absolute p-5 h-full md:w-1/2 top-0 right-0 bg-[#272A39] w-full`}
          >
            <IoClose
              onClick={handleCross1}
              className="absolute top-5 right-4"
              size={30}
              color="white"
              cursor="pointer"
            />

            <h1 className="text-white text-2xl font-semibold mt-10">React Code</h1>
            <div className="codeBlock w-full mt-4 min-h-20 flex flex-col rounded-md bg-[#0e1622]">
              <div className="flex justify-between w-full h-auto items-center">
                <div className="w-20 h-7 rounded-br-md rounded-tl-md flex items-center justify-center bg-[#2c3c53]">
                  <p className="text-sm text-[#9064ff]">Jsx</p>
                </div>
                <HiOutlineClipboardList
                  cursor="pointer"
                  size={20}
                  color="white"
                  className="mr-1 mt-1"
                  onClick={() => {copyText(".copy3")}}
                />
              </div>
              <div className="code mt-2 px-3 w-full h-auto flex gap-3 items-center">
                <FaAngleRight color="#9064ff" />
                <p className="p-3 md:p-0 text-white copy3">{`<button className="customBtn">Custom Button</button>`}</p>
              </div>
            </div>
            <h1 className="text-white text-2xl font-semibold mt-10">Css Code</h1>
            <div className="codeBlock w-full mt-4 min-h-20 flex flex-col rounded-md bg-[#0e1622]">
              <div className="flex justify-between w-full h-auto items-center">
                <div className="w-20 h-7 rounded-br-md rounded-tl-md flex items-center justify-center bg-[#2c3c53]">
                  <p className="text-sm text-[#9064ff]">Css</p>
                </div>
                <HiOutlineClipboardList
                  cursor="pointer"
                  size={20}
                  color="white"
                  className="mr-1 mt-1"
                  onClick={() => {copyText(".copy4")}}
                />
              </div>
              <div className="code mt-2 px-3 w-full h-auto flex gap-3 items-center">
                <FaAngleRight color="#9064ff" />
                <pre className="p-3 md:p-0 text-white copy4">{`.customBtn {
    ${
      isToggled
        ? `background-color: transparent;`
        : `background-color: ${background};`
    }
    color: ${color};
    padding-left: ${paddingX}px;
    padding-right: ${paddingX}px;
    padding-top: ${paddingY}px;
    padding-bottom: ${paddingY}px;
    ${borderSize > 0 ? `border: ${borderSize}px solid ${borderVal};` : 'border: none;'}
    font-size: ${textSize}px;
    border-radius: ${borderRadiusVal}px;
  }`}</pre>
              </div>
            </div>
          </div>







          
          <Sidebar isCross={handleCross} isNav={isNav} />
          <RightCon isClick={handleClick} handleClick1={handleClick1} handleGenerate={handleGenerate} />
        </div>
      </Router>
    </>
  );
};

export default Home;
