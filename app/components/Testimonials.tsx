import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "CTO, FinEdge Payments",
      content:
        "Loopsquare Tech executed our multi-region AWS cloud migration seamlessly. We experienced zero downtime during cutover, and our cloud costs dropped 38% immediately following their FinOps rightsizing.",
      service: "Cloud Migration & Cost Optimization",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "VP of Product, OmniRetail Group",
      content:
        "The new e-commerce web platform Loopsquare built doubled our mobile checkout completion rate within 60 days. The site is blazing fast, and their team is always available when we need them.",
      service: "E-commerce & Web Development",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Founder, CloudScale Analytics",
      content:
        "Their commitment to quality and secure cloud infrastructure made our SOC 2 audit effortless. Loopsquare Tech is not just a contractor, they are an essential engineering partner for our growth.",
      service: "Cloud Security & Web Application",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
            Trusted by Ambitious Fast-Growing Companies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            See how our cloud solutions and modern web applications deliver measurable, game-changing business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-7 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 dark:text-slate-600" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {review.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  {review.role}
                </div>
                <span className="inline-block text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

