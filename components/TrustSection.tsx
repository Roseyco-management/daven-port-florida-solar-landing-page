import ScrollLink from './ScrollLink';

const stats = [
  { number: '500+', label: 'Happy Families' },
  { number: '15+', label: 'Years in Davenport' },
  { number: '4.9', label: 'Star Rating' },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-950 to-green-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Your Neighbors Already Love Us
        </h2>
        <p className="text-white/70 mb-12 max-w-2xl mx-auto">
          Ask around — chances are someone on your street has a fence from us.
        </p>

        <div className="flex flex-wrap justify-center gap-16 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="block text-5xl sm:text-6xl font-extrabold text-emerald-400">
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
          className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300"
        >
          <span>Join 500+ Happy Homeowners</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </ScrollLink>
      </div>
    </section>
  );
}
