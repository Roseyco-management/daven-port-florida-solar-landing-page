'use client';

import { useState } from 'react';
import ScrollLink from './ScrollLink';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does a solar system cost?',
    answer: 'Every home is different, which is why we provide free, customized quotes. Most homeowners pay $0 down and less per month than their current electric bill. Plus, you get the 30% federal tax credit — that\'s real money back in your pocket.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential solar systems are installed in just 1-2 days. The permitting process typically takes 2-4 weeks, but we handle all the paperwork for you. From signing to flipping the switch, expect about 4-6 weeks total.',
  },
  {
    question: 'Do I need HOA approval?',
    answer: 'Florida has strong solar rights laws — your HOA cannot prohibit solar panels. We\'ll help you navigate any guidelines they do have and provide all documentation needed for a smooth approval.',
  },
  {
    question: 'What happens during power outages?',
    answer: 'Standard grid-tied systems shut off during outages for safety. Want backup power? We offer battery storage options that keep your essentials running when the grid goes down.',
  },
  {
    question: 'How does financing work?',
    answer: 'We offer $0 down financing with payments often lower than your current electric bill. Many homeowners see positive cash flow from day one. We\'ll show you all options during your free consultation.',
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
            Everything you need to know before getting your free solar quote.
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
            Get all your questions answered during your free, no-pressure consultation.
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Schedule My Free Consultation</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
