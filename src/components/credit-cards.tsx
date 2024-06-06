import Image from 'next/image';
import CC from '../../public/images/cc.png';

const CreditCards = () => (
  <ul className='flex gap-1 items-center justify-center scale-90'>
    <li className=' w-10 h-auto overflow-hidden rounded border border-solid border-[#1b1d74]'>
      <div className='w-40 relative'>
        <Image src={CC} alt='Credit cards accepted' width={160} />
      </div>
    </li>
    <li className=' w-10 h-auto overflow-hidden rounded border border-solid border-[#eb001b]'>
      <div className='w-40 relative -left-10'>
        <Image src={CC} alt='Credit cards accepted' width={160} />
      </div>
    </li>
    <li className=' w-10 h-auto overflow-hidden rounded border border-solid border-[#016fd0]'>
      <div className='w-40 relative -left-20'>
        <Image src={CC} alt='Credit cards accepted' width={160} />
      </div>
    </li>
    <li className=' w-10 h-auto overflow-hidden rounded border border-solid border-[#ef7622]'>
      <div className='w-40 relative -left-[7.5rem]'>
        <Image src={CC} alt='Credit cards accepted' width={160} />
      </div>
    </li>
  </ul>
);

export default CreditCards;
