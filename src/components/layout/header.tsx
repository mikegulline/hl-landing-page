import Logo from '@/components/logo';

export default function Header() {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='p-5'>
          <div className='flex justify-center items-center '>
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}
