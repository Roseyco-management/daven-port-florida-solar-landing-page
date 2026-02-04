'use client';

import { useState } from 'react';
import ScrollLink from './ScrollLink';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does a vinyl fence cost?',
    answer: 'Every property is different, which is why we provide free, no-obligation quotes. On average, homeowners invest $3,000-$8,000 depending on yard size and fence style. Remember: vinyl costs more upfront but saves thousands in maintenance over 30+ years.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential fences are installed in just one day. Larger properties may take 2 days. We\'ll give you an exact timeline during your free estimate.',
  },
  {
    question: 'Do I need a permit?',
    answer: 'In most Davenport areas, yes. Don\'t worry — we handle all permit paperwork for you as part of our service. No extra charge, no headaches.',
  },
  {
    question: 'What about HOA approval?',
    answer: 'We\'re familiar with most HOA requirements in the Davenport area. We\'ll help you choose a fence style that meets your HOA guidelines and can provide documentation they typically need.',
  },
  {
    question: 'How does financing work?',
    answer: 'We offer $0 down, 0% interest financing on approved credit. Pay over time while enjoying your new fence today. We\'ll discuss all payment options during your estimate.',
  },
  {
    question: 'What if I don\'t like the quote?',
    answer: 'No pressure, ever. Our estimates are 100% free with no obligation. If it\'s not the right fit or timing, no hard feelings. We\'d rather earn your trust than push a sale.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-gray-600">
            Everything you need to know before getting your free quote.
          </p>
        </div>

        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <p className="text-gray-900 font-semibold mb-2">Still have questions?</p>
          <p className="text-gray-600 mb-6">
            Get all your questions answered during your free, no-pressure estimate.
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Schedule My Free Estimate</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
