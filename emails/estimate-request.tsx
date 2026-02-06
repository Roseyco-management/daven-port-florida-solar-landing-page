import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
} from '@react-email/components';

interface EstimateRequestEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  propertyRole: string;
}

export default function EstimateRequestEmail({
  firstName,
  lastName,
  email,
  phone,
  address,
  propertyRole,
}: EstimateRequestEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Solar Quote Request from {firstName} {lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Solar Quote Request</Heading>

          <Section style={section}>
            <Heading as="h2" style={h2}>Contact Information</Heading>
            <Text style={text}><strong>Name:</strong> {firstName} {lastName}</Text>
            <Text style={text}><strong>Email:</strong> {email}</Text>
            <Text style={text}><strong>Phone:</strong> {phone}</Text>
            <Text style={text}><strong>Role:</strong> {propertyRole === 'homeowner' ? 'Homeowner' : 'Authorized Decision Maker'}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>Property Address</Heading>
            <Text style={text}>{address}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            This quote request was submitted via the Davenport Florida Solar website.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
  borderRadius: '8px',
};

const h1 = {
  color: '#1f2937',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 20px',
  padding: '0',
};

const h2 = {
  color: '#374151',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 12px',
  padding: '0',
};

const section = {
  margin: '24px 0',
};

const text = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '8px 0',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
};

const footer = {
  color: '#9ca3af',
  fontSize: '14px',
  marginTop: '32px',
};
