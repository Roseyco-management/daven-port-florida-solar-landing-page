import ScrollLink from './ScrollLink';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria S.',
    location: 'Davenport, FL',
    text: 'Best decision we made for our home. Our electric bill went from $280 to $12. The crew was professional and finished in one day. Should have done this years ago.',
    rating: 5,
  },
  {
    name: 'James R.',
    location: 'Haines City, FL',
    text: 'Got three quotes. These guys weren\'t the cheapest, but they were the most honest about what we actually needed. No pushy sales tactics. System is producing more than they promised.',
    rating: 5,
  },
  {
    name: 'Patricia M.',
    location: 'Kissimmee, FL',
    text: 'We waited too long to go solar. In 18 months, our system has already saved us over $4,000. Plus we got a nice tax refund. The panels look great on our roof too.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here&apos;s what your neighbors are saying about their solar savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Join hundreds of happy homeowners who made the switch to solar.
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Get Your Free Quote Today</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
