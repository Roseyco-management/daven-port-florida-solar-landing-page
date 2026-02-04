import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Free Solar Quote | Davenport, Florida',
  description:
    'Get a free solar panel quote in Davenport, Florida. $0 Down, $0 Installation, 0% Interest O.A.C. Start saving on your electric bill today!',
  keywords: 'solar panels, solar installation, Davenport Florida, free quote, solar contractor, renewable energy',
  openGraph: {
    title: 'Free Solar Quote | Davenport, Florida',
    description:
      'Get a free solar panel quote in Davenport, Florida. $0 Down, $0 Installation, 0% Interest O.A.C.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
