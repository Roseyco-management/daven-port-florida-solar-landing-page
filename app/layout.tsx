import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Free Vinyl Fence Estimate | Davenport, Florida',
  description:
    'Get a free vinyl fence estimate in Davenport, Florida. $0 Down, $0 Installation, 0% Interest O.A.C. Schedule your free estimate today!',
  keywords: 'vinyl fence, fence installation, Davenport Florida, free estimate, fence contractor',
  openGraph: {
    title: 'Free Vinyl Fence Estimate | Davenport, Florida',
    description:
      'Get a free vinyl fence estimate in Davenport, Florida. $0 Down, $0 Installation, 0% Interest O.A.C.',
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
