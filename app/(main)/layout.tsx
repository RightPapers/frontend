export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen w-full items-center justify-center bg-gray-200 px-5'>
      <div className='w-full max-w-mobile mobile:max-w-full'>{children}</div>
    </main>
  );
}
