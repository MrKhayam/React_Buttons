import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Docs from './Docs';


const RightCon = ({isClick}) => {
  return (
    <div className='rightCon w-[81%] p-4  h-full backdrop-blur-md text-white bg-[#ffffff25] overflow-scroll hide-scrollbar'>
     <Header isClick={isClick} />
     <Routes>
        <Route path='/' element= {<Docs />} />
     </Routes>
    </div>
  );
}

export default RightCon;
