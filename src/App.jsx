import React from "react";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="w-full h-screen relative overflow-hidden bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="w-full h-full z-50">
            <Home />
          </div>
        </div>
    </>
  );
};

export default App;
