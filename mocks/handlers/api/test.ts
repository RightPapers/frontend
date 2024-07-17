import { http, HttpResponse } from 'msw';

export const getData = http.get('/api/test', ({ request }) => {
  const url = new URL(request.url);
  console.log(url);
  return HttpResponse.json({ data: 'hello world' }, { status: 200 });
});
