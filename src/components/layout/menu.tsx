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
          <div className='px-5 w-full flex flex-col justify-between h-full pt-16 pb-5 md:pt-20 md:pb-10'>
            <ul>
              <li className='border-b-4 border-fuchsia-300 border-solid'>
                <Link
                  href='https://www.hemplandusa.com/shop-cbd/'
                  className='text-white text-4xl md:text-5xl xl:text-6xl block py-6 2xl:py-8 uppercase font-black hover:text-fuchsia-400'
                >
                  Home
                </Link>
              </li>
              <li className='border-b-4 border-fuchsia-300 border-solid'>
                <Link
                  href='/'
                  className='text-white text-4xl md:text-5xl xl:text-6xl block py-6 2xl:py-8 uppercase font-black hover:text-fuchsia-400'
                >
                  Buy Now
                </Link>
              </li>
              <li className='border-b-4 border-fuchsia-300 border-solid'>
                <Link
                  href='/'
                  className='text-white text-4xl md:text-5xl xl:text-6xl block py-6 2xl:py-8 uppercase font-black hover:text-fuchsia-400'
                >
                  Special Offers
                </Link>
              </li>
              <li className='border-b-4 border-fuchsia-300 border-solid'>
                <Link
                  href='https://www.hemplandusa.com/guarantee/'
                  className='text-white text-4xl md:text-5xl xl:text-6xl block py-6 2xl:py-8 uppercase font-black hover:text-fuchsia-400'
                >
                  Grarantee
                </Link>
              </li>
            </ul>
            <ul className='mt-5 md:mt-10 flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-5'>
              <li className='w-full border-t-4 border-fuchsia-300 border-solid pt-5 md:border-t-0 md:pt-0'>
                <span className='text-white block'>
                  &copy; 2024 HempLand® USA, INC
                </span>
              </li>
              <li className='hidden md:flex flex-grow'></li>
              <li>
                <Link
                  href='https://www.hemplandusa.com/contact-us/'
                  className=' text-white font-light block underline hover:text-fuchsia-400'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.hemplandusa.com/returns/'
                  className=' text-white font-light block underline hover:text-fuchsia-400'
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.hemplandusa.com/terms/'
                  className=' text-white font-light block underline hover:text-fuchsia-400'
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.hemplandusa.com/privacy/'
                  className=' text-white font-light block underline hover:text-fuchsia-400'
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
    className={`hover-wiggle flex justify-center z-30 items-center w-14 h-14 md:w-20 md:h-20 rounded-xl
  ${
    open
      ? 'text-fuchsia-950 bg-fuchsia-300 hover:bg-white'
      : 'text-white bg-black hover:bg-fuchsia-900'
  }
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
      className={` pointer-events-auto absolute inset-0 bg-gradient-to-t from-fuchsia-800 to-fuchsia-950 z-20 transition-transform duration-200 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {children}
    </div>
  </div>
);
