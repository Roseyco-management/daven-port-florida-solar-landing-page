import ScrollLink from './ScrollLink';

const stats = [
  { number: '500+', label: 'Solar Installations in Central Florida' },
  { number: '8MW+', label: 'Clean Power Generated' },
  { number: '4.9', label: 'Star Rating from Local Homeowners' },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-900 via-orange-950 to-orange-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Your Neighbors Are Already Saving
        </h2>
        <p className="text-white/70 mb-12 max-w-2xl mx-auto">
          Look around your neighborhood — chances are someone on your street is already generating their own power. Typical Davenport systems are projected to save tens of thousands over 25 years.
        </p>

        <div className="flex flex-wrap justify-center gap-16 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="block text-5xl sm:text-6xl font-extrabold text-yellow-400">
                {stat.number}
              </span>
              <span className="block text-white/90 text-lg mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <ScrollLink
          href="#estimate-form"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300"
        >
          <span>Join 500+ Solar Homeowners</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </ScrollLink>
      </div>
    </section>
  );
}
