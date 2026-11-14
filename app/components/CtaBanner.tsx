import { Link } from "react-router";
import { companyInfo } from "~/content/company";
import { ArrowRight, Sparkles, CheckCircle2, PhoneCall } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 shadow-2xl p-8 sm:p-12 lg:p-16 text-white border border-blue-500/30">
          {/* Subtle geometric background overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <pattern
                  id="ctaGrid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#ctaGrid)" />
            </svg>
          </div>

          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Ready for Scale & Innovation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              {companyInfo.ctaHeadline}
            </h2>

            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {companyInfo.ctaSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-800 font-bold rounded-xl shadow-lg hover:bg-blue-50 hover:shadow-cyan-500/20 transition-all duration-200 flex items-center justify-center gap-2 text-base group"
              >
                <span>Schedule Free Architecture Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${companyInfo.contact.phoneRaw}`}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/25 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 text-base"
              >
                <PhoneCall className="w-5 h-5 text-cyan-300" />
                <span>Call Us Directly</span>
              </a>
            </div>

            {/* Trust checkmarks */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                <span>Zero Obligation Review</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                <span>100% Intellectual Property Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                <span>24-Hour Engineer Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

