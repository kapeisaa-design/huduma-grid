import { NextResponse } from 'next/server'
export async function POST(req: Request) {
  const body = await req.json()
  return NextResponse.json({ success: true, receipt: 'QGR7XYZ123', amount: body.amount, message: 'STK Push sent' })
}
