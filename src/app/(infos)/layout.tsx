import Link from 'next/link';
export default function InfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='p-5 bg-fuchsia-900'>
        <ul className='flex  justify-center items-center gap-5'>
          <li>
            <Link
              href='/'
              className=' text-white font-light block underline hover:text-fuchsia-400'
            >
              Home
            </Link>
          </li>
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
      {children}
    </>
  );
}
