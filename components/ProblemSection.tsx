'use client';

import ScrollLink from './ScrollLink';
import { TrendingUp, Zap, DollarSign, Clock } from 'lucide-react';

const problems = [
  {
    icon: TrendingUp,
    problem: 'Electric bills keep climbing',
    description: 'Rates go up every year while you watch your money disappear to the power company',
  },
  {
    icon: Zap,
    problem: 'Grid outages leave you powerless',
    description: 'Storms and blackouts mean no AC, no fridge, no lights — and no control',
  },
  {
    icon: DollarSign,
    problem: 'Missing out on tax credits',
    description: 'The 30% federal tax credit won\'t last forever — every month you wait costs you',
  },
  {
    icon: Clock,
    problem: 'Wasting Florida sunshine',
    description: 'Your roof is soaking up free energy every day and turning it into nothing',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-amber-950">
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
              className="bg-amber-900/50 border border-amber-800 rounded-xl p-6 flex gap-4"
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

        <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            There&apos;s a Better Way
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Solar panels solve all of these problems — and pay for themselves while adding value to your home. Lock in your rate. Own your power. Start saving today.
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all duration-300"
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
