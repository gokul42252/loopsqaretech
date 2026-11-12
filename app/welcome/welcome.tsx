import { useState } from "react";
import { Link } from "react-router";
import { companyInfo } from "~/content/company";
import { servicesData } from "~/content/services";
import { ServiceCard } from "~/components/ServiceCard";
import { CostCalculator } from "~/components/CostCalculator";
import { TechStack } from "~/components/TechStack";
import { Testimonials } from "~/components/Testimonials";
import { CtaBanner } from "~/components/CtaBanner";
import {
  ArrowRight,
  Cloud,
  Code2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  Headphones,
  CheckCircle2,
} from "lucide-react";

export function Welcome() {
  const [activeCategory, setActiveCategory] = useState<"all" | "cloud" | "web">("all");

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 text-white pt-12 pb-24 lg:pt-16 lg:pb-32">
        {/* Glow Spheres */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle grid lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-cyan-300 mb-8 animate-in fade-in duration-500">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Loopsquare Tech • Ideas Into Intelligent Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-6 text-white">
              Empowering Businesses Through{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Innovative Cloud & Web Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              We provide secure, scalable, and cost-effective digital solutions—from enterprise cloud setup and zero-downtime migration to modern, high-converting websites and custom applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-xl hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 group text-base"
              >
                <span>Explore All 8 Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 text-base"
              >
                <span>Book Free Architecture Consultation</span>
              </Link>
            </div>

            {/* Official Logo Banner Card */}
            <div className="relative mx-auto max-w-lg p-3 sm:p-4 rounded-2xl bg-white shadow-2xl border border-white/30 backdrop-blur-md text-slate-900">
              <div className="flex items-center justify-center py-1 sm:py-2 px-4">
                <img
                  src="/images/logo.jpg"
                  alt="Loopsquare Tech - Ideas Into Intelligent Solutions"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <div className="text-[11px] font-bold text-slate-500 tracking-wider uppercase border-t border-slate-100 pt-2 mt-1 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Certified Cloud Architects & Modern Full-Stack Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="relative z-20 -mt-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
            {companyInfo.stats.map((stat, idx) => (
              <div key={idx} className="pt-4 lg:pt-0 lg:px-4">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 sm:py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
              Our Core Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Explore our 8 specialized services designed to modernize your infrastructure, boost operational efficiency, and elevate your online presence.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl self-start md:self-auto border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All 8 Services
            </button>
            <button
              onClick={() => setActiveCategory("cloud")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
                activeCategory === "cloud"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Cloud (4)</span>
            </button>
            <button
              onClick={() => setActiveCategory("web")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
                activeCategory === "web"
                  ? "bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Web & Apps (4)</span>
            </button>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} featured={idx === 0 || idx === 1} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <span>Compare full specifications, architectures & deliverables across all 8 services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* About Us Teaser Section */}
      <section className="py-20 bg-slate-100/60 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                {companyInfo.about.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {companyInfo.about.title}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {companyInfo.about.p1}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {companyInfo.about.p2}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                >
                  Contact Our Leadership
                </Link>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {companyInfo.mission.title}
                  </h3>
                </div>
                <p className="text-slate-800 dark:text-slate-200 font-semibold text-base mb-2">
                  "{companyInfo.mission.statement}"
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  {companyInfo.mission.description}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md border border-slate-200/80 dark:border-slate-800 hover:border-purple-400 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                    🔭
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {companyInfo.vision.title}
                  </h3>
                </div>
                <p className="text-slate-800 dark:text-slate-200 font-semibold text-base mb-2">
                  "{companyInfo.vision.statement}"
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  {companyInfo.vision.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            Our Key Differentiators
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4 tracking-tight">
            Why Choose Loopsquare Tech?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            We merge deep technical mastery with client-first empathy to deliver digital solutions that solve real business bottlenecks.
          </p>
        </div>

        {/* 6 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {idx === 0 && <Users className="w-6 h-6" />}
                  {idx === 1 && <Cloud className="w-6 h-6" />}
                  {idx === 2 && <Code2 className="w-6 h-6" />}
                  {idx === 3 && <TrendingUp className="w-6 h-6" />}
                  {idx === 4 && <Headphones className="w-6 h-6" />}
                  {idx === 5 && <Award className="w-6 h-6" />}
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-blue-600 dark:text-cyan-400">
                    {item.stat}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    {item.statLabel}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Cost & Timeline Calculator */}
      <section className="py-16 bg-slate-100/50 dark:bg-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CostCalculator />
        </div>
      </section>

      {/* Technology Stack Showcase */}
      <TechStack />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action Banner */}
      <CtaBanner />
    </div>
  );
}
