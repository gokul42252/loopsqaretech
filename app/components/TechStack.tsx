import { Layers, Server, Code, Shield } from "lucide-react";

export function TechStack() {
  const categories = [
    {
      title: "Cloud & Infrastructure",
      icon: <Server className="w-5 h-5 text-blue-500" />,
      items: ["Amazon Web Services", "Microsoft Azure", "Google Cloud (GCP)", "Kubernetes (EKS/GKE)", "Docker Containers", "Terraform IaC"],
    },
    {
      title: "Modern Web & Frontend",
      icon: <Code className="w-5 h-5 text-purple-500" />,
      items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Vue / Nuxt"],
    },
    {
      title: "Backend & Data",
      icon: <Layers className="w-5 h-5 text-indigo-500" />,
      items: ["Node.js / Express", "Python / FastAPI", "PostgreSQL", "MongoDB", "Redis Cache", "GraphQL & REST"],
    },
    {
      title: "Security & DevOps",
      icon: <Shield className="w-5 h-5 text-cyan-500" />,
      items: ["Cloudflare CDN & WAF", "GitHub Actions CI/CD", "Datadog / Prometheus", "AWS GuardDuty", "HashiCorp Vault", "SOC 2 & HIPAA Guardrails"],
    },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            Enterprise Technology Ecosystem
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
            Powered by Proven Modern Tech Stacks
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            We build and run your systems with industry-standard, high-reliability technologies that avoid vendor lock-in and deliver maximum speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                {category.icon}
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-center text-xs text-slate-600 dark:text-slate-300 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

