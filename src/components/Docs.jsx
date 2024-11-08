import { HiOutlineClipboardList } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa";
import Footer from "./Footer";
import toast from "react-hot-toast";


const Docs = () => {

  const copyText = (toCopy) => {
    window.navigator.clipboard.writeText(document.querySelector(toCopy).innerText);
    toast.success("Code Copied Successfully.");
  }
  
  
  
  return (
    <>
      <div className="w-full h-full md:p-4 py-4">
        <div className="md:w-[94%] w-full h-auto">
          <h1 className="text-[#9064ff] text-xl font-semibold md:mt-0 mt-3 ">
            Installation
          </h1>
          <h1 className="text-[#fff] md:text-4xl text-2xl font-semibold md:mt-3 mt-2">
            Getting Started with React Buttons.
          </h1>
          <p className="md:text-lg text-[#d6d6d6] mt-2">
            React Buttons Library works with React Js. It contains a huge number
            of pre-designed buttons and It also gives you the flexibility of
            designing your own custom buttons and it will generate the code of
            that button.
          </p>
        </div>

        <div className="md:flex md:flex-row md:justify-between flex-col md:mt-10 mt-10">
          <div className="left">
            <div className="heading flex gap-5 items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-[#07070763] rounded-md">
                <h1 className="text-white font-bold">1</h1>
              </div>
              <h1 className="">Install React-Buttons-Library</h1>
            </div>
            <p className="text-[#d6d6d6] mt-3">
              Install " React-Buttons-Library " via npm.
            </p>
          </div>
          <div className="right md:w-1/2 md:mt-0 mt-3">
            <div className="codeBlock w-full min-h-20 flex flex-col rounded-md bg-[#0e1622]">
              <div className="flex justify-between w-full h-auto items-center">
                <div className="w-20 h-7 rounded-br-md rounded-tl-md flex items-center justify-center bg-[#2c3c53]">
                  <p className="text-sm text-[#9064ff]">Terminal</p>
                </div>
                <HiOutlineClipboardList
                  cursor="pointer"
                  size={20}
                  className="mr-1 mt-1"
                  onClick={() => {copyText('.installation')}}
                />
              </div>
              <div className="code mt-2 px-3 w-full h-auto flex gap-3 items-center">
                <FaAngleRight color="#9064ff" />
                <p className="p-3 md:p-0 installation">npm install react-buttons-library</p>
              </div>
            </div>
          </div>
        </div>






        <div className="md:flex md:flex-row md:justify-between flex-col md:mt-10 mt-10">
          <div className="left">
            <div className="heading flex gap-5 items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-[#07070763] rounded-md">
                <h1 className="text-white font-bold">2</h1>
              </div>
              <h1 className="">Import button in your component</h1>
            </div>
            <p className="text-[#d6d6d6] mt-3">
              Select the desired button and import it
            </p>
          </div>
          <div className="right md:w-1/2 md:mt-0 mt-3">
            <div className="codeBlock hide-scrollbar w-full min-h-20 flex flex-col rounded-md bg-[#0e1622]">
              <div className="flex justify-between w-full h-auto items-center">
                <div className="w-20 min-h-7 rounded-br-md rounded-tl-md flex items-center justify-center bg-[#2c3c53]">
                  <p className="text-sm text-[#9064ff]">App.jsx</p>
                </div>
                <HiOutlineClipboardList
                  cursor="pointer"
                  size={20}
                  className="mr-1 mt-1"
                  onClick={() => {copyText('.import')}}
                />
              </div>
              <div className="code mt-2 px-3 w-full h-auto flex gap-3 items-center">
                <FaAngleRight color="#9064ff" />
                <p className="p-3 md:p-0 import">{`import { BtnSimple } from 'react-buttons-library'`}</p>
              </div>
            </div>
          </div>
        </div>



        <div className="md:flex md:flex-row md:justify-between flex-col md:mt-10 mt-10">
          <div className="left">
            <div className="heading flex gap-5 items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-[#07070763] rounded-md">
                <h1 className="text-white font-bold">3</h1>
              </div>
              <h1 className="">Use the button in your component</h1>
            </div>
            <p className="text-[#d6d6d6] mt-3">
              Copy the usage code and use the button.
            </p>
          </div>
          <div className="right md:w-1/2 md:mt-0 mt-3">
            <div className="codeBlock w-full min-h-20 flex flex-col rounded-md bg-[#0e1622]">
              <div className="flex justify-between w-full h-auto items-center">
                <div className="w-20 h-7 rounded-br-md rounded-tl-md flex items-center justify-center bg-[#2c3c53]">
                  <p className="text-sm text-[#9064ff]">App.jsx</p>
                </div>
                <HiOutlineClipboardList
                  cursor="pointer"
                  size={20}
                  className="mr-1 mt-1"
                  onClick={() => {copyText('.codeToCopy')}}
                />
              </div>
              <div className="code mt-2 px-3 w-full h-auto flex gap-3 items-center overflow-x-scroll hide-scrollbar">
              <p className="p-3 codeToCopy"><pre className="">{`import React from 'react'
import { BtnSimple } from 'react-buttons-library'
const App = () => {
  return (
    <div>
        <BtnSimple 
        label='Click Me' 
        btnClass='info' 
        onClick={()=>handleClick(btnType)} />
    </div>
  )
}

export default App`}</pre></p>
              </div>
            </div>
          </div>
        </div>



       
       <Footer />




      </div>
    </>
  );
};

export default Docs;
