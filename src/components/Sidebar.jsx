import { RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";




const Sidebar = ({isNav,isCross}) => {

  return (
    <>
      <div className="w-[19%] h-full sidebar flex md:flex-col backdrop-blur-md text-white justify-between items-center p-3 bg-[#ffffff27]">
        <div className="sideTop flex flex-col gap-4">
          <div className="logo items-center px-5 py-3 rounded-xl flex gap-2 bg-[#07070738]">
            <RiReactjsFill size={45} className="text-[#9065ff]" />
            <h1 className="text-[1.5vw] whitespace-nowrap">React Buttons</h1>
          </div>
          <ul className="flex w-full flex-col gap-2 text-white p-2">
            <li className="text-lg whitespace-nowrap cursor-pointer px-3 py-2 transition-all duration-200 hover:bg-[#07070763] rounded-lg">Docs</li>
            <li className="text-lg whitespace-nowrap cursor-pointer px-3 py-2 transition-all duration-200 hover:bg-[#07070763] rounded-lg">Simple Buttons</li>
            <li className="text-lg whitespace-nowrap cursor-pointer px-3 py-2 transition-all duration-200 hover:bg-[#07070763] rounded-lg">Rounded Buttons</li>
            <li className="text-lg whitespace-nowrap cursor-pointer px-3 py-2 transition-all duration-200 hover:bg-[#07070763] rounded-lg">Outline Buttons</li>
            <li className="text-lg whitespace-nowrap cursor-pointer px-3 py-2 transition-all duration-200 hover:bg-[#07070763] rounded-lg">Custom Button</li>
          </ul>
        </div>
        <div className="sideBottom">
            <div className="github flex gap-3 w-full items-center transition-all duration-200 hover:bg-[#07070763] rounded-lg px-4 py-3 cursor-pointer">
                <FaGithub size={40} />
                <h1 className="text-[1.3vw] whitespace-nowrap">Github Repository</h1>
            </div>
        </div>
      </div>


      <div className={`fixed ${isNav ? 'block' : 'hidden'} z-[20] top-0 w-full h-screen bg-[#00000063] backdrop-blur-sm`}>
      <div className="w-[260px] z-20 h-full flex flex-col backdrop-blur-md text-white justify-between items-center p-3 bg-[#272A39]">
        <div onClick={isCross} className="absolute w-[50px] h-[50px] right-[-50px] z-[-9999] bg-[#272A39] rounded-r-xl cursor-pointer flex items-center justify-center ">
            <RiCloseFill size={23} cursor="pointer" />
        </div>
        <div className="sideTop flex flex-col gap-4">
          <div className="logo items-center px-5 py-3 rounded-xl flex gap-2 bg-[#07070738]">
            <RiReactjsFill size={45} className="text-[#9065ff]" />
            <h1 className="text-lg whitespace-nowrap">React Buttons</h1>
          </div>
          <ul className="flex w-full flex-col gap-2 text-white p-2">
            <li className="text-lg whitespace-nowrap cursor-pointer px-3 py-2 transition-all duration-200 hover:bg-[#07070763] rounded-lg">Docs</li>
            <li className="text-lg whitespace-nowrap cursor-pointer px-3 py-2 transition-all duration-200 hover:bg-[#07070763] rounded-lg">Simple Buttons</li>
            <li className="text-lg whitespace-nowrap cursor-pointer px-3 py-2 transition-all duration-200 hover:bg-[#07070763] rounded-lg">Rounded Buttons</li>
            <li className="text-lg whitespace-nowrap cursor-pointer px-3 py-2 transition-all duration-200 hover:bg-[#07070763] rounded-lg">Outline Buttons</li>
            <li className="text-lg whitespace-nowrap cursor-pointer px-3 py-2 transition-all duration-200 hover:bg-[#07070763] rounded-lg">Custom Button</li>
          </ul>
        </div>
        <div className="sideBottom">
            <div className="github flex gap-3 w-full items-center transition-all duration-200 hover:bg-[#07070763] rounded-lg px-4 py-3 cursor-pointer">
                <FaGithub size={40} />
                <h1 className="text-lg whitespace-nowrap">Github Repository</h1>
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
