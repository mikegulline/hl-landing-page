import Link from 'next/link';

export default function Footer() {
  return (
    <div className=' bg-fuchsia-900'>
      <div className='container mx-auto'>
        <div className='p-5'>
          <ul className='flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-5'>
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
    </div>
  );
}
