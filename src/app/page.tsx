'use client';
import Image from 'next/image';
import Product from '../../public/images/bilss-bombs.png';
import Gummy from '../../public/images/gummy.png';
import Hemp from '../../public/images/rows-of-hemp.jpg';
import Graph from '../../public/images/graph.jpg';
import Explosion from '../../public/images/exp.jpg';
import SideEffects from '../../public/images/serious-negative-side-effects.jpg';

export default function Home() {
  const handleClick = (id: number, count: number) => {
    const link = window.location.replace(
      `https://www.hemplandusa.com/cart/?fill_cart=${count}x${id}`
    );
  };
  return (
    <>
      <div className='background bg-fuchsia-950 text-white overflow-hidden'>
        <div className='container mx-auto py-10 lg:py-20'>
          <div className='px-5'>
            <div className='flex flex-col sm:flex-row items-center relative '>
              <div className='sm:pl-6 lg:lg:pl-10 2xl:pl-14 sm:border-l-8 border-solid border-yellow-100 w-full max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl relative z-10'>
                <h1 className=' leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight mb-10 sm:mb-0 text-center sm:text-left text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold '>
                  3 Reasons Why <br />
                  Bliss Bombs™ Blow <br />
                  Away ALL Hemp <br />
                  Gummies
                </h1>
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

                  <div className='floating2 absolute  -top-[10%] -right-[20%] w-[40%]'>
                    <div className='wiggle2 flex justify-center items-center '>
                      <Image src={Gummy} width={150} height={100} alt='Gummy' />
                      <div className='font-black text-white absolute text-3xl scale-[0.7] sm:scale-[0.6] lg:scale-[0.7] xl:scale-[0.85] 2xl:scale-[1]'>
                        135mg
                      </div>
                    </div>
                  </div>

                  <div className='floating absolute top-[20%] -left-[15%]  w-[35%] '>
                    <div className='wiggle2 flex justify-center items-center relative'>
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
              </div>
            </div>
            <div className='col-span-2'>
              <div className='lg:pl-10'>
                <Image
                  src={Hemp}
                  width={600}
                  alt='Rows of USA grown hemp'
                  className='rounded-xl shadow-2xl shadow-[#8e6595] border-4 border-solid border-white w-full'
                />
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
                  <p className='text-lg 2xl:text-xl 2xl:leading-loose mb-10'>
                    However, please understand that bliss does not mean high or
                    spaced out. The bliss feelings to which we refer are the
                    feelings you experience when BLISS BOMBS™ have naturally
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
                    src={Graph}
                    width={600}
                    alt='Graph'
                    className='rounded-xl shadow-2xl shadow-[#8e6595] border-4 border-solid border-white  mb-10  w-full'
                  />
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
                  high levels of Delta 9. These gummies will definitely induce
                  feelings of being high or spacey, but certainly not bliss.
                  More importantly, Delta 9 gummies can cause serious negative
                  side effects, like disorientation and heavy anxiety that can
                  last for hours. Don&apos;t be fooled, BLISS BOMBS™ are the
                  real deal, an incomparable explosion of long lasting bliss
                  with no negative side effects. Why not join thousands of
                  people everyday who enjoy Bliss Bombs? Find out who your truly
                  are!
                </p>
              </div>
            </div>
            <div className='col-span-2'>
              <div className='lg:pl-10'>
                <Image
                  src={SideEffects}
                  width={600}
                  alt='No negative side effects'
                  className='rounded-xl shadow-2xl shadow-[#8e6595] border-4 border-solid border-white  mb-10  w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#2e0534] text-center py-4 sm:py-10'>
        <h2 className='font-black text-fuchsia-300 text-4xl sm:text-6xl'>
          BUY BLISS BOMBS™
        </h2>
      </div>
      <div className='background bg-fuchsia-950 text-white overflow-hidden'>
        <div className='container mx-auto py-10 lg:py-32'>
          <div className='px-5'>
            <div className='flex flex-col-reverse xl:flex-row items-center relative '>
              <div className=' w-full max-w-xl lg:max-w-3xl xl:max-w-2xl 2xl:max-w-4xl relative z-10'>
                <div className=' bg-black/60 p-5 md:p-10 rounded-xl mt-10 xl:mt-0 xl:bg-transparent xl:p-0'>
                  <p className=''>
                    <strong>
                      A one month supply of BLISS BOMBS™ costs $85.00 plus
                      $8.95 for shipping.
                    </strong>{' '}
                    A 2 month supply is discounted 20%, 4 months 30%, and 6
                    months 50%. Plus, discounted orders include free shipping.{' '}
                    <strong>
                      All orders come with a 100% money back guarantee. No
                      questions asked.
                    </strong>{' '}
                    <u>
                      Click on one of the offers below to apply your savings now
                    </u>
                    .{' '}
                  </p>
                </div>
                <div className='rounded-xl overflow-hidden mt-6 border-4 lg:border-8 border-fuchsia-300 border-solid'>
                  <table className='cw-table w-full mb-0'>
                    <thead>
                      <tr className='border-b border-b-gray-400 border-solid'>
                        <th className='text-xs lg:text-sm bg-fuchsia-900 h-6 text-center border-b-2 border-solid border-black py-1'>
                          QTY
                        </th>
                        <th className='text-xs lg:text-sm bg-fuchsia-900 h-6 text-center border-b-2 border-solid border-black py-1'>
                          Promo<span className='hidden lg:inline'>tion</span>
                        </th>
                        <th className='text-xs lg:text-sm bg-fuchsia-900 h-6 text-center border-b-2 border-solid border-black py-1'>
                          Regular
                          <span className='hidden lg:inline'> Price</span>
                        </th>
                        <th className='text-xs lg:text-sm bg-fuchsia-900 h-6 text-center border-b-2 border-solid border-black py-1'>
                          <span className='hidden lg:inline'>Your </span>Savings
                        </th>
                        <th className='text-xs lg:text-sm bg-fuchsia-900 h-6 text-center border-b-2 border-solid border-black py-1'>
                          Final<span className='hidden lg:inline'> Price</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        className='border-b border-b-gray-400 border-solid group'
                        onClick={() => handleClick(1197, 6)}
                      >
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          6
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          50%
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-fuchsia-300 group-hover:bg-gray-800'>
                          $510
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          $255
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-solid text-fuchsia-300 group-hover:bg-gray-800'>
                          $255
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                      </tr>
                      <tr
                        className='border-b border-b-gray-400 border-solid group'
                        onClick={() => handleClick(1197, 4)}
                      >
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          4
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          30%
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-fuchsia-300 group-hover:bg-gray-800'>
                          $340
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          $102
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-solid text-fuchsia-300 group-hover:bg-gray-800'>
                          $238
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                      </tr>
                      <tr
                        className='border-b border-b-gray-400 border-solid group'
                        onClick={() => handleClick(1197, 2)}
                      >
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          2
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          20%
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-fuchsia-300 group-hover:bg-gray-800'>
                          $170
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          $34
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-solid text-fuchsia-300 group-hover:bg-gray-800'>
                          $136
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                      </tr>
                      <tr
                        className='border-b border-b-gray-400 border-solid group'
                        onClick={() => handleClick(1197, 1)}
                      >
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          1
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          0%
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-fuchsia-300 group-hover:bg-gray-800'>
                          $85
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                          $0
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                        <td className='cursor-pointer pointer-events-auto h-14 font-black text-xl lg:text-3xl border-0 text-center bg-black border-solid text-fuchsia-300 group-hover:bg-gray-800'>
                          $85
                          <sup className='text-[60%] hidden lg:inline'>.00</sup>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className='text-xs text-black p-2 uppercase font-medium leading-none bg-white'>
                    *All information contained within this site is for reference
                    purposes only and are not intended to substitute the advice
                    given by a pharmacist, physician, or any other licensed
                    health-care professional. HempLand® USA products and all
                    statements have not been evaluated by the Food and Drug
                    Administration and are not intended to diagnose, treat,
                    cure, or prevent any disease.
                  </p>
                </div>
              </div>
              <div className='w-full relative z-0'>
                <div className='absolute flex inset-0 items-center justify-center scale-[250%]  sm:scale-[225%] -rotate-90 xl:rotate-0'>
                  <Image
                    src={Explosion}
                    width={2000}
                    alt='Explosion'
                    className=''
                  />
                  <div className=' bg-gradient-to-l from-transparent to-fuchsia-950  absolute top-0 left-0 bottom-0 w-48 xl:w-80 '></div>
                </div>
                <span className='mx-auto block relative max-w-60 sm:max-w-40 md:max-w-48 lg:max-w-80  xl:max-w-96 2xl:max-w-96'>
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

                  <div className='floating2 absolute  -top-[10%] -right-[20%] w-[40%]'>
                    <div className='wiggle2 flex justify-center items-center '>
                      <Image src={Gummy} width={150} height={100} alt='Gummy' />
                      <div className='font-black text-white absolute text-3xl scale-[0.7] sm:scale-[0.6] lg:scale-[0.7] xl:scale-[0.85] 2xl:scale-[1]'>
                        135mg
                      </div>
                    </div>
                  </div>

                  <div className='floating absolute top-[20%] -left-[15%]  w-[35%] '>
                    <div className='wiggle2 flex justify-center items-center relative'>
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
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
