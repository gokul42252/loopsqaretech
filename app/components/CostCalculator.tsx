import { useState } from "react";
import { Link } from "react-router";
import { Calculator, ArrowRight, Check, Zap, Sparkles } from "lucide-react";

export function CostCalculator() {
  const [serviceType, setServiceType] = useState<string>("cloud-solutions");
  const [scale, setScale] = useState<string>("growth");
  const [includeSupport, setIncludeSupport] = useState<boolean>(true);
  const [multiRegion, setMultiRegion] = useState<boolean>(false);

  const calculateEstimate = () => {
    let timelineWeeks = 3;
    let basePriceRange = "$3,500 – $6,000";
    let avgSavings = "25% - 40%";

    if (serviceType === "cloud-solutions") {
      timelineWeeks = scale === "startup" ? 2 : scale === "growth" ? 4 : 8;
      basePriceRange =
        scale === "startup"
          ? "$3,000 – $5,500"
          : scale === "growth"
          ? "$6,000 – $12,000"
          : "$15,000 – $28,000+";
      avgSavings = "30% - 45% infrastructure savings";
    } else if (serviceType === "website-development") {
      timelineWeeks = scale === "startup" ? 2 : scale === "growth" ? 3 : 6;
      basePriceRange =
        scale === "startup"
          ? "$2,500 – $4,500"
          : scale === "growth"
          ? "$5,000 – $9,000"
          : "$10,000 – $20,000+";
      avgSavings = "2x - 3x faster page speed & conversions";
    } else if (serviceType === "cloud-migration") {
      timelineWeeks = scale === "startup" ? 2 : scale === "growth" ? 4 : 7;
      basePriceRange =
        scale === "startup"
          ? "$4,000 – $7,000"
          : scale === "growth"
          ? "$8,000 – $15,000"
          : "$18,000 – $35,000+";
      avgSavings = "Zero downtime guarantee & reduced on-prem costs";
    } else if (serviceType === "cloud-cost-optimization") {
      timelineWeeks = 2;
      basePriceRange =
        scale === "startup"
          ? "$1,800 – $3,000"
          : scale === "growth"
          ? "$3,500 – $7,000"
          : "$8,000 – $14,000";
      avgSavings = "Immediate 20% to 45% reduction on monthly cloud bills";
    } else if (serviceType === "ecommerce-development") {
      timelineWeeks = scale === "startup" ? 3 : scale === "growth" ? 5 : 9;
      basePriceRange =
        scale === "startup"
          ? "$3,500 – $6,500"
          : scale === "growth"
          ? "$7,500 – $14,000"
          : "$16,000 – $30,000+";
      avgSavings = "Omnichannel checkout & automated inventory sync";
    } else {
      timelineWeeks = scale === "startup" ? 4 : scale === "growth" ? 7 : 12;
      basePriceRange =
        scale === "startup"
          ? "$5,000 – $9,500"
          : scale === "growth"
          ? "$10,000 – $22,000"
          : "$25,000 – $50,000+";
      avgSavings = "Full custom business workflow automation";
    }

    return {
      timeline: `${timelineWeeks} to ${timelineWeeks + 2} Weeks`,
      price: basePriceRange,
      impact: avgSavings,
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Interactive Project & Cloud Cost Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Configure your technical requirements to generate instant delivery timeframe and budget guidance
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Service */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
              1. Primary Objective
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { id: "cloud-solutions", label: "Cloud Solutions" },
                { id: "website-development", label: "Web Development" },
                { id: "cloud-migration", label: "Cloud Migration" },
                { id: "cloud-cost-optimization", label: "Cost Optimization" },
                { id: "ecommerce-development", label: "E-commerce Store" },
                { id: "web-application-development", label: "Custom Web App" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setServiceType(item.id)}
                  className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                    serviceType === item.id
                      ? "border-blue-600 bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 ring-2 ring-blue-500/20"
                      : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Scale */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
              2. Business Stage & Scale
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "startup", title: "Startup / Small", desc: "Agile & Lean" },
                { id: "growth", title: "Growth / Mid-Size", desc: "Rapid Scaling" },
                { id: "enterprise", title: "Enterprise", desc: "High Volume / SLA" },
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setScale(tier.id)}
                  className={`p-3 rounded-xl text-left transition-all border ${
                    scale === tier.id
                      ? "border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/20"
                      : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                  }`}
                >
                  <div className="text-xs font-bold">{tier.title}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {tier.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Add-on Checkboxes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
              3. Capabilities & SLAs
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={includeSupport}
                  onChange={(e) => setIncludeSupport(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  Include 24/7 Managed Cloud Support & Proactive Uptime Monitoring
                </span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={multiRegion}
                  onChange={(e) => setMultiRegion(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  Multi-Region Failover Architecture & Zero-Downtime Replication
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Output Estimate Column */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-7 border border-indigo-900/60 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-indigo-800/60 mb-5">
              <span className="text-xs uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Estimated Scope & Delivery
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[11px] font-semibold">
                Instant Estimate
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-xs text-slate-400">Estimated Timeline</div>
                <div className="text-2xl font-black text-white tracking-tight">
                  {estimate.timeline}
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400">Estimated Budget Range</div>
                <div className="text-xl sm:text-2xl font-black text-cyan-300 tracking-tight">
                  {estimate.price}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  *Transparent project milestones or sprint-based billing
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" />
                  Projected Business Impact
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {estimate.impact}
                </p>
              </div>
            </div>

            <ul className="space-y-1.5 text-[11px] text-slate-300 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>Architecture documentation & Git repository included</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>Dedicated project lead & Slack communication channel</span>
              </li>
            </ul>
          </div>

          <Link
            to={`/contact?service=${serviceType}&scale=${scale}`}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <span>Lock In This Architecture Scope</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

