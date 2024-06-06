import Image from 'next/image';
import CC from '../../public/images/cc.png';
import { FcLock } from 'react-icons/fc';

const OldOffers = () => {
  const handleClick = (id: number, count: number) => {
    const link = window.location.replace(
      `https://www.hemplandusa.com/cart/?fill_cart=${count}x${id}&utm_source=landing-page&utm_campaign=tictok&utm_content=BuyNow-${count}&apply_coupon=tictok45,tictok25,tictok10`
    );
  };
  return (
    <>
      <div className='rounded-xl overflow-hidden mt-8 border-4 lg:border-8 border-fuchsia-300 border-solid'>
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
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                6
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                45%
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-yellow-200 group-hover:bg-gray-800'>
                $510
                <sup className='text-[60%] hidden lg:inline'>.00</sup>
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                $229
                <sup className='text-[60%] hidden lg:inline'>.50</sup>
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-solid text-fuchsia-300 group-hover:bg-gray-800'>
                $280
                <sup className='text-[60%] hidden lg:inline'>.50</sup>
              </td>
            </tr>

            <tr
              className='border-b border-b-gray-400 border-solid group'
              onClick={() => handleClick(1197, 3)}
            >
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                3
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                25%
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-yellow-200 group-hover:bg-gray-800'>
                $255
                <sup className='text-[60%] hidden lg:inline'>.00</sup>
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                $63
                <sup className='text-[60%] hidden lg:inline'>.75</sup>
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-solid text-fuchsia-300 group-hover:bg-gray-800'>
                $191
                <sup className='text-[60%] hidden lg:inline'>.25</sup>
              </td>
            </tr>
            <tr
              className='border-b border-b-gray-400 border-solid group'
              onClick={() => handleClick(1197, 1)}
            >
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                1
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                10%
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-yellow-200 group-hover:bg-gray-800'>
                $85
                <sup className='text-[60%] hidden lg:inline'>.00</sup>
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-r-gray-700 border-solid border-r text-white group-hover:bg-gray-800'>
                $8
                <sup className='text-[60%] hidden lg:inline'>.50</sup>
              </td>
              <td className='cursor-pointer pointer-events-auto h-16 font-black text-xl lg:text-3xl border-0 text-center bg-black border-solid text-fuchsia-300 group-hover:bg-gray-800'>
                $76
                <sup className='text-[60%] hidden lg:inline'>.50</sup>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='p-2 bg-white sm:flex justify-between '>
          <ul className='flex justify-center sm:justify-start items-center gap-2'>
            <li>
              <div className=' w-8 h-8 border border-solid border-green-700 bg-green-100 rounded-full flex justify-center items-center'>
                <FcLock className='scale-125' />
              </div>
            </li>
            <li className='text-black text-xs leading-tight font-bold'>
              <p>Safe and secure checkout</p>
              <p>100% Guaranteed</p>
            </li>
          </ul>
          <div className='sm:hidden border-t border-dashed border-fuchsia-950 my-2'></div>
          <ul className='flex gap-2 items-center justify-between sm:justify-center'>
            <li className=' w-12 h-auto overflow-hidden rounded border border-solid border-[#1b1d74]'>
              <div className='w-48 relative'>
                <Image src={CC} alt='Credit cards accepted' width={192} />
              </div>
            </li>
            <li className=' w-12 h-auto overflow-hidden rounded border border-solid border-[#eb001b]'>
              <div className='w-48 relative -left-12'>
                <Image src={CC} alt='Credit cards accepted' width={192} />
              </div>
            </li>
            <li className=' w-12 h-auto overflow-hidden rounded border border-solid border-[#016fd0]'>
              <div className='w-48 relative -left-24'>
                <Image src={CC} alt='Credit cards accepted' width={192} />
              </div>
            </li>
            <li className=' w-12 h-auto overflow-hidden rounded border border-solid border-[#ef7622]'>
              <div className='w-48 relative -left-36'>
                <Image src={CC} alt='Credit cards accepted' width={192} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OldOffers;
