export default function Contact() {
  return (
    <div className='background  text-white/80 overflow-hidden relative bg-fuchsia-950'>
      <div className='container max-w-screen-md mx-auto py-10 lg:py-20'>
        <div className='px-5'>
          <h1 className='font-black text-6xl text-fuchsia-400 pb-5 mb-5 border-b border-solid border-fuchsia-400/50'>
            Contact Us
          </h1>
          <div className='sm:grid grid-cols-4 pb-5 mb-5 border-b border-dashed border-fuchsia-400/50'>
            <div>
              <h3 className='font-black text-fuchsia-300'>By Phone</h3>
            </div>
            <div className=' col-span-3'>
              <p>
                Call (888) 626-HEMP (4367) now, and speak with a highly trained
                customer service representative if you wish to place an order by
                phone or seek further information.
              </p>
            </div>
          </div>
          <div className='sm:grid grid-cols-4 pb-5 mb-5 border-b border-dashed border-fuchsia-400/50'>
            <div>
              <h3 className='font-black text-fuchsia-300'>By Email</h3>
            </div>
            <div className=' col-span-3'>
              <p>
                If you&apos;d like to contact us by email, please send your
                request to info@hemplandusa.com and we will respond within 24
                hours.
              </p>
            </div>
          </div>
          <div className='sm:grid grid-cols-4 pb-5 mb-5 border-b border-dashed border-fuchsia-400/50'>
            <div>
              <h3 className='font-black text-fuchsia-300'>Product Returns</h3>
            </div>
            <div className=' col-span-3'>
              <p>
                Not satisfied with your HempLand® USA product? We are sorry to
                hear that. Click here to learn more about the return process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
