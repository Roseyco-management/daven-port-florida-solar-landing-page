import { Sun, Clock, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Sun,
    title: 'Built for Florida',
    description: 'Premium panels engineered for intense sun, humidity, and hurricane-force winds up to 150 mph',
  },
  {
    icon: Clock,
    title: 'Quote in 24 Hours',
    description: 'No waiting weeks for estimates. Get transparent pricing fast so you can make decisions quickly',
  },
  {
    icon: Zap,
    title: 'Same-Week Install',
    description: 'Most systems installed in just 1-2 days. Start generating power and savings immediately',
  },
  {
    icon: Shield,
    title: '25-Year Warranty',
    description: 'Industry-leading warranty on panels and workmanship. We stand behind every installation',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Why 500+ Homeowners Trust Us
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We&apos;re not the cheapest. We&apos;re the best value — because a solar system that lasts 25+ years saves you more than a cheap install that fails in 10.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-amber-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
