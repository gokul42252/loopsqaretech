import { useParams, Link } from "react-router";
import { servicesData } from "~/content/services";
import { CtaBanner } from "~/components/CtaBanner";
import {
  Cloud,
  Globe,
  ArrowRightLeft,
  TrendingDown,
  ShieldCheck,
  ShoppingBag,
  Code2,
  Wrench,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Layers,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export function meta({ params }: { params: { slug?: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return [{ title: "Service Not Found | Loopsquare Tech" }];
  }
  return [
    { title: `${service.title} | Loopsquare Tech` },
    { name: "description", content: service.description },
  ];
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          The service you are looking for does not exist.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>
    );
  }

  const isCloud = service.category === "cloud";
  const otherServices = servicesData.filter((s) => s.id !== service.id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "cloud":
        return <Cloud className="w-8 h-8" />;
      case "globe":
        return <Globe className="w-8 h-8" />;
      case "switch":
        return <ArrowRightLeft className="w-8 h-8" />;
      case "trending-down":
        return <TrendingDown className="w-8 h-8" />;
      case "shield":
        return <ShieldCheck className="w-8 h-8" />;
      case "cart":
        return <ShoppingBag className="w-8 h-8" />;
      case "code":
        return <Code2 className="w-8 h-8" />;
      case "tool":
        return <Wrench className="w-8 h-8" />;
      default:
        return <Cloud className="w-8 h-8" />;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Header Banner */}
      <section className={`relative overflow-hidden bg-gradient-to-r ${service.gradient} text-white py-16 sm:py-24`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Services</span>
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
                {getIcon(service.icon)}
              </div>
              <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                {service.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mb-8">
              {service.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to={`/contact?service=${service.slug}`}
                className="px-7 py-3.5 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-100 shadow-xl transition-all flex items-center gap-2 text-sm"
              >
                <span>Request Architecture Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Body */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Card */}
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                Executive Summary
              </h2>
              <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border-l-4 border-blue-600 mb-6 text-slate-800 dark:text-slate-200 font-semibold text-base leading-relaxed">
                "{service.description}"
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {service.detailedOverview}
              </p>
            </div>

            {/* Included Capabilities */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Technical Capabilities & Scope
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Implementation Process */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Implementation Methodology & Lifecycle
              </h2>
              <div className="space-y-4">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-5 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-black text-lg flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-500" />
                Tangible Deliverables You Receive
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                {service.deliverables.map((del, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-blue-500" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Consultation Card */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-7 border border-indigo-900/60 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Ready to Get Started?
              </span>
              <h3 className="text-xl font-black mt-2 mb-3">
                Book a Technical Discovery Session
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Speak directly with a lead architect about your {service.title} objectives, timelines, and security needs.
              </p>
              <Link
                to={`/contact?service=${service.slug}`}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Get a Free Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Technologies */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation to other services */}
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-7 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Other Specialized Services
              </h4>
              <ul className="space-y-2">
                {otherServices.map((other) => (
                  <li key={other.id}>
                    <Link
                      to={`/services/${other.slug}`}
                      className="block p-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {other.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
