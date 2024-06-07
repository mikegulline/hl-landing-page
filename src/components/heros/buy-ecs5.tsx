import ECS5Offer from './ecs5-offer';

export default function BuyECS5() {
  return (
    <>
      <div className='py-2 bg-green-700'>
        <div className='p-5 '>
          <h3 className='text-center font-bold text-3xl sm:text-6xl text-white'>
            Buy ECS5 Enhanced CANNABITOL® 5000
          </h3>
        </div>
      </div>
      <div className='py-10 bg-green-950'>
        <div className='container max-w-screen-sm lg:max-w-screen-lg mx-auto'>
          <div className='p-5 lg:grid grid-cols-2 gap-20'>
            <div className='flex items-center text-yellow-100'>
              <div className='mb-10 lg:mb-0 text-center lg:text-left'>
                <h3 className='text-yellow-200 text-2xl sm:text-3xl font-bold mb-3'>
                  SPECIAL OFFER
                </h3>
                <p className='text-lg mb-8'>
                  First time buyers receive a 50% discount on their first order!
                  Get $90 ECS5 for only $45 (limit 9 bottles)!{' '}
                  <em>Buy two or more and get Free Shipping ($8.95 value).</em>
                </p>
                <h3 className='text-yellow-200 text-xl font-bold mb-3'>
                  100% Graranteed
                </h3>
                <p className='text-lg'>
                  <em>
                    All orders come with a 100% money back guarantee. No
                    questions asked.
                  </em>
                </p>
              </div>
            </div>
            <div>
              <ECS5Offer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
