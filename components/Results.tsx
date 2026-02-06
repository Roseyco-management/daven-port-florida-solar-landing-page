import ScrollLink from './ScrollLink';
import Image from 'next/image';

const installations = [
  {
    src: '/photo_2026-02-06_23-08-52.jpg',
    alt: 'Black solar panels installed on a shingle rooftop in Davenport',
  },
  {
    src: '/photo_2026-02-06_23-08-55.jpg',
    alt: 'Solar panels staged and ready for rooftop installation',
  },
  {
    src: '/photo_2026-02-06_23-08-59.jpg',
    alt: 'Installer wiring the electrical panel for a solar system',
  },
  {
    src: '/photo_2026-02-06_23-09-02.jpg',
    alt: 'Davenport home with solar panels installed on the roof',
  },
];

export default function Results() {
  return (
    <section id="results" className="py-20 bg-orange-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real Installations. Real Homes.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See our work across Davenport neighborhoods. Your home could be generating power this month.
          </p>
        </div>

        {/* Photo Grid: 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {installations.map((photo, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Ready to start saving with solar?
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-400/50 hover:-translate-y-1 transition-all duration-300"
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
