'use client';
import Link from 'next/link';
import { useState, Dispatch, SetStateAction, FC, ReactNode } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';

export default function Menu() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <MenuToggelButton open={open} setOpen={setOpen} />
      <MenuDrawr open={open}>
        <div className='container lg:max-w-screen-md mx-auto h-full flex items-center '>
          <div className='px-5 w-full'>
            <ul>
              <li className='border-b border-gray-600 border-dashed'>
                <Link
                  href='/'
                  className='text-gray-300 text-4xl md:text-7xl block py-6 md:py-10 uppercase font-black hover:text-white'
                >
                  Home
                </Link>
              </li>
              <li className='border-b border-gray-600 border-dashed'>
                <Link
                  href='/'
                  className='text-gray-300 text-4xl md:text-7xl block py-6 md:py-10 uppercase font-black hover:text-white'
                >
                  Buy Now
                </Link>
              </li>
              <li className='border-b border-gray-600 border-dashed'>
                <Link
                  href='/'
                  className='text-gray-300 text-4xl md:text-7xl block py-6 md:py-10 uppercase font-black hover:text-white'
                >
                  Special Offers
                </Link>
              </li>
              <li className='border-b border-gray-600 border-dashed'>
                <Link
                  href='/'
                  className='text-gray-300 text-4xl md:text-7xl block py-6 md:py-10 uppercase font-black hover:text-white'
                >
                  Grarantee
                </Link>
              </li>
            </ul>
            <ul className='mt-5 md:mt-10 flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-5'>
              <li className='w-full border-t border-gray-600 border-dashed pt-5 md:border-t-0 md:pt-0'>
                <span className='text-white block'>
                  &copy; 2024 HempLand® USA, INC
                </span>
              </li>
              <li className='hidden md:flex flex-grow'></li>
              <li>
                <Link
                  href='/'
                  className=' text-gray-300 font-light block underline hover:text-white'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className=' text-gray-300 font-light block underline hover:text-white'
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className=' text-gray-300 font-light block underline hover:text-white'
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className=' text-gray-300 font-light block underline hover:text-white'
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </MenuDrawr>
    </>
  );
}

//////////////////////
//////////////////////
//////////////////////
////////////////TYPES

interface ToggleValue {
  open: boolean;
}
interface ToggleValueWithChildren extends ToggleValue {
  children: ReactNode;
}
interface Toggle extends ToggleValue {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

//////////////////////
//////////////////////
//////////////////////
///////////COMPONENTS

const MenuToggelButton: FC<Toggle> = ({ open, setOpen }) => (
  <button
    onClick={() => setOpen((o) => !o)}
    className={`flex justify-center z-20 items-center w-14 h-14 md:w-20 md:h-20 rounded-full
  ${open ? 'text-black bg-gray-300 hover:bg-white' : 'text-white bg-black'}
  `}
  >
    {open ? (
      <IoIosClose className='text-4xl md:text-7xl' />
    ) : (
      <IoIosMenu className='text-2xl md:text-4xl' />
    )}
  </button>
);

const MenuDrawr: FC<ToggleValueWithChildren> = ({ children, open }) => (
  <div className='absolute inset-0 overflow-hidden pointer-events-none'>
    <div
      className={` pointer-events-auto absolute inset-0 bg-black z-10 transition-transform duration-200 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {children}
    </div>
  </div>
);
