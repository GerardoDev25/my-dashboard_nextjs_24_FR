import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({
    count: 100,
    method: request.method,
  });
}

export async function POST(request: Request) {
  return NextResponse.json({
    count: 100,
    method: request.method,
  });
}
