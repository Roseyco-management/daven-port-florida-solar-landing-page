import ScrollLink from './ScrollLink';
import Image from 'next/image';
import { Star } from 'lucide-react';

const reviews = [
  { src: '/IMG_0048.jpg', alt: 'Customer review - $0 electric bill after solar installation' },
  { src: '/IMG_0047.jpg', alt: 'Customer review - Senior couple happy with solar installation and service' },
  { src: '/IMG_0046.jpg', alt: 'Customer review - Skeptical at first but Cedrick answered all questions' },
  { src: '/IMG_0032.jpg', alt: 'Customer review - Best solar guy, smooth process, best deal, highly recommend' },
  { src: '/IMG_0049.jpg', alt: 'Customer review - Excellent service, very professional' },
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
            Real reviews from real homeowners in Central Florida. These are actual screenshots — not made up.
          </p>
        </div>

        {/* Top row: 3 reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={review.src}
                alt={review.alt}
                width={600}
                height={400}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>

        {/* Bottom row: 2 reviews centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {reviews.slice(3, 5).map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={review.src}
                alt={review.alt}
                width={600}
                height={400}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Join hundreds of Central Florida homeowners who made the switch.
          </p>
          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300"
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
