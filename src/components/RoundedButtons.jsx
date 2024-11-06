import RoundedCard from './RoundedCard';
import Footer from './Footer';


const RoundedButtons = ({handleClick1}) => {
  return (
    <>

      <div className="w-full h-full md:p-4 py-4">



      <h1 className="text-[#9064ff] text-xl font-semibold md:mt-0 mt-3 ">
            Rounded Buttons
          </h1>
         <div className="w-full h-auto flex flex-wrap gap-5 justify-center
          cards mt-10">
            <RoundedCard handleClick1={handleClick1} btnType='primary' />
            <RoundedCard handleClick1={handleClick1} btnType='info' />
            <RoundedCard handleClick1={handleClick1} btnType='danger' />
            <RoundedCard handleClick1={handleClick1} btnType='btnWht' />
            <RoundedCard handleClick1={handleClick1} btnType='btnBlk' />
            <RoundedCard handleClick1={handleClick1} btnType='btnSmp1' />
            <RoundedCard handleClick1={handleClick1} btnType='btnSmp2' />
            <RoundedCard handleClick1={handleClick1} btnType='btnSmp3' />
            <RoundedCard handleClick1={handleClick1} btnType='default' />
            <RoundedCard handleClick1={handleClick1} btnType='btnSmp4' />
            <RoundedCard handleClick1={handleClick1} btnType='btnSmp5' />
            <RoundedCard handleClick1={handleClick1} btnType='btnSmp6' />
            <RoundedCard handleClick1={handleClick1} btnType='btnSmp7' />
            <RoundedCard handleClick1={handleClick1} btnType='btnSmp8' />
            <RoundedCard handleClick1={handleClick1} btnType='btnSmp9' />
            <RoundedCard handleClick1={handleClick1} btnType='btnSmp10' />
         </div>


      <Footer />

      </div>
    </>
  );
}

export default RoundedButtons;
