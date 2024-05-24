import Image from 'next/image';
import Product from '../../public/images/bilss-bombs.png';
import Gummy from '../../public/images/gummy.png';
import Hemp from '../../public/images/rows-of-hemp.png';
import Hippy from '../../public/images/happy-hippy.png';
import Graph from '../../public/images/graph.jpg';
import BlackPepper from '../../public/images/cannabitol-ecs5-ingredient-black-pepper.jpg';
import Rosemary from '../../public/images/cannabitol-ecs5-ingredient-rosemary.jpg';
import Clove from '../../public/images/cannabitol-ecs5-ingredient-clove.jpg';
import Hops from '../../public/images/cannabitol-ecs5-ingredient-hops.jpg';
import Jujube from '../../public/images/cannabitol-ecs5-ingredient-jujube.jpg';

export default function Home() {
  return (
    <>
      <div className='background bg-gradient-to-t from-purple-600 to-purple-950 text-white'>
        <div className='container mx-auto py-10 lg:py-20'>
          <div className='px-5'>
            <div className='flex flex-col sm:flex-row items-center'>
              <div className='sm:pl-6 lg:lg:pl-10 2xl:pl-14 sm:border-l-8 border-solid border-purple-300 w-full max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl'>
                <h1 className=' leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight mb-10 sm:mb-0 text-center sm:text-left text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold '>
                  3 Reasons Why <br />
                  Bliss Bombs™ Blow <br />
                  Away ALL Hemp <br />
                  Gummies
                </h1>
              </div>
              <div className='w-full'>
                <span className='mx-auto block relative max-w-60 sm:max-w-40 md:max-w-48 lg:max-w-56  xl:max-w-72 2xl:max-w-96'>
                  <Image
                    src={Product}
                    width={400}
                    height={100}
                    alt='Bliss Bombs Gummies'
                  />
                  <div className='floating2 absolute -top-[15%] -right-[20%] w-[40%]'>
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

                  <div className='floating3 absolute bottom-[10%] -right-[5%]  w-[25%]'>
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
      <div className='container mx-auto py-10 lg:py-20'>
        <div className='px-5'>
          <div className='block lg:grid grid-cols-6 mb-10 lg:mb-20'>
            <div className=' float-left lg:float-none lg:col-span-1 lg:text-center pr-5 lg:pr-0'>
              <p className='font-black text-purple-300 text-9xl relative lg:-top-3'>
                1
              </p>
            </div>
            <div className='col-span-4 lg:col-span-3'>
              <div>
                <p className='text-lg 2xl:text-xl 2xl:leading-loose mb-10'>
                  HempLand USA® produces Bliss Bombs™. We&apos;ve been in
                  business since 2014, longer than 99.9% of all hemp companies.
                  Yes, we only use U.S. grown hemp, and yes our manufacturing
                  facility is FDA registered, and yes we use 3rd party
                  independent lab testing, etc etc. Most hemp companies say
                  something similar, but what most hemp companies can&apos;t say
                  is they&apos;ve been in business since 2014. There is simply
                  no substitute for longevity and experience. Period.
                </p>
              </div>
            </div>
            <div className='col-span-2'>
              <div className='lg:pl-10'>
                <Image
                  src={Hemp}
                  width={600}
                  alt='Rows of USA grown hemp'
                  className='rounded-xl shadow-2xl shadow-purple-300 border-4 border-solid border-white w-full'
                />
              </div>
            </div>
          </div>
          <div className='mb-10 lg:mb-20 pt-10 border-t-8 border-solid border-purple-300'>
            <div className='block lg:grid grid-cols-6 mb-10'>
              <div className=' float-left lg:float-none lg:col-span-1 lg:text-center pr-5 lg:pr-0'>
                <p className='font-black text-purple-300 text-9xl relative lg:-top-3'>
                  2
                </p>
              </div>
              <div className='col-span-4 lg:col-span-3'>
                <div>
                  <p className='text-lg 2xl:text-xl 2xl:leading-loose mb-10'>
                    BLISS BOMBS™ contain a whopping 135 mg of hemp&apos;s good
                    stuff. No other hemp gummies do, plus Bliss Bombs™ also
                    contain a fusion of 5 more powerful plant extracts (black
                    pepper, rosemary, clove, hops, and jujube) that help ensure
                    Bliss Bombs™ truly deliver.
                  </p>
                  <div className='grid grid-cols-5 mb-10'>
                    <Image
                      src={BlackPepper}
                      width={100}
                      alt='Black Pepper'
                      className='rounded-lg shadow-xl shadow-purple-300  border-4 border-solid border-white w-4/5'
                    />
                    <Image
                      src={Rosemary}
                      width={100}
                      alt='Rosemary'
                      className='rounded-lg shadow-xl shadow-purple-300  border-4 border-solid border-white w-4/5'
                    />
                    <Image
                      src={Clove}
                      width={100}
                      alt='Clove'
                      className='rounded-lg shadow-xl shadow-purple-300  border-4 border-solid border-white w-4/5'
                    />
                    <Image
                      src={Hops}
                      width={100}
                      alt='Hops'
                      className='rounded-lg shadow-xl shadow-purple-300  border-4 border-solid border-white w-4/5'
                    />
                    <Image
                      src={Jujube}
                      width={100}
                      alt='Jujube'
                      className='rounded-lg shadow-xl shadow-purple-300  border-4 border-solid border-white w-4/5'
                    />
                  </div>
                </div>
              </div>
              <div className='col-span-2'>
                <div className='lg:pl-10'>
                  <Image
                    src={Graph}
                    width={600}
                    alt='Graph'
                    className='rounded-xl shadow-2xl shadow-purple-300 border-4 border-solid border-white  mb-10  w-full'
                  />
                </div>
              </div>
            </div>
            <div className='block lg:grid grid-cols-6 mb-10 lg:mb-20'>
              <div className='text-center'>
                <p className='font-black text-purple-300 text-3xl lg:text-9xl relative -top-3'></p>
              </div>
              <div className='col-span-4 lg:col-span-3'>
                <div>
                  <p className='text-lg 2xl:text-xl 2xl:leading-loose mb-10'>
                    However, please understand that bliss does not mean high or
                    spaced out. The bliss feelings to which we refer are the
                    feelings you experience when Bliss Bombs™ have naturally
                    helped balance both your body and mind, the feeling of being
                    amazingly relaxed and totally clear, the feeling of absolute
                    well being, the feeling of indescribable happiness. Bliss is
                    your true nature, a far better and more profound experience
                    than just being high.
                  </p>
                </div>
              </div>
              <div className='col-span-2'>
                <div className='lg:pl-10'>
                  <Image
                    src={Hippy}
                    width={600}
                    alt='Happy Hippy'
                    className='rounded-xl shadow-2xl shadow-purple-300 border-4 border-solid border-white w-full'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='block lg:grid grid-cols-6 mb-10 lg:mb-20 pt-10 lg:pt-20 border-t-8 border-solid border-purple-300'>
            <div className=' float-left lg:float-none lg:col-span-1 lg:text-center pr-5 lg:pr-0'>
              <p className='font-black text-purple-300 text-9xl relative lg:-top-3'>
                3
              </p>
            </div>
            <div className='col-span-4 lg:col-span-3'>
              <div>
                <p className='text-lg 2xl:text-xl 2xl:leading-loose mb-10'>
                  The latest craze is for hemp gummies to contain artificially
                  high levels of hemp derived Delta 8 and Delta 9 that may
                  induce short lived feelings of being high or spacey but
                  certainly not bliss. More importantly, Delta 8 and Delta 9
                  gummies can cause serious negative side effects, like
                  disorientation and heavy anxiety. Don&apos;t be fooled, BLISS
                  BOMBS™ are the real deal, an incomparable explosion of long
                  lasting bliss with no negative side effects. Why not join
                  thousands of people everyday who enjoy Bliss Bombs? Find out
                  who your truly are!
                </p>
              </div>
            </div>
            <div>
              <div className='lg:pl-10'>img</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
