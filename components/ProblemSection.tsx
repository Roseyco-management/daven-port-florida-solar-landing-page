'use client';

import ScrollLink from './ScrollLink';
import { TrendingUp, Zap, DollarSign, Clock } from 'lucide-react';

const problems = [
  {
    icon: TrendingUp,
    problem: 'Electric bills keep climbing',
    description: 'Florida electricity rates have increased around 18\u201320% since 2021, and there\u2019s no sign they\u2019re slowing down',
  },
  {
    icon: Zap,
    problem: 'Grid outages leave you powerless',
    description: 'Storms and blackouts can mean no AC, no fridge, no lights \u2014 and no control',
  },
  {
    icon: DollarSign,
    problem: 'Missing out on tax credits',
    description: 'The 30% federal Residential Clean Energy tax credit is here now, but it won\u2019t last forever',
  },
  {
    icon: Clock,
    problem: 'Wasting Florida sunshine',
    description: 'Davenport gets over 5.5 peak sun hours per day \u2014 your roof is soaking up free energy and turning it into nothing',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-orange-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Is Your Electric Bill Working Against You?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every month without solar is money you&apos;re giving away...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-orange-900/50 border border-orange-800 rounded-xl p-6 flex gap-4"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.problem}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            There&apos;s a Better Way
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Solar panels can lower your monthly electric bill, lock in your rate, and add value to your home over time.
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Claim Your Free Quote</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
