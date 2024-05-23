import Logo from '@/components/logo';
import Menu from '@/components/layout/menu';

export default function Header() {
  return (
    <div>
      <div className='container mx-auto'>
        <div className=' px-5'>
          <div className='flex justify-between items-center'>
            <span className='hidden md:flex justify-center items-center w-14 h-14 text-2xl rounded-full invisible'>
              Shim
            </span>
            <Logo />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
