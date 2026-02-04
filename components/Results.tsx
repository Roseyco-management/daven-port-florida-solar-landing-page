'use client';

import Image from 'next/image';
import ScrollLink from './ScrollLink';

const beforeAfter = [
  {
    src: '/results/result-2.jpg',
    alt: 'Before fence installation',
    title: 'Before',
    description: 'Open yard with no privacy or security',
  },
  {
    src: '/results/result-3.jpg',
    alt: 'After fence installation',
    title: 'After',
    description: 'Complete transformation in just one day',
  },
];

const gallery = [
  {
    src: '/results/result-1.jpg',
    alt: 'White vinyl privacy fence installation',
    title: 'Privacy Fence',
    description: '6ft white vinyl for complete backyard privacy',
    category: 'Privacy',
  },
  {
    src: '/results/result-4.jpg',
    alt: 'Long vinyl fence installation',
    title: 'Property Line Fence',
    description: 'Full perimeter protection for large lots',
    category: 'Perimeter',
  },
  {
    src: '/results/result-5.jpg',
    alt: 'Premium vinyl fence in Davenport Florida',
    title: 'Premium Vinyl',
    description: 'Maintenance-free beauty that lasts 30+ years',
    category: 'Premium',
  },
];

export default function Results() {
  return (
    <section id="results" className="py-20 bg-emerald-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From Open Yard to Private Oasis
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real transformations from your neighbors in Davenport. This could be your backyard next week.
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
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

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
              {/* Image */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={result.src}
                  alt={result.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay - Always visible but more intense on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
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
            Ready to transform your property?
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-gray-900 px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-amber-500/30 hover:shadow-amber-400/50 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Get This Look for Your Home</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
