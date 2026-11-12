import { useState } from "react";
import { Link } from "react-router";
import { servicesData, type ServiceItem } from "~/content/services";
import { CtaBanner } from "~/components/CtaBanner";
import {
  Cloud,
  Code2,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Shield,
  Zap,
  Globe,
  ArrowRightLeft,
  TrendingDown,
  ShoppingBag,
  Wrench,
} from "lucide-react";

export function meta() {
  return [
    { title: "Our Services | Loopsquare Tech - Cloud Solutions & Web Development" },
    {
      name: "description",
      content:
        "Explore all 8 services by Loopsquare Tech: Cloud Solutions, Website Development, Cloud Migration, Cost Optimization, Security, E-commerce, Custom Web Apps, and Support.",
    },
  ];
}

export default function Services() {
  const [filter, setFilter] = useState<"all" | "cloud" | "web">("all");

  const displayedServices =
    filter === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === filter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "cloud":
        return <Cloud className="w-7 h-7" />;
      case "globe":
        return <Globe className="w-7 h-7" />;
      case "switch":
        return <ArrowRightLeft className="w-7 h-7" />;
      case "trending-down":
        return <TrendingDown className="w-7 h-7" />;
      case "shield":
        return <Shield className="w-7 h-7" />;
      case "cart":
        return <ShoppingBag className="w-7 h-7" />;
      case "code":
        return <Code2 className="w-7 h-7" />;
      case "tool":
        return <Wrench className="w-7 h-7" />;
      default:
        return <Cloud className="w-7 h-7" />;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 text-white py-16 sm:py-24">
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="servGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#fff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#servGrid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-cyan-300 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Lifecycle Technical Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
              Cloud Solutions & Modern Web Engineering
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8">
              From architecting resilient multi-cloud environments to developing lightning-fast websites and custom web applications, we provide the technical foundation your business needs to grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-white text-blue-800 font-bold hover:bg-blue-50 shadow-lg transition-colors flex items-center gap-2 text-sm"
              >
                <span>Request Custom Scope & Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Overview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Explore All 8 Specialized Practice Areas
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Click any service for detailed blueprints, tech stacks, and implementation steps.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                filter === "all"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All (8)
            </button>
            <button
              onClick={() => setFilter("cloud")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
                filter === "cloud"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Cloud Services (4)</span>
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
                filter === "web"
                  ? "bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Web & Software (4)</span>
            </button>
          </div>
        </div>

        {/* Detailed Service Cards List */}
        <div className="mt-12 space-y-12">
          {displayedServices.map((service, idx) => {
            const isCloud = service.category === "cloud";

            return (
              <div
                key={service.id}
                id={service.slug}
                className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 lg:p-12 hover:shadow-xl transition-all"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Info & Summary */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          isCloud
                            ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                            : "bg-purple-600 text-white shadow-md shadow-purple-500/30"
                        }`}
                      >
                        {getIcon(service.icon)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Service 0{idx + 1}
                          </span>
                          <span
                            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                              isCloud
                                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                                : "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
                            }`}
                          >
                            {service.badge}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      {service.description}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.detailedOverview}
                    </p>

                    {/* Features checklist */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                        Included Capabilities & Scope
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start text-xs text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                                isCloud ? "text-blue-500" : "text-purple-500"
                              }`}
                            />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-3 flex flex-wrap gap-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 text-white transition-all ${
                          isCloud
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-purple-600 hover:bg-purple-700"
                        }`}
                      >
                        <span>View Architecture & Deliverables</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        to={`/contact?service=${service.slug}`}
                        className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 transition-colors"
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Benefits & Tech Stack */}
                  <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        Measurable Business Value
                      </div>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, bIdx) => (
                          <div
                            key={bIdx}
                            className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs"
                          >
                            <div className="font-bold text-slate-900 dark:text-white mb-0.5">
                              {benefit.title}
                            </div>
                            <div className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                              {benefit.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-blue-500" />
                        Core Technology Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Comparison Table */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Service Capability Matrix
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Every project comes standard with security hardening, source code ownership, and proactive engineer support.
            </p>
          </div>

          <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200">
                  <th className="p-4 font-bold">Service Category</th>
                  <th className="p-4 font-bold">Primary Benefit</th>
                  <th className="p-4 font-bold">Delivery Timeframe</th>
                  <th className="p-4 font-bold">Support Included</th>
                  <th className="p-4 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                {servicesData.map((s) => (
                  <tr
                    key={s.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-4 font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      {s.title}
                    </td>
                    <td className="p-4">{s.benefits[0].title}</td>
                    <td className="p-4 font-medium text-slate-900 dark:text-slate-200">
                      2 - 6 Weeks
                    </td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-semibold">
                      ✓ Post-Launch SLA
                    </td>
                    <td className="p-4 text-right">
                      <Link
                        to={`/services/${s.slug}`}
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                      >
                        Learn More →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
