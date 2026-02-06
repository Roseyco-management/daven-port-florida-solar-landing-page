'use client';

import { useState } from 'react';
import ScrollLink from './ScrollLink';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does a solar system cost?',
    answer: 'Many Davenport homeowners see system costs in the tens of thousands before incentives, but financing often makes the monthly payment lower than their current electric bill. Plus, you get the 30% federal Residential Clean Energy tax credit \u2014 that\u2019s real money back in your pocket. Every home is different, which is why we provide free, customized quotes.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most residential solar systems are installed in just 1\u20132 days once permits are cleared. The permitting process typically takes 2\u20134 weeks, but we handle all the paperwork for you. From signing to flipping the switch, expect about 4\u20136 weeks total.',
  },
  {
    question: 'Do I need HOA approval?',
    answer: 'Florida has strong solar rights laws \u2014 your HOA cannot prohibit solar panels. We\u2019ll help you navigate any guidelines they do have and provide all documentation needed for a smooth approval.',
  },
  {
    question: 'What happens during power outages?',
    answer: 'Standard grid-tied systems shut off during outages for safety. Want backup power? We offer battery storage options that keep your essentials running when the grid goes down.',
  },
  {
    question: 'What if my roof isn\u2019t perfect for solar?',
    answer: 'Not every roof is ideal, and we\u2019ll tell you honestly. We assess shading, roof age, and orientation before recommending a system. If your roof needs work first, we\u2019ll let you know upfront \u2014 no surprises.',
  },
  {
    question: 'What happens if I move?',
    answer: 'Solar can increase your home\u2019s resale value. Studies show homes with solar sell faster and for more. Your system becomes a selling point, not a liability.',
  },
  {
    question: 'How does financing work?',
    answer: 'We offer $0 down financing with payments often lower than your current electric bill. Many homeowners see positive cash flow from day one. We\u2019ll show you all options during your free consultation.',
  },
  {
    question: 'What if I don\u2019t like the quote?',
    answer: 'If you don\u2019t like the quote, you walk away. No fees, no contracts, no hard-sell. We\u2019d rather be your most transparent bid than your pushiest one.',
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
            className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Get My Free Quote</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
