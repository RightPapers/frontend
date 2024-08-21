import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'GET feedback' });
}

export async function POST(request: Request) {
  const { video_id, feedback_text } = await request.json();
  return NextResponse.json({ video_id, feedback_text });
}
