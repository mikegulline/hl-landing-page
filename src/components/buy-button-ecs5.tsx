import Link from 'next/link';
import { FcOk } from 'react-icons/fc';
import { FcLock } from 'react-icons/fc';

const BuyButtonECS5 = () => (
  <div className=' inline-block mt-5'>
    <Link
      href='/#buy-now'
      className='group flex items-center bg-gradient-to-t from-blue-600/50 hover:from-green-600/50 hover:to-green-100 to-blue-100 rounded-full  border-4 border-solid border-blue-800 hover:border-green-600 relative py-1 shadow-lg shadow-gray-600/30 hover:shadow-green-800/30'
    >
      <div className=' text-5xl -left-1 rounded-full p-2 border-4 border-solid border-blue-800 group-hover:border-green-600 bg-gradient-to-t from-green-200 to-white absolute shadow-lg shadow-gray-600/30 group-hover:shadow-green-800/30'>
        <FcLock />
      </div>
      <div className='flex flex-col justify-center pl-20 pr-8 '>
        <div className='font-black text-lg sm:text-xl text-left'>
          Buy Cannabitol ECS5
        </div>
        <div className='flex items-center gap-1'>
          <div className='w-5 h-5 border border-solid border-blue-800 group-hover:border-green-600 bg-white rounded-full flex justify-center items-center'>
            <FcOk />
          </div>
          <p className='text-xs'>Safe and secure checkout</p>
        </div>
      </div>
    </Link>
  </div>
);

export default BuyButtonECS5;
