import Image from 'next/image';
import Product from '../../public/images/bilss-bombs.png';
import Gummy from '../..//public/images/gummy.png';

export default function Home() {
  return (
    <div className='background bg-gradient-to-t from-purple-600 to-purple-950 text-white'>
      <div className='container mx-auto py-10 lg:py-20'>
        <div className='px-5'>
          <div className='flex items-center'>
            <div className='sm:pl-6 lg:pl-10 2xl:pl-14 sm:border-l-8 border-solid border-purple-300 w-full max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl'>
              <h1 className=' leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold '>
                3 Reasons Why <br />
                Bliss Bombs™ Blow <br />
                Away ALL Hemp <br />
                Gummies
              </h1>
            </div>
            <div className='w-full'>
              <span
                className='mx-auto block relative max-w-24 sm:max-w-40 md:max-w-48 lg:max-w-56  xl:max-w-72 2xl:max-w-96
                '
              >
                <Image
                  src={Product}
                  width={400}
                  height={100}
                  alt='Bliss Bombs Gummies'
                />
                <div className='floating2 absolute -top-[10%] -right-[20%] w-[40%]'>
                  <Image
                    src={Gummy}
                    width={150}
                    height={100}
                    alt='Gummy'
                    className='wiggle2'
                  />
                </div>
                <div className='floating absolute top-[20%] -left-[15%]  w-[35%]'>
                  <Image
                    src={Gummy}
                    width={120}
                    height={100}
                    alt='Gummy'
                    className='wiggle'
                  />
                </div>

                <div className='floating3 absolute bottom-0 -right-[5%]  w-[25%]'>
                  <Image
                    src={Gummy}
                    width={100}
                    height={100}
                    alt='Gummy'
                    className='wiggle3'
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
