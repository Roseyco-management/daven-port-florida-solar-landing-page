import ScrollLink from './ScrollLink';



export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 relative overflow-hidden">
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
            Energy Freedom is One Call Away
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Stop paying rising utility bills. Stop waiting for the &quot;right time.&quot; Get a real savings projection from a local team that shows up, does the work, and stands behind it.
          </p>

          {/* What happens next */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 max-w-lg mx-auto text-left">
            <p className="text-white font-semibold text-lg mb-4 text-center">What happens after you click:</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-white">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <p className="text-orange-100">Answer a few quick questions about your home.</p>
              </div>
              <div className="flex items-start gap-4 text-white">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <p className="text-orange-100">We design a custom solar layout for your roof.</p>
              </div>
              <div className="flex items-start gap-4 text-white">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <p className="text-orange-100">You get a clear savings report and quote within 24 hours — you decide from there.</p>
              </div>
            </div>
          </div>

          <ScrollLink
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-5 rounded-xl text-xl font-bold shadow-2xl shadow-yellow-400/40 hover:shadow-yellow-300/50 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Get My Free Quote</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </ScrollLink>

          <p className="text-orange-200 text-sm mt-6">
            Takes 60 seconds. No credit card required. No obligation. You can say no.
          </p>
        </div>
      </div>
    </section>
  );
}
