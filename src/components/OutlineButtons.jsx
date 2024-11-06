import OutlineCard from './OutlineCard';
import Footer from './Footer';


const OutlineButtons = ({handleClick1}) => {
  return (
    <>

      <div className="w-full h-full md:p-4 py-4">



      <h1 className="text-[#9064ff] text-xl font-semibold md:mt-0 mt-3 ">
            Rounded Buttons
          </h1>
         <div className="w-full h-auto flex flex-wrap gap-5 justify-center
          cards mt-10">
            <OutlineCard handleClick1={handleClick1} btnType='defaultOut' />
            <OutlineCard handleClick1={handleClick1} btnType='primaryOut' />
            <OutlineCard handleClick1={handleClick1} btnType='infoOut' />
            <OutlineCard handleClick1={handleClick1} btnType='dangerOut' />
            <OutlineCard handleClick1={handleClick1} btnType='btnWhtOut' />
            <OutlineCard handleClick1={handleClick1} btnType='btnBlkOut' />
            <OutlineCard handleClick1={handleClick1} btnType='btnSmp1Out' />
            <OutlineCard handleClick1={handleClick1} btnType='btnSmp2Out' />
            <OutlineCard handleClick1={handleClick1} btnType='btnSmp3Out' />
            <OutlineCard handleClick1={handleClick1} btnType='btnSmp4Out' />
            <OutlineCard handleClick1={handleClick1} btnType='btnSmp5Out' />
            <OutlineCard handleClick1={handleClick1} btnType='btnSmp6Out' />
            <OutlineCard handleClick1={handleClick1} btnType='btnSmp7Out' />
            <OutlineCard handleClick1={handleClick1} btnType='btnSmp8Out' />
            <OutlineCard handleClick1={handleClick1} btnType='btnSmp9Out' />
            <OutlineCard handleClick1={handleClick1} btnType='btnSmp10Out' />
         </div>


      <Footer />

      </div>
    </>
  );
}

export default OutlineButtons;
