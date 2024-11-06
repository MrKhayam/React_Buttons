import React from "react";

const Docs = () => {
  return (
    <>
      <div className="w-full min-h-full md:p-4 py-4">
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
            <p className="text-[#d6d6d6] mt-3">Install " React-Buttons-Library " via npm.</p>
          </div>
          <div className="right md:w-1/2 md:mt-0 mt-3">
            <div className="codeBlock w-full h-20 flex justify-between rounded-md bg-[#0e1622]">
              <div className="w-20 h-7 rounded-br-md rounded-tl-md flex items-center justify-center bg-[#2c3c53]">
                <p className="text-sm text-[#9064ff]">Terminal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
