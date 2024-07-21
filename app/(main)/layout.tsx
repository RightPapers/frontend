function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-w-screen flex min-h-screen justify-center bg-gray-200 px-5'>
      {children}
    </main>
  );
}

export default Layout;
