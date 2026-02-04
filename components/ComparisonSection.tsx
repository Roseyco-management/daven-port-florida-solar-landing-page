import ScrollLink from './ScrollLink';
import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: 'Lifespan', vinyl: '30+ years', wood: '10-15 years', chainLink: '15-20 years' },
  { feature: 'Maintenance', vinyl: 'None (just hose off)', wood: 'Paint/stain every 2-3 years', chainLink: 'Rust treatment needed' },
  { feature: 'Privacy', vinyl: '100% privacy', wood: 'Gaps develop over time', chainLink: 'Zero privacy' },
  { feature: 'Florida weather', vinyl: 'UV & hurricane resistant', wood: 'Warps, rots, mold', chainLink: 'Rusts, bends in storms' },
  { feature: 'Curb appeal', vinyl: 'Always looks new', wood: 'Fades and grays', chainLink: 'Industrial look' },
  { feature: 'Resale value', vinyl: 'Adds $15K+ to home value', wood: 'Adds value if maintained', chainLink: 'Can lower value' },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Smart Homeowners Choose Vinyl
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wood rots. Chain link rusts. Vinyl lasts forever. Here&apos;s the side-by-side comparison.
          </p>
        </div>

        {/* Mobile-friendly comparison cards */}
        <div className="lg:hidden space-y-6 mb-12">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">{item.feature}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-500">Vinyl:</span>
                    <p className="text-gray-900 font-medium">{item.vinyl}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-500">Wood:</span>
                    <p className="text-gray-600">{item.wood}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-500">Chain Link:</span>
                    <p className="text-gray-600">{item.chainLink}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop comparison table */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-200 mb-12">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                <th className="text-left py-4 px-6 font-semibold text-emerald-600 bg-emerald-50">Vinyl (Our Pick)</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-500">Wood</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-500">Chain Link</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">{item.feature}</td>
                  <td className="py-4 px-6 bg-emerald-50/50">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-900">{item.vinyl}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{item.wood}</td>
                  <td className="py-4 px-6 text-gray-600">{item.chainLink}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            The math is simple: <span className="font-semibold text-gray-900">vinyl costs more upfront but saves you thousands over time.</span>
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>See How Much You&apos;ll Save</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
