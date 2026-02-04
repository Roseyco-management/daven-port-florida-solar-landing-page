'use client';

import ScrollLink from './ScrollLink';
import { AlertTriangle, Eye, DollarSign, Clock } from 'lucide-react';

const problems = [
  {
    icon: Eye,
    problem: 'Neighbors can see everything',
    description: 'No privacy for your family, pool parties, or backyard BBQs',
  },
  {
    icon: AlertTriangle,
    problem: 'Kids and pets at risk',
    description: 'Without a fence, your yard is open to the street and strangers',
  },
  {
    icon: DollarSign,
    problem: 'Property value stuck',
    description: 'Homes without fences sell for less and sit on the market longer',
  },
  {
    icon: Clock,
    problem: 'Wasting weekends',
    description: 'Wood fences need constant painting, staining, and repairs',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-emerald-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Is Your Backyard Working Against You?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every day without a fence is another day of these headaches...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-900/50 border border-emerald-800 rounded-xl p-6 flex gap-4"
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

        <div className="bg-gradient-to-r from-emerald-500/20 to-amber-500/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            There&apos;s a Better Way
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            A premium vinyl fence solves all of these problems — and pays for itself in increased home value. No maintenance. No rotting. Just peace of mind.
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300"
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
