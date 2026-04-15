import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp } from "lucide-react";

export default function Home() {
  const highlights = [
    {
      icon: Zap,
      title: "Unified Experience",
      description: "Single conversation thread across voice, chat, email, WhatsApp, and social"
    },
    {
      icon: Target,
      title: "AI-Powered Intelligence",
      description: "Intent detection, sentiment analysis, and predictive routing"
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "40% faster resolution, 60% cost savings, 25% higher CSAT"
    }
  ];

  const deliverables = [
    { name: "Product Requirements Document", path: "/prd", status: "Complete" },
    { name: "AI Architecture Blueprint", path: "/ai-blueprint", status: "Complete" },
    { name: "Wireframes & Journey Maps", path: "/wireframes", status: "Complete" },
    { name: "Business Case & ROI Analysis", path: "/business-case", status: "Complete" },
    { name: "Interactive Demo", path: "/demo", status: "Complete" }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
          AI-Powered Omnichannel Platform
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          UnifyAI: Seamless Customer Engagement Across Every Channel
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          An AI-powered platform that unifies voice, WhatsApp, email, web chat, and social platforms 
          to deliver personalized, intelligent customer experiences at scale.
        </p>
        <div className="flex gap-4">
          <Link
            to="/demo"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            View Live Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/prd"
            className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Read Documentation
          </Link>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="bg-white rounded-xl p-8 mb-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
        <p className="text-slate-700 mb-4">
          Customers today engage with businesses across multiple channels—voice, WhatsApp, email, 
          web chat, and social platforms. However, because each channel operates independently:
        </p>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
            <span>Customers must repeat information across channels</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
            <span>Support teams provide inconsistent responses</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
            <span>Issue resolution is slow and frustrating</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
            <span>Context is lost during channel switches</span>
          </li>
        </ul>
      </div>

      {/* Key Highlights */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {highlights.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Deliverables */}
      <div className="bg-white rounded-xl p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Deliverables</h2>
        <div className="space-y-4">
          {deliverables.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-medium text-slate-900">{item.name}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      {/* Solution Preview */}
      <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
        <p className="text-blue-100 mb-6">
          UnifyAI leverages advanced AI models, RAG (Retrieval-Augmented Generation), and intelligent 
          routing to deliver a seamless omnichannel experience that understands customer intent, 
          predicts urgency, personalizes responses, and automatically executes actions—all while 
          maintaining context across every touchpoint.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="font-semibold mb-2">Speed & Efficiency</div>
            <div className="text-sm text-blue-100">40% faster resolution times</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="font-semibold mb-2">Cost Savings</div>
            <div className="text-sm text-blue-100">60% reduction in support costs</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="font-semibold mb-2">Customer Satisfaction</div>
            <div className="text-sm text-blue-100">25% increase in CSAT scores</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="font-semibold mb-2">Market Opportunity</div>
            <div className="text-sm text-blue-100">$12.8B TAM by 2027</div>
          </div>
        </div>
      </div>
    </div>
  );
}
