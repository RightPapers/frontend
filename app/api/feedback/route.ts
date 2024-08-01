import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'GET feedback' });
}

export async function POST(request: Request) {
  return NextResponse.json({ message: '피드백 감사합니다!' });
}
