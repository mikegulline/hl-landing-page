'use client';
import { useState } from 'react';
import CreditCards from '../credit-cards';
import { FcLock } from 'react-icons/fc';
import Link from 'next/link';
import ECS51 from '../../../public/images/ecs5-1.png';
import ECS53 from '../../../public/images/ecs5-3.png';
import ECS56 from '../../../public/images/ecs5-6.png';
import Image from 'next/image';

const ECS5Offer = () => {
  const [count, setCount] = useState(3);
  const stickerStyles = 'bg-green-700 border-green-400 shadow-green-900/50';

  const UseImage = () => {
    if (count === 3) {
      return (
        <Image
          src={ECS53}
          width={200}
          alt='Cannabitol ECS5 x3'
          className='mx-auto w-full'
        />
      );
    }
    if (count === 6) {
      return (
        <Image
          src={ECS56}
          width={200}
          alt='Cannabitol ECS5 x6'
          className='mx-auto w-full'
        />
      );
    }
    return (
      <Image
        src={ECS51}
        width={200}
        alt='Cannabitol ECS5 x1'
        className='mx-auto w-full'
      />
    );
  };

  return (
    <div className='rounded-xl  border-4 lg:border-8 border-green-600/50 border-solid bg-white text-black'>
      <h3 className='text-2xl xl:text-3xl font-black text-center bg-green-600/10 text-green-700 py-2 border-b border-dashed border-blue-800'>
        Buy {count} Bottle{count === 1 ? '' : 's'}
      </h3>
      <div className='p-2 2xl:p-4'>
        <div className='flex items-center'>
          <div className='flex items-center justify-center min-w-36 sm:min-w-72 md:min-w-48'>
            <div className='relative mx-auto'>
              <UseImage />
              <div
                className={`w-20 h-20 flex flex-col  border-4 border-solid text-white  rounded-full absolute -top-6 -left-4  items-center justify-center shadow-lg ${stickerStyles}`}
              >
                <span className='text-xs leading-none'>You Save</span>
                <span className='font-black text-xl leading-none mt-1'>
                  ${count * 45}
                </span>
              </div>
            </div>
          </div>
          <div className='flex-grow'>
            <h4 className='font-black text-4xl text-center'>
              $45
              <span className='text-xl font-normal'>/each</span>
            </h4>

            {count === 1 ? (
              <p className='font-medium text-red-600 text-center text-xs'>
                Plus $8.95 for
                <br />
                Shipping and Handling
              </p>
            ) : (
              <p className='font-medium text-green-600 text-center text-xs'>
                Plus Free Shipping
                <br />
                <em>($8.95 value)</em>
              </p>
            )}

            <div>
              <div className='flex items-center justify-center gap-2 mt-2 mb-4'>
                <button
                  onClick={() => setCount(1)}
                  className={`${
                    count === 1
                      ? 'border-green-400 bg-green-700'
                      : 'border-gray-400 bg-gray-700'
                  } w-10 h-10 flex justify-center items-center border-2 border-solid  text-white font-bold rounded-full  shadow-md  shadow-gray-900/50`}
                >
                  x1
                </button>
                <button
                  onClick={() => setCount(3)}
                  className={`${
                    count === 3
                      ? 'border-green-400 bg-green-700'
                      : 'border-gray-400 bg-gray-700'
                  } w-10 h-10 flex justify-center items-center border-2 border-solid  text-white font-bold rounded-full  shadow-md  shadow-gray-900/50`}
                >
                  x3
                </button>
                <button
                  onClick={() => setCount(6)}
                  className={`${
                    count === 6
                      ? 'border-green-400 bg-green-700'
                      : 'border-gray-400 bg-gray-700'
                  } w-10 h-10 flex justify-center items-center border-2 border-solid  text-white font-bold rounded-full  shadow-md  shadow-gray-900/50`}
                >
                  x6
                </button>
              </div>
            </div>
            <Link
              href={`https://www.hemplandusa.com/cart/?fill_cart=${count}x24&utm_source=ECS5+Landing+Page&utm_campaign=tictok&utm_content=Buy+Now+${count}`}
              id={`add-to-cart-${count}`}
              className='border-4 border-solid text-white border-blue-400 bg-gradient-to-t  hover:border-blue-300 from-blue-800 hover:text-yellow-200 to-blue-500 rounded-full mx-auto px-0 py-1 flex items-center justify-center font-medium text-2xl my-3 max-w-40'
            >
              <span>Buy {count} Now</span>
            </Link>
            <CreditCards />
          </div>
        </div>
      </div>
      <div className='p-2 bg-green-100 sm:flex justify-between border-t border-dashed border-green-600/50'>
        <ul className='flex justify-center sm:justify-start items-center gap-2  mx-auto'>
          <li>
            <div className=' w-8 h-8 border border-solid border-green-700 bg-white rounded-full flex justify-center items-center'>
              <FcLock className='scale-125' />
            </div>
          </li>
          <li className='text-black text-xs leading-tight font-bold'>
            <p>Safe and secure checkout</p>
            <p>100% Guaranteed</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ECS5Offer;
