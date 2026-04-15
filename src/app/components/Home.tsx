import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  const highlights = [
    {
      icon: Zap,
      title: "Unified Experience",
      description:
        "Single conversation thread across voice, chat, email, WhatsApp, and social",
    },
    {
      icon: Target,
      title: "AI-Powered Intelligence",
      description:
        "Intent detection, sentiment analysis, and predictive routing",
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "40% faster resolution, 60% cost savings, 25% higher CSAT",
    },
  ];

  const deliverables = [
    { name: "Product Requirements Document", path: "/prd", status: "Complete" },
    {
      name: "AI Architecture Blueprint",
      path: "/ai-blueprint",
      status: "Complete",
    },
    {
      name: "Wireframes & Journey Maps",
      path: "/wireframes",
      status: "Complete",
    },
    {
      name: "Business Case & ROI Analysis",
      path: "/business-case",
      status: "Complete",
    },
    { name: "Interactive Demo", path: "/demo", status: "Complete" },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-9 pb-8">
      <section className="glass-card fade-in-up relative overflow-hidden rounded-[1.75rem] p-7 sm:p-9">
        <div className="pointer-events-none absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-cyan-300/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 left-8 h-36 w-36 rounded-full bg-amber-300/30 blur-2xl" />

        <div className="relative z-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-cyan-800">
            AI-POWERED OMNICHANNEL PLATFORM
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            UnifyAI: Seamless customer engagement across every channel
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            One platform connecting voice, WhatsApp, email, web chat, and social
            with shared context, intelligent routing, and personalized
            responses.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "40% faster resolution",
              "60% lower support cost",
              "25% CSAT uplift",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/demo"
              className="lift inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-700/30"
            >
              View Live Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/prd"
              className="lift rounded-xl border border-slate-300 bg-white/90 px-6 py-3 font-semibold text-slate-700"
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </section>

      <section
        className="glass-card fade-in-up rounded-3xl p-7 sm:p-8"
        style={{ animationDelay: "80ms" }}
      >
        <h2 className="text-2xl font-bold text-slate-900">The Challenge</h2>
        <p className="mt-4 text-slate-700">
          Customers today engage with businesses across multiple channels—voice,
          WhatsApp, email, web chat, and social platforms. However, because each
          channel operates independently:
        </p>
        <ul className="mt-5 grid gap-2 text-slate-700 sm:grid-cols-2">
          <li className="flex items-start gap-2">
            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-600" />
            <span>Customers must repeat information across channels</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-600" />
            <span>Support teams provide inconsistent responses</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-600" />
            <span>Issue resolution is slow and frustrating</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-600" />
            <span>Context is lost during channel switches</span>
          </li>
        </ul>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="glass-card fade-in-up lift rounded-2xl p-6"
            style={{ animationDelay: `${120 + index * 60}ms` }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
              <item.icon className="h-6 w-6 text-cyan-700" />
            </div>
            <h3 className="mb-2 font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      <section
        className="glass-card fade-in-up rounded-3xl p-7 sm:p-8"
        style={{ animationDelay: "230ms" }}
      >
        <h2 className="text-2xl font-bold text-slate-900">
          Project Deliverables
        </h2>
        <div className="space-y-4">
          {deliverables.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group mt-5 flex items-center justify-between rounded-xl border border-white/60 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="font-medium text-slate-900">{item.name}</span>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-cyan-700" />
            </Link>
          ))}
        </div>
      </section>

      <section
        className="fade-in-up relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 p-7 text-white shadow-xl shadow-cyan-900/20 sm:p-8"
        style={{ animationDelay: "280ms" }}
      >
        <div className="pointer-events-none absolute -right-8 top-10 h-44 w-44 rounded-full bg-cyan-300/20 blur-2xl" />
        <h2 className="relative z-10 text-2xl font-bold">Our Solution</h2>
        <p className="relative z-10 mb-6 mt-4 text-cyan-100">
          UnifyAI leverages advanced AI models, RAG (Retrieval-Augmented
          Generation), and intelligent routing to deliver a seamless omnichannel
          experience that understands customer intent, predicts urgency,
          personalizes responses, and automatically executes actions—all while
          maintaining context across every touchpoint.
        </p>
        <div className="relative z-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="font-semibold mb-2">Speed & Efficiency</div>
            <div className="text-sm text-blue-100">
              40% faster resolution times
            </div>
          </div>
          <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="font-semibold mb-2">Cost Savings</div>
            <div className="text-sm text-blue-100">
              60% reduction in support costs
            </div>
          </div>
          <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="font-semibold mb-2">Customer Satisfaction</div>
            <div className="text-sm text-blue-100">
              25% increase in CSAT scores
            </div>
          </div>
          <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="font-semibold mb-2">Market Opportunity</div>
            <div className="text-sm text-blue-100">$12.8B TAM by 2027</div>
          </div>
        </div>
      </section>
    </div>
  );
}
