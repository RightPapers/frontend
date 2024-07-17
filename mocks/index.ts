import { handlers } from './handlers';

const initMocks = async () => {
  if (typeof window !== 'undefined') {
    const { setupWorker } = await import('msw/browser');
    const worker = setupWorker(...handlers);
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    });
  } else {
    const { setupServer } = await import('msw/node');
    const server = setupServer(...handlers);
    server.listen({
      onUnhandledRequest: 'bypass',
    });
  }
};

export default initMocks;
