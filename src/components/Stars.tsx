import { FaStar } from 'react-icons/fa';

export default function Stars() {
  return (
    <div className=' inline-block'>
      <div className='border-[#a38469] border-solid border relative -left-2 sm:-left-5 flex justify-start items-center gap-1 text-yellow-500 bg-white p-3 rounded-full mb-2'>
        <FaStar className='w-5 scale-125' />
        <FaStar className='w-5 scale-125' />
        <FaStar className='w-5 scale-125' />
        <FaStar className='w-5 scale-125' />
        <FaStar className='w-5 scale-125' />
      </div>
    </div>
  );
}
