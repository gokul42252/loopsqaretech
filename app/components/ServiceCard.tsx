import { Link } from "react-router";
import type { ServiceItem } from "~/content/services";
import {
  Cloud,
  Globe,
  ArrowRightLeft,
  TrendingDown,
  ShieldCheck,
  ShoppingBag,
  Code2,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "cloud":
        return <Cloud className="w-6 h-6" />;
      case "globe":
        return <Globe className="w-6 h-6" />;
      case "switch":
        return <ArrowRightLeft className="w-6 h-6" />;
      case "trending-down":
        return <TrendingDown className="w-6 h-6" />;
      case "shield":
        return <ShieldCheck className="w-6 h-6" />;
      case "cart":
        return <ShoppingBag className="w-6 h-6" />;
      case "code":
        return <Code2 className="w-6 h-6" />;
      case "tool":
        return <Wrench className="w-6 h-6" />;
      default:
        return <Cloud className="w-6 h-6" />;
    }
  };

  const isCloud = service.category === "cloud";

  return (
    <div
      className={`group relative rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        featured
          ? "bg-white dark:bg-slate-900 border-2 border-blue-500/30 dark:border-blue-400/30 shadow-xl hover:shadow-2xl hover:border-blue-500"
          : "bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
      } hover:-translate-y-1`}
    >
      {/* Top Accent Gradient Bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${service.gradient}`} />

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm ${
              isCloud
                ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50"
                : "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50"
            }`}
          >
            {getIcon(service.icon)}
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              isCloud
                ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                : "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
            }`}
          >
            {service.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Link to={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Key Features Bullet List */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
            Key Highlights
          </div>
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start text-xs text-slate-600 dark:text-slate-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 sm:px-7 pb-6 pt-0">
        <Link
          to={`/services/${service.slug}`}
          className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ${
            isCloud
              ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:bg-blue-600 group-hover:text-white"
              : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:bg-purple-600 group-hover:text-white"
          }`}
        >
          <span>Explore Details</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

