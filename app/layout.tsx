import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Partytown } from '@qwik.dev/partytown/react';
import './globals.css';
import { MicrosoftClarity } from "./microsoft-clarity";

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
      <head>
        <Partytown
          debug={process.env.NODE_ENV === 'development'}
          forward={["dataLayer.push", "gtag", "fbq", "clarity"]}
        />
        <script
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-11PD134NJC"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-11PD134NJC');
            `,
          }}
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1203368011510821');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1203368011510821&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}  <MicrosoftClarity />
</body>
    </html>
  );
}
