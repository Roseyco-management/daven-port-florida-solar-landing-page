'use client';

import ScrollLink from './ScrollLink';
import { Sun } from 'lucide-react';

const beforeAfter = [
  {
    alt: 'Before solar installation',
    title: 'Before',
    description: 'High electric bills draining your wallet every month',
  },
  {
    alt: 'After solar installation',
    title: 'After',
    description: 'Generating clean energy and massive savings',
  },
];

const gallery = [
  {
    alt: 'Residential rooftop solar installation',
    title: 'Roof Mount System',
    description: 'Sleek panels that blend with your roof design',
    category: 'Residential',
  },
  {
    alt: 'Large solar panel array',
    title: 'Full Roof Coverage',
    description: 'Maximum production for energy-hungry homes',
    category: 'Premium',
  },
  {
    alt: 'Solar installation in Davenport Florida',
    title: 'Florida Optimized',
    description: 'Engineered for our 300+ days of sunshine',
    category: 'Local',
  },
];

export default function Results() {
  return (
    <section id="results" className="py-20 bg-amber-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From High Bills to Energy Freedom
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real installations from your neighbors in Davenport. Your home could be generating power this month.
          </p>
        </div>

        {/* Before/After - Side by Side, Larger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {beforeAfter.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500"
            >
              <div className="aspect-[4/3] relative">
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 flex items-center justify-center">
                  <Sun className="w-16 h-16 text-amber-600/50" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((result, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500"
            >
              {/* Placeholder */}
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 flex items-center justify-center">
                  <Sun className="w-12 h-12 text-amber-600/50" />
                </div>

                {/* Gradient Overlay - Always visible but more intense on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {result.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {result.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    {result.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-400 mb-6">
            Ready to start saving with solar?
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-gray-900 px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-amber-500/30 hover:shadow-amber-400/50 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Get Solar for Your Home</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
