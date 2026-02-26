import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const apiUrl = 'https://apis-uat.mytelpay.com.mm:8000/api/v1/paygw/orders';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Merchant-Id': 'MERCHANT_001',
        'X-Signature': 'gY3/H9toO1eMF/WpiEblYhAeUKidBZc4CJzga2JFMRUbKo1OCUGkfWb3Nnt84BTc0sT4zp5UvEiJQoY4NP8dow==',
        'X-Nonce': '2f6a9c1e-7b4d-4e58-8a03-5d1c9e6b4f2a',
        'X-Timestamp': '1769064188023',
        'X-API-Key': ''
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
