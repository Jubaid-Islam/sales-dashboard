import { NextResponse } from 'next/server';
import { mockSalesData } from '@/lib/data/mockSales';

export async function GET() {
  return NextResponse.json(mockSalesData, { status: 200 });
}