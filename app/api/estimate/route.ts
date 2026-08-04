import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import EstimateRequestEmail from '@/emails/estimate-request';


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

    const resend = new Resend(process.env.RESEND_API_KEY);
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

    // Save to Supabase — non-blocking, email is the source of truth
    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );
      const { error: dbError } = await supabase.from('leads').insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        address,
        property_role: propertyRole,
      });
      if (dbError) console.error('Supabase insert error:', dbError);
    } catch (dbException) {
      console.error('Supabase exception:', dbException);
    }

    // Redacted agency notification to Elevateo — first name + interest only, no
    // contact details or address (GDPR data-minimisation). Best-effort; never
    // blocks the client's own alert above.
    try {
      await resend.emails.send({
        from: 'Davenport Solar <info@landingpage.davenportfloridasolar.com>',
        to: ['team@elevateoco.com'],
        subject: 'New lead — Davenport Solar',
        text: [
          'New lead — Davenport Solar',
          `Name: ${firstName ?? ''}`,
          `Interest: Solar quote${propertyRole ? ` (${propertyRole})` : ''}`,
          'Source: Solar quote form',
          '',
          'Contact details & address withheld — full lead sent to the client.',
        ].join('\n'),
      });
    } catch (agencyErr) {
      console.error('Agency notify error:', agencyErr);
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
