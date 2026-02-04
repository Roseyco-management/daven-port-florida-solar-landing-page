import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      propertyRole,
      preferredDate,
      preferredTime,
      notes,
    } = body;

    // Check if Resend API key is configured (not missing or placeholder)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === '...' || apiKey === 'your_resend_api_key_here') {
      // Placeholder mode - log the submission and return success
      console.log('=== New Estimate Request (Placeholder Mode) ===');
      console.log('Name:', firstName, lastName);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Address:', address, city, state, zip);
      console.log('Property Role:', propertyRole);
      console.log('Preferred Date:', preferredDate);
      console.log('Preferred Time:', preferredTime);
      console.log('Notes:', notes);
      console.log('===============================================');

      return NextResponse.json({
        success: true,
        id: 'placeholder-' + Date.now(),
        message: 'Form submitted (email not configured)'
      });
    }

    // Production mode - send email via Resend
    const { Resend } = await import('resend');
    const EstimateRequestEmail = (await import('@/emails/estimate-request')).default;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Davenport Fences <onboarding@resend.dev>',
      to: [process.env.BUSINESS_EMAIL || 'your-email@example.com'],
      replyTo: email,
      subject: `New Fence Estimate Request - ${firstName} ${lastName}`,
      react: EstimateRequestEmail({
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        zip,
        propertyRole,
        preferredDate,
        preferredTime,
        notes,
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
