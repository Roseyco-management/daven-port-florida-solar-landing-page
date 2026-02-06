import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EstimateRequestEmail from '@/emails/estimate-request';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      propertyRole,
    } = body;

    const { data, error } = await resend.emails.send({
      from: 'Davenport Solar <info@landingpage.davenportfloridasolar.com>',
      to: [process.env.BUSINESS_EMAIL || 'your-email@example.com'],
      replyTo: email,
      subject: `New Solar Quote Request - ${firstName} ${lastName}`,
      react: EstimateRequestEmail({
        firstName,
        lastName,
        email,
        phone,
        address,
        propertyRole,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
