import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import RightCon from '../components/RightCon';
import { BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
  const [isNav, setIsNav] = useState(false);

  const handleClick = () => {
      setIsNav(true);
  }
  const handleCross = () => {
      setIsNav(false);
  }
  return (
    <>
        <Router>
        <div className="flex w-full h-screen gap-1">
          <Sidebar isCross = {handleCross} isNav={isNav} />
          <RightCon isClick = {handleClick} />
        </div>
        </Router>
    </>
  );
}

export default Home;
