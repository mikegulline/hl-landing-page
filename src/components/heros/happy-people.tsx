import Image from 'next/image';
import HappyMan1 from '../../../public/images/happy-man-01.png';
import HappyMan2 from '../../../public/images/happy-man-02.png';
import HappyMan3 from '../../../public/images/happy-man-03.png';
import HappyMan4 from '../../../public/images/happy-man-04.png';
import HappyWoman1 from '../../../public/images/happy-woman-01.png';
import HappyWoman2 from '../../../public/images/happy-woman-02.png';
import HappyWoman3 from '../../../public/images/happy-woman-03.png';
import HappyWoman4 from '../../../public/images/happy-woman-04.png';

const HappyPeople = () => {
  return (
    <div className='grid grid-cols-4 lg:grid-cols-8'>
      <Image src={HappyMan1} alt='Happy' width={500} />
      <Image src={HappyWoman1} alt='Happy' width={500} />
      <Image src={HappyMan2} alt='Happy' width={500} />
      <Image src={HappyWoman2} alt='Happy' width={500} />
      <Image src={HappyMan3} alt='Happy' width={500} />
      <Image src={HappyWoman3} alt='Happy' width={500} />
      <Image src={HappyMan4} alt='Happy' width={500} />
      <Image src={HappyWoman4} alt='Happy' width={500} />
    </div>
  );
};

export default HappyPeople;
