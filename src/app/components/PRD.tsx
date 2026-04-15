import { Users, Target, CheckSquare, Layers, TrendingUp } from "lucide-react";

export default function PRD() {
  const userStories = [
    {
      persona: "Customer",
      story: "As a customer, I want to switch between chat and phone without repeating my issue, so I can get help faster."
    },
    {
      persona: "Customer",
      story: "As a customer, I want personalized responses based on my history, so I feel valued and understood."
    },
    {
      persona: "Support Agent",
      story: "As an agent, I want to see a unified timeline of all customer interactions, so I can provide informed support."
    },
    {
      persona: "Support Agent",
      story: "As an agent, I want AI-suggested responses and actions, so I can resolve issues more efficiently."
    },
    {
      persona: "Manager",
      story: "As a manager, I want real-time analytics on sentiment and urgency, so I can allocate resources effectively."
    }
  ];

  const mvpFeatures = [
    "Unified conversation timeline across 5+ channels",
    "AI-powered intent classification (25+ intents)",
    "Real-time sentiment analysis",
    "Urgency prediction and smart routing",
    "Agent assist with suggested responses",
    "Customer history and context panel",
    "Auto-tagging and categorization",
    "Basic analytics dashboard"
  ];

  const futureFeatures = [
    "Multilingual support (50+ languages)",
    "Voice-to-text transcription with emotion detection",
    "Predictive issue prevention",
    "Advanced workflow automation",
    "Custom AI model fine-tuning",
    "Third-party CRM integrations",
    "Mobile agent app",
    "Customer self-service portal with AI chatbot"
  ];

  const metrics = [
    { metric: "Average Resolution Time", target: "< 3 minutes", baseline: "5 minutes" },
    { metric: "First Contact Resolution", target: "> 80%", baseline: "60%" },
    { metric: "Customer Satisfaction (CSAT)", target: "> 4.5/5", baseline: "3.6/5" },
    { metric: "Agent Productivity", target: "+40%", baseline: "100%" },
    { metric: "Channel Switch Rate", target: "< 10%", baseline: "35%" },
    { metric: "AI Accuracy", target: "> 95%", baseline: "N/A" }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Product Requirements Document</h1>
        <p className="text-slate-600">UnifyAI Omnichannel Customer Engagement Platform</p>
      </div>

      {/* Problem Context */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Problem Context</h2>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-4">
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Current State</h3>
            <p className="text-slate-700">
              Modern customers interact with businesses through an average of 5.3 channels per journey. 
              However, 73% of customers report frustration from having to repeat information when switching 
              channels. Support teams operate in silos, leading to:
            </p>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>52% increase in resolution time due to context loss</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>35% of customers abandoning support requests mid-journey</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>Inconsistent brand experience across touchpoints</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>High operational costs with low agent efficiency</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Desired State</h3>
            <p className="text-slate-700">
              A unified platform where AI seamlessly orchestrates customer interactions across all channels, 
              maintaining context, predicting needs, and enabling agents to deliver personalized, efficient 
              support that drives satisfaction and loyalty.
            </p>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Target Users</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Customers</h3>
            <p className="text-sm text-slate-600 mb-3">End users seeking support across any channel</p>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span>Seamless experience</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span>Quick resolution</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span>Personalized service</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Support Agents</h3>
            <p className="text-sm text-slate-600 mb-3">Frontline teams handling customer requests</p>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span>AI-powered assistance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span>Complete context</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span>Efficient workflows</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">CX Managers</h3>
            <p className="text-sm text-slate-600 mb-3">Leaders optimizing support operations</p>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span>Real-time insights</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span>Performance metrics</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span>Resource allocation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Stories */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <CheckSquare className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">User Stories</h2>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          {userStories.map((item, index) => (
            <div
              key={index}
              className={`p-5 ${index !== userStories.length - 1 ? "border-b border-slate-200" : ""}`}
            >
              <div className="flex items-start gap-4">
                <div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                  {item.persona}
                </div>
                <p className="flex-1 text-slate-700">{item.story}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
            <Layers className="w-5 h-5 text-orange-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Key Features</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">MVP</span>
              Core Features
            </h3>
            <ul className="space-y-3">
              {mvpFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">FUTURE</span>
              Advanced Features
            </h3>
            <ul className="space-y-3">
              {futureFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <CheckSquare className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-pink-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Success Metrics</h2>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900">Metric</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Baseline</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Target</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Impact</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((row, index) => (
                  <tr
                    key={index}
                    className={index !== metrics.length - 1 ? "border-b border-slate-200" : ""}
                  >
                    <td className="p-4 text-slate-900 font-medium">{row.metric}</td>
                    <td className="p-4 text-slate-600">{row.baseline}</td>
                    <td className="p-4 text-green-700 font-semibold">{row.target}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                        High
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Implementation Timeline</h2>
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-24 font-semibold text-slate-900">Phase 1</div>
              <div className="flex-1">
                <div className="font-medium text-slate-900 mb-1">Foundation (Months 1-3)</div>
                <p className="text-sm text-slate-600">Core platform, API integrations, basic AI models</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 font-semibold text-slate-900">Phase 2</div>
              <div className="flex-1">
                <div className="font-medium text-slate-900 mb-1">Intelligence (Months 4-6)</div>
                <p className="text-sm text-slate-600">Advanced AI features, personalization, analytics</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 font-semibold text-slate-900">Phase 3</div>
              <div className="flex-1">
                <div className="font-medium text-slate-900 mb-1">Optimization (Months 7-9)</div>
                <p className="text-sm text-slate-600">Performance tuning, automation, enterprise features</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 font-semibold text-slate-900">Phase 4</div>
              <div className="flex-1">
                <div className="font-medium text-slate-900 mb-1">Scale (Months 10-12)</div>
                <p className="text-sm text-slate-600">Advanced integrations, mobile apps, global expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
