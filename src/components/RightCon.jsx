import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Docs from './Docs';
import SimpleButtons from './SimpleButtons';
import RoundedButtons from './RoundedButtons';
import OutlineButtons from './OutlineButtons';
import Custom from './Custom';


const RightCon = ({isClick, handleClick1, handleGenerate}) => {
  return (
    <div className='rightCon w-[81%] p-4  h-full backdrop-blur-md text-white bg-[#ffffff25] overflow-scroll hide-scrollbar'>
     <Header isClick={isClick} />
     <Routes>
        <Route path='/' element= {<Docs />} />
        <Route path='/simple' element= {<SimpleButtons handleClick1={handleClick1
          } />} />
        <Route path='/rounded' element= {<RoundedButtons handleClick1={handleClick1
          } />} />
        <Route path='/outline' element= {<OutlineButtons handleClick1={handleClick1
          } />} />
        <Route path='/custom' element= {<Custom handleGenerate={handleGenerate} />} />
     </Routes>
    </div>
  );
}

export default RightCon;
