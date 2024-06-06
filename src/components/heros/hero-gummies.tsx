import Image from 'next/image';
import Product from '../../../public/images/bilss-bombs.png';
import Explosion from '../../../public/images/exp.jpg';
import FloatingGummies from './floating-gummies';

export default function HerosGummies({
  children,
  float,
}: {
  children: React.ReactNode;
  float?: boolean;
}) {
  return (
    <div className='background bg-fuchsia-950 text-white overflow-hidden'>
      <div className='container mx-auto py-10 lg:py-20'>
        <div className='px-5'>
          <div className='flex flex-col sm:flex-row items-center relative '>
            <div className='sm:pl-6 lg:lg:pl-10 2xl:pl-14 sm:border-l-8 border-solid border-yellow-100 w-full max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl relative z-10'>
              {children}
            </div>
            <div className='w-full relative z-0'>
              <div className='absolute flex inset-0 items-center justify-center scale-[250%]  sm:scale-[225%] rotate-90 sm:rotate-0'>
                <Image
                  src={Explosion}
                  width={2000}
                  alt='Explosion'
                  className=''
                />
                <div className=' bg-gradient-to-l from-transparent to-fuchsia-950  absolute top-0 left-0 bottom-0 w-48 xl:w-80 '></div>
              </div>
              <span className='mx-auto block relative max-w-60 sm:max-w-40 md:max-w-48 lg:max-w-56  xl:max-w-72 2xl:max-w-96'>
                <div className='flex justify-center items-center'>
                  <div className=' w-full h-full bg-black shadow-[0_0_100px_25px_rgba(0,0,0,0.9)] absolute rounded-3xl scale-95'></div>
                  <Image
                    src={Product}
                    width={400}
                    height={100}
                    alt='Bliss Bombs Gummies'
                    className='relative'
                  />
                </div>
                {float && <FloatingGummies />}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
