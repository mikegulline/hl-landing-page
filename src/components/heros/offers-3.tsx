import Link from 'next/link';
import Image from 'next/image';
import CreditCards from '../credit-cards';
import Product from '../../../public/images/bilss-bombs.png';
import { FcLock } from 'react-icons/fc';

const OffersAlt = () => {
  return (
    <>
      <div className='bg-[#2e0534] text-center py-4 sm:py-10'>
        <h2
          className='font-black text-fuchsia-300 text-4xl sm:text-6xl'
          id='buy-now'
        >
          BUY BLISS BOMBS™
        </h2>
      </div>
      <div className='background  text-white overflow-hidden relative bg-fuchsia-950'>
        <div className='container mx-auto py-10 lg:py-20'>
          <div className='text-center max-w-screen-md mx-auto mb-10'>
            <h3 className='mb-4 text-3xl 2xl:text-4xl text-yellow-200 font-black'>
              100% Money Back Guarantee
            </h3>
            <p className='md:text-xl 2xl:text-3xl mb-4'>
              <strong>
                All orders come with a 100% money back guarantee.{' '}
                <em>No questions asked.</em>
              </strong>
            </p>
            <p className=''>
              <strong className='text-yellow-200'>PLUS FREE SHIPPING:</strong>{' '}
              <u>
                Order right now and get FREE Shipping <em>($8.95 value)</em>!
              </u>
            </p>
          </div>
          <div className='px-5'>
            <div className='max-w-96 xl:max-w-none mx-auto flex flex-col xl:grid grid-cols-3 gap-10'>
              <Offer count={6} price={40} />
              <Offer count={3} price={60} />
              <Offer count={1} price={75} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface IOffer {
  count: number;
  price: number;
}
const Offer = ({ count, price }: IOffer) => {
  const regularPrice = 85;
  const youSave = regularPrice * count - price * count;
  const stickerStyles =
    youSave > 100
      ? `bg-fuchsia-700 border-fuchsia-400 shadow-fuchsia-900/50`
      : `bg-gray-700 border-gray-400 shadow-gray-900/50`;
  return (
    <div className='rounded-xl  border-4 lg:border-8 border-fuchsia-300 border-solid bg-white text-black'>
      <h3 className='text-2xl xl:text-3xl font-black text-center bg-fuchsia-100 text-fuchsia-900 py-2 border-b border-dashed border-fuchsia-800'>
        Buy {count} Bottle{count > 1 && 's'}
      </h3>
      <div className='p-2 2xl:p-4'>
        <div className='flex items-center'>
          <div className='flex items-center justify-center min-w-40 sm:min-w-44 2xl:min-w-56'>
            <div className='relative mx-auto'>
              <Image
                src={Product}
                width={120}
                alt='Bliss Bombs'
                className='mx-auto'
              />
              <div className='w-10 h-10 flex justify-center items-center border-2 border-solid border-gray-400 bg-gray-700 text-white font-bold rounded-full absolute -bottom-3 -right-3 shadow-md  shadow-gray-900/50'>
                x{count}
              </div>
              <div
                className={`w-20 h-20 flex flex-col  border-4 border-solid text-white  rounded-full absolute -top-6 -left-10  items-center justify-center shadow-lg ${stickerStyles}`}
              >
                <span className='text-xs leading-none'>You Save</span>
                <span className='font-black text-xl leading-none mt-1'>
                  ${youSave}
                </span>
              </div>
            </div>
          </div>
          <div className='flex-grow'>
            <h4 className='font-black text-4xl 2xl:text-6xl text-center'>
              ${price}
              <span className='text-xl font-normal'>/each</span>
            </h4>
            <p className='font-medium text-green-600 text-center text-xs'>
              Plus Free Shipping
              <br />
              <em>($8.95 value)</em>
            </p>
            <Link
              href={`https://www.hemplandusa.com/cart/?fill_cart=${count}x1197&utm_source=landing-page&utm_campaign=tictok&utm_content=BuyNow-${count}&apply_coupon=tictok45,tictok25,tictok10`}
              id={`add-to-cart-${count}`}
              className='border-4 border-solid text-white border-fuchsia-400 bg-gradient-to-t  hover:border-fuchsia-300 from-fuchsia-900 hover:text-yellow-200 to-fuchsia-500 rounded-full mx-auto px-0 py-1 flex items-center justify-center font-medium text-2xl my-2 max-w-36'
            >
              <span>Buy Now</span>
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

export default OffersAlt;
