import SimpleCard from './SimpleCard';
import Footer from './Footer';


const SimpleButtons = ({handleClick1}) => {
  return (
    <>

      <div className="w-full h-full md:p-4 py-4">



      <h1 className="text-[#9064ff] text-xl font-semibold md:mt-0 mt-3 ">
            Simple Buttons
          </h1>
         <div className="w-full h-auto flex flex-wrap gap-5 justify-center
          cards mt-10">
            <SimpleCard handleClick1={handleClick1} btnType='primary' />
            <SimpleCard handleClick1={handleClick1} btnType='info' />
            <SimpleCard handleClick1={handleClick1} btnType='danger' />
            <SimpleCard handleClick1={handleClick1} btnType='btnWht' />
            <SimpleCard handleClick1={handleClick1} btnType='btnBlk' />
            <SimpleCard handleClick1={handleClick1} btnType='btnSmp1' />
            <SimpleCard handleClick1={handleClick1} btnType='btnSmp2' />
            <SimpleCard handleClick1={handleClick1} btnType='btnSmp3' />
            <SimpleCard handleClick1={handleClick1} btnType='default' />
            <SimpleCard handleClick1={handleClick1} btnType='btnSmp4' />
            <SimpleCard handleClick1={handleClick1} btnType='btnSmp5' />
            <SimpleCard handleClick1={handleClick1} btnType='btnSmp6' />
            <SimpleCard handleClick1={handleClick1} btnType='btnSmp7' />
            <SimpleCard handleClick1={handleClick1} btnType='btnSmp8' />
            <SimpleCard handleClick1={handleClick1} btnType='btnSmp9' />
            <SimpleCard handleClick1={handleClick1} btnType='btnSmp10' />
         </div>


      <Footer />

      </div>
    </>
  );
}

export default SimpleButtons;
