import Link from 'next/link';

export default function Footer() {
  return (
    <>
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
                  href='/contact'
                  className=' text-white font-light block underline hover:text-fuchsia-400'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='/returns'
                  className=' text-white font-light block underline hover:text-fuchsia-400'
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className=' text-white font-light block underline hover:text-fuchsia-400'
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className=' text-white font-light block underline hover:text-fuchsia-400'
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' bg-white'>
        <div className='container mx-auto'>
          <div className='p-5 text-sm'>
            <div className='max-w-screen-lg mx-auto'>
              <p className=' text-black p-2 font-medium leading-none bg-white border-2 border-solid border-black'>
                *All information contained within this site is for reference
                purposes only and are not intended to substitute the advice
                given by a pharmacist, physician, or any other licensed
                health-care professional. These statements have not been
                evaluated by the Food and Drug Administration. This product is
                not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
