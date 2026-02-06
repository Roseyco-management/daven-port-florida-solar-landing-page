'use client';

import ScrollLink from './ScrollLink';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-10">
      {/* Background Photo */}
      <Image
        src="/photo_2026-02-06_23-03-32.jpg"
        alt="Solar panels installed on a Florida rooftop"
        fill
        className="object-cover"
        priority
      />

      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-orange-950/80 to-orange-950/85" />

      {/* Subtle pattern on top */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl animate-fade-in-up">
        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
          Find out if your house qualifies for solar in Davenport, Florida today.
        </h1>

        {/* Sub-headline */}
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Premium solar panels that can lower your bill from month one — and potentially pay for themselves over time.
        </p>

        {/* Value Props */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
            <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-white/90 text-sm font-medium">No third party sales rep, you do it yourself</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
            <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-white/90 text-sm font-medium">Get your results in 3 minutes or less</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
            <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-white/90 text-sm font-medium">We won&apos;t waste your time</span>
          </div>
        </div>

        {/* CTA Button */}
        <ScrollLink
          href="#estimate-form"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-9 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300"
        >
          <span>Get My Free Quote</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </ScrollLink>
        <p className="text-white/50 text-sm mt-4">No pressure. No obligation. Just honest, local pricing.</p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-xl relative">
          <div className="w-1 h-2 bg-white/60 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-scroll" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
