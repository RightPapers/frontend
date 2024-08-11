const background =
  'before:absolute before:inset-0 before:bg-world-map before:bg-top before:bg-no-repeat';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={
        'relative flex min-h-screen w-full items-center justify-center bg-gray-200 px-5 ' +
        background
      }
    >
      <div className='max-w-mobile z-[1] w-full gap-8 mobile:max-w-full'>
        {children}
      </div>
    </main>
  );
}
