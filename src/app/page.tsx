'use client';
import OffersAlt from '@/components/heros/offers-3';
import HappyPeople from '@/components/heros/happy-people';
import HerosGummies from '@/components/heros/hero-gummies';
import BuyButton from '@/components/buy-buttom';

import Image from 'next/image';
import Gummy from '../../public/images/gummy.png';
import Hemp from '../../public/images/rows-of-hemp.jpg';
import Graph from '../../public/images/graph.jpg';
import Hippy from '../../public/images/happy-hippy.png';
import YoungWoman from '../../public/images/young-woman.png';

export default function Home() {
  return (
    <>
      <HerosGummies float>
        <h1 className=' leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight  text-center sm:text-left text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold '>
          GLORIOUS X FACTOR
        </h1>
        <h2 className='mb-10 sm:mb-0 text-center sm:text-left text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
          How to use this mysterious power to help you recovery from almost any
          health problem
        </h2>
      </HerosGummies>
      <></>
      <div className='container mx-auto py-10 lg:py-20'>
        <div className='px-5'>
          <div className='block lg:grid grid-cols-6 mb-10 lg:mb-20'>
            <div className=' float-left lg:float-none lg:col-span-1 lg:text-center pr-5 lg:pr-0'>
              <div className=' w-40 h-40 relative flex items-center justify-center'>
                <Image
                  src={Gummy}
                  width={150}
                  height={100}
                  alt='Gummy'
                  className=' absolute'
                />
                <p className='font-black text-white text-8xl relative '>1</p>
              </div>
            </div>
            <div className='col-span-4 lg:col-span-3'>
              <div>
                <p className='text-lg 2xl:text-xl 2xl:leading-loose mb-10'>
                  HempLand USA® produces BLISS BOMBS™. We&apos;ve been in
                  business since 2014, longer than 99.9% of all hemp companies.
                  Yes, we only use U.S. grown hemp, and yes our manufacturing
                  facility is FDA registered, and yes we use 3rd party
                  independent lab testing, etc etc. Most hemp companies say
                  something similar, but what most hemp companies can&apos;t say
                  is they&apos;ve been in business since 2014.{' '}
                  <span className=' bg-yellow-100 text-black px-2 py-1 rounded font-medium'>
                    There is simply no substitute for longevity and experience.
                  </span>{' '}
                  <span className=' bg-yellow-100 text-black px-2 py-1 rounded font-medium'>
                    PERIOD.
                  </span>
                </p>

                <BuyButton />
              </div>
            </div>
            <div className='col-span-2'>
              <div className='lg:pl-10'>
                <div className='rounded-xl shadow-2xl shadow-[#8e6595] border-4 border-solid border-white    w-full  overflow-hidden'>
                  <Image
                    src={Hemp}
                    width={600}
                    alt='Rows of USA grown hemp'
                    className='w-full'
                  />
                  {/* <p className='text-sm text-center p-2 pt-3'>
                    100% grown and manufactured in the U.S.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className='mb-10 lg:mb-20 pt-10 lg:pt-20 border-t-8 border-solid border-fuchsia-300'>
            <div className='block lg:grid grid-cols-6 mb-10'>
              <div className=' float-left lg:float-none lg:col-span-1 lg:text-center pr-5 lg:pr-0'>
                <div className=' w-40 h-40 relative flex items-center justify-center'>
                  <Image
                    src={Gummy}
                    width={150}
                    height={100}
                    alt='Gummy'
                    className=' absolute'
                  />
                  <p className='font-black text-white text-8xl relative '>2</p>
                </div>
              </div>
              <div className='col-span-4 lg:col-span-3'>
                <div>
                  <p className='text-lg 2xl:text-xl 2xl:leading-loose mb-10'>
                    BLISS BOMBS™ contain a whopping 135 mg of hemp&apos;s good
                    stuff. No other hemp gummies even come close, plus Bliss
                    Bombs™ also contain a fusion of 5 more powerful plant
                    extracts that work with our premium hemp extract to help
                    ensure BLISS BOMBS™ deliver big time.
                  </p>
                  <div className='lg:hidden rounded-xl shadow-2xl shadow-[#8e6595] border-4 border-solid border-white  mb-10  w-full overflow-hidden'>
                    <Image
                      src={Graph}
                      width={600}
                      alt='Graph'
                      className='w-full'
                    />
                    <p className='text-sm text-center p-2 pt-3'>
                      4X more powerful than our closest competitor.
                    </p>
                  </div>
                  <p className='text-lg 2xl:text-xl 2xl:leading-loose mb-10'>
                    However, please understand that blissed out does not mean
                    spaced out. The bliss feelings to which we refer are the
                    feelings you experience when Bliss Bombs™ have naturally
                    helped balance both your body and mind, the feeling of being
                    amazingly relaxed and totally clear, the feeling of absolute
                    well being, the feeling of indescribable happiness, your
                    true nature.
                  </p>

                  <BuyButton />

                  <div className='lg:hidden rounded-xl shadow-2xl shadow-[#8e6595] border-4 border-solid border-white w-full overflow-hidden'>
                    <Image
                      src={YoungWoman}
                      width={600}
                      alt='Young woman'
                      className='w-full'
                    />
                  </div>
                </div>
              </div>
              <div className='col-span-2'>
                <div className='lg:pl-10'>
                  <div className='hidden lg:block rounded-xl shadow-2xl shadow-[#8e6595] border-4 border-solid border-white  mb-10  w-full overflow-hidden'>
                    <Image
                      src={Graph}
                      width={600}
                      alt='Graph'
                      className='w-full'
                    />
                    <p className='text-sm text-center p-2 pt-3'>
                      4X more powerful than our closest competitor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='block lg:grid grid-cols-6  pt-10 lg:pt-20 border-t-8 border-solid border-fuchsia-300'>
            <div className=' float-left lg:float-none lg:col-span-1 lg:text-center pr-5 lg:pr-0'>
              <div className=' w-40 h-40 relative flex items-center justify-center'>
                <Image
                  src={Gummy}
                  width={150}
                  height={100}
                  alt='Gummy'
                  className=' absolute'
                />
                <p className='font-black text-white text-8xl relative '>3</p>
              </div>
            </div>
            <div className='col-span-4 lg:col-span-3'>
              <div>
                <p className='text-lg 2xl:text-xl 2xl:leading-loose mb-10'>
                  The latest craze is for hemp gummies to contain artificially
                  high (spiked) levels of Delta 9, above 3mg, which may cause
                  unpleasant side effects, like disorientation (spaced) and
                  paranoia that can last for hours. Why take a chance? BLISS
                  BOMBS™ are the real deal, an incomparable explosion of long
                  lasting bliss with no negative side effects. Join thousands of
                  people everyday who enjoy Bliss Bombs! Find out who you truly
                  are!
                </p>

                <BuyButton />
              </div>
            </div>
            <div className='col-span-2'>
              <div className='lg:pl-10'>
                <div className='rounded-xl shadow-2xl shadow-[#8e6595] border-4 border-solid border-white  mb-10  w-full overflow-hidden'>
                  <Image
                    src={Hippy}
                    width={600}
                    alt='No negative side effects'
                    className='w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HappyPeople />
      <OffersAlt />
    </>
  );
}
