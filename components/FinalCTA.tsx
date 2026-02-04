import ScrollLink from './ScrollLink';
import { Clock, Calendar, Shield } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Perfect Fence is One Call Away
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Stop putting it off. Stop getting quotes that go nowhere. Get a real price from a local team that shows up, does the work, and stands behind it.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Quote in 24 Hours</p>
                <p className="text-sm text-emerald-200">Usually same day</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Install This Month</p>
                <p className="text-sm text-emerald-200">Limited spots available</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Lifetime Warranty</p>
                <p className="text-sm text-emerald-200">We stand behind our work</p>
              </div>
            </div>
          </div>

          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-gray-900 px-10 py-5 rounded-xl text-xl font-bold shadow-2xl shadow-amber-400/40 hover:shadow-amber-300/50 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Claim Your Free Quote Now</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </ScrollLink>

          <p className="text-emerald-200 text-sm mt-6">
            Takes 60 seconds. No credit card required. No obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
