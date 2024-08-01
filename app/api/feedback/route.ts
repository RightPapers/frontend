export async function GET() {
  return new Response(
    JSON.stringify({
      message: 'GET feedback',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }
  );
}
