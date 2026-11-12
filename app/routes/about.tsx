import { Link } from "react-router";
import { companyInfo } from "~/content/company";
import { CtaBanner } from "~/components/CtaBanner";
import {
  Users,
  Cloud,
  Code2,
  TrendingUp,
  Headphones,
  Award,
  Sparkles,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function meta() {
  return [
    { title: "About Us | Loopsquare Tech - Empowering Businesses Through Technology" },
    {
      name: "description",
      content:
        "We are a technology solutions company dedicated to helping businesses grow through innovative cloud solutions and modern web development.",
    },
  ];
}

export default function About() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-cyan-300 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{companyInfo.about.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
              {companyInfo.about.title}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8">
              We are a technology solutions company dedicated to helping businesses grow through innovative cloud solutions and modern web development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-white text-blue-800 font-bold hover:bg-blue-50 shadow-lg transition-colors flex items-center gap-2 text-sm"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/20 transition-colors flex items-center gap-2 text-sm"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Company Overview Narrative */}
          <div className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Who We Are & What We Stand For
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed">
              <p>{companyInfo.about.p1}</p>
              <p>{companyInfo.about.p2}</p>
            </div>

            {/* Official Logo Display */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="bg-white p-3 rounded-xl shadow-md border border-slate-200">
                <img
                  src="/images/logo.jpg"
                  alt="Loopsquare Tech Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center sm:text-right font-medium">
                Turning bold technical ideas into scalable, intelligent solutions since day one.
              </div>
            </div>
          </div>

          {/* Mission & Vision Deep Dive */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {companyInfo.mission.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">
                  "{companyInfo.mission.statement}"
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {companyInfo.mission.description}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {companyInfo.vision.title}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg mb-4">
                  "{companyInfo.vision.statement}"
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {companyInfo.vision.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4 tracking-tight">
              Why Choose Us?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Six core commitments that guide every project, architecture, and client relationship at Loopsquare Tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.whyChooseUs.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    {idx === 0 && <Users className="w-6 h-6" />}
                    {idx === 1 && <Cloud className="w-6 h-6" />}
                    {idx === 2 && <Code2 className="w-6 h-6" />}
                    {idx === 3 && <TrendingUp className="w-6 h-6" />}
                    {idx === 4 && <Headphones className="w-6 h-6" />}
                    {idx === 5 && <Award className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-500 dark:text-slate-400">{pillar.statLabel}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">{pillar.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Our Core Engineering Principles
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              How we consistently ship resilient cloud architectures and blazing-fast web software.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Security by Default",
                desc: "Zero Trust architecture, least privilege access, automated vulnerability scans, and encrypted communication channels in every build.",
              },
              {
                title: "Observable & Self-Healing",
                desc: "Distributed health checks, automated failovers, and centralized telemetry with Prometheus, Grafana, and CloudWatch.",
              },
              {
                title: "Performance First",
                desc: "Sub-second response times, optimized bundle sizes, edge caching, and database query index optimizations.",
              },
              {
                title: "Client Code Ownership",
                desc: "Zero vendor lock-in. Clean, idiomatic code with full documentation and repository handover from day one.",
              },
            ].map((principle, pIdx) => (
              <div
                key={pIdx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-2 text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{principle.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
