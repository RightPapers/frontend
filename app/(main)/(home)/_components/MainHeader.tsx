import Logo from '@/public/assets/right-paper-logo-blue.svg';

const MainHeader = () => {
  return (
    <header className='flex justify-between p-2 text-primary'>
      <Logo />
      <div>
        <h1 className='whitespace-nowrap text-[45px] font-semibold'>
          Right Paper
        </h1>
        <p>오직 올바른 정보만</p>
      </div>
    </header>
  );
};

export default MainHeader;
