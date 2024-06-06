import Image from 'next/image';
import Gummy from '../../../public/images/gummy.png';

const FloatingGummies = () => {
  return (
    <>
      <div className='floating2 absolute  -top-[10%] -right-[20%] w-[40%]'>
        <div className='wiggle2 flex justify-center items-center '>
          <Image src={Gummy} width={150} height={100} alt='Gummy' />
          <div className='font-black text-white absolute text-3xl scale-[0.7] sm:scale-[0.6] lg:scale-[0.7] xl:scale-[0.85] 2xl:scale-[1]'>
            135mg
          </div>
        </div>
      </div>

      <div className='floating absolute top-[20%] -left-[15%]  w-[35%] '>
        <div className='wiggle flex justify-center items-center relative'>
          <Image src={Gummy} width={150} height={100} alt='Gummy' />
          <div className='font-black text-white absolute text-3xl  scale-[0.6] sm:scale-[0.5] lg:scale-[0.6] xl:scale-[0.75] 2xl:scale-[0.9]'>
            135mg
          </div>
        </div>
      </div>

      <div className='floating3 absolute bottom-[5%] -right-[5%]  w-[25%]'>
        <div className='wiggle3 flex justify-center items-center relative'>
          <Image src={Gummy} width={150} height={100} alt='Gummy' />
          <div className='font-black text-white absolute text-3xl scale-[0.45] sm:scale-[0.3] lg:scale-[0.4] xl:scale-[0.5] 2xl:scale-[0.7]'>
            135mg
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingGummies;
