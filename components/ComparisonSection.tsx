import ScrollLink from './ScrollLink';
import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: 'Monthly Cost', solar: 'Locked-in low payment', utility: 'Increases 3\u20135% yearly', lease: 'Escalating payments' },
  { feature: 'Ownership', solar: 'You own it 100%', utility: 'Renting power forever', lease: 'Company owns panels' },
  { feature: 'Home Value', solar: 'Can add $20K+ to value', utility: 'No added value', lease: 'Can complicate sale' },
  { feature: 'Tax Credits', solar: '30% federal credit (yours)', utility: 'None', lease: 'Company keeps them' },
  { feature: 'Savings Over 25 Years', solar: 'Often estimated at $70K\u2013$80K in avoided costs', utility: '$0 \u2014 only rising expenses', lease: 'Limited savings, less control' },
  { feature: 'Energy Independence', solar: 'Full control + battery option', utility: 'At mercy of the grid', lease: 'Partial independence' },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Smart Homeowners Choose Solar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Utility bills keep climbing. Leases have hidden catches. Ownership wins every time. Here&apos;s the real comparison.
          </p>
        </div>

        {/* Mobile-friendly comparison cards */}
        <div className="lg:hidden space-y-6 mb-12">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">{item.feature}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-500">Own Solar:</span>
                    <p className="text-gray-900 font-medium">{item.solar}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-500">Utility Power:</span>
                    <p className="text-gray-600">{item.utility}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-500">Solar Lease:</span>
                    <p className="text-gray-600">{item.lease}</p>
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
                <th className="text-left py-4 px-6 font-semibold text-orange-600 bg-orange-50">Own Solar (Best)</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-500">Utility Power</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-500">Solar Lease</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">{item.feature}</td>
                  <td className="py-4 px-6 bg-orange-50/50">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-900">{item.solar}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{item.utility}</td>
                  <td className="py-4 px-6 text-gray-600">{item.lease}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            The math is simple: <span className="font-semibold text-gray-900">owning solar can save you tens of thousands over the life of the system while utility bills only go up.</span>
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300"
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
