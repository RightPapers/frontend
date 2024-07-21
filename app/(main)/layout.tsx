function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-w-screen flex min-h-screen w-full justify-center bg-gray-400 px-5'>
      {children}
    </main>
  );
}

export default Layout;
