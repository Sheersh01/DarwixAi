import { useState } from "react";
import { MessageSquare, Phone, Mail, Send, Clock, TrendingUp, AlertCircle, User, Bot, CheckCircle } from "lucide-react";

export default function Wireframes() {
  const [selectedView, setSelectedView] = useState<"timeline" | "agent" | "escalation">("timeline");

  const conversationData = [
    {
      channel: "whatsapp",
      time: "10:23 AM",
      sender: "customer",
      message: "Hi, I received a damaged product. Order #12345",
      sentiment: "negative",
      intent: "product_issue"
    },
    {
      channel: "whatsapp",
      time: "10:24 AM",
      sender: "agent",
      message: "I'm sorry to hear that! Let me look into your order right away.",
      sentiment: "neutral",
      intent: "acknowledgment"
    },
    {
      channel: "phone",
      time: "10:35 AM",
      sender: "customer",
      message: "Called to follow up - still waiting for resolution",
      sentiment: "frustrated",
      intent: "escalation"
    },
    {
      channel: "phone",
      time: "10:36 AM",
      sender: "agent",
      message: "I see your WhatsApp chat. We're processing a replacement now.",
      sentiment: "positive",
      intent: "resolution"
    },
    {
      channel: "email",
      time: "10:45 AM",
      sender: "system",
      message: "Replacement order #12789 confirmed. Shipping today.",
      sentiment: "positive",
      intent: "confirmation"
    }
  ];

  const aiInsights = {
    intent: "Product Damage - Replacement Request",
    sentiment: "Frustrated → Satisfied",
    urgency: 8.5,
    predictedResolution: "Replacement + Discount",
    customerValue: "High-Value ($2,450 LTV)",
    riskScore: "Medium (35%)"
  };

  const channelIcons: Record<string, any> = {
    whatsapp: MessageSquare,
    phone: Phone,
    email: Mail,
    system: Bot
  };

  const channelColors: Record<string, string> = {
    whatsapp: "bg-green-100 text-green-700",
    phone: "bg-blue-100 text-blue-700",
    email: "bg-purple-100 text-purple-700",
    system: "bg-gray-100 text-gray-700"
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Wireframes & Journey Maps</h1>
        <p className="text-slate-600">Interactive prototypes of key user experiences</p>
      </div>

      {/* View Selector */}
      <div className="flex gap-2 mb-6 bg-white p-1 rounded-lg border border-slate-200 w-fit">
        <button
          onClick={() => setSelectedView("timeline")}
          className={`px-4 py-2 rounded-md transition-colors ${
            selectedView === "timeline"
              ? "bg-blue-600 text-white"
              : "text-slate-700 hover:bg-slate-50"
          }`}
        >
          Unified Timeline
        </button>
        <button
          onClick={() => setSelectedView("agent")}
          className={`px-4 py-2 rounded-md transition-colors ${
            selectedView === "agent"
              ? "bg-blue-600 text-white"
              : "text-slate-700 hover:bg-slate-50"
          }`}
        >
          Agent Dashboard
        </button>
        <button
          onClick={() => setSelectedView("escalation")}
          className={`px-4 py-2 rounded-md transition-colors ${
            selectedView === "escalation"
              ? "bg-blue-600 text-white"
              : "text-slate-700 hover:bg-slate-50"
          }`}
        >
          Escalation Flow
        </button>
      </div>

      {/* Unified Timeline View */}
      {selectedView === "timeline" && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Unified Conversation Timeline
            </h2>
            <p className="text-slate-600 text-sm mb-6">
              All customer interactions across channels in a single, chronological view
            </p>

            {/* Customer Header */}
            <div className="bg-slate-50 rounded-lg p-4 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-slate-900">John Doe</div>
                  <div className="text-sm text-slate-600">john.doe@email.com • +1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                  High-Value Customer
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                  Urgency: 8.5/10
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {conversationData.map((item, index) => {
                const Icon = channelIcons[item.channel];
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${channelColors[item.channel]}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      {index !== conversationData.length - 1 && (
                        <div className="w-0.5 h-full bg-slate-200 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-slate-500">{item.time}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs font-medium text-slate-700 capitalize">{item.channel}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-600 capitalize">{item.sender}</span>
                      </div>
                      <div className={`p-3 rounded-lg ${
                        item.sender === "customer" 
                          ? "bg-blue-50 border border-blue-200" 
                          : item.sender === "system"
                          ? "bg-gray-50 border border-gray-200"
                          : "bg-green-50 border border-green-200"
                      }`}>
                        <p className="text-sm text-slate-800">{item.message}</p>
                        <div className="flex gap-2 mt-2">
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            item.sentiment === "negative" || item.sentiment === "frustrated"
                              ? "bg-red-100 text-red-700"
                              : item.sentiment === "positive"
                              ? "bg-green-100 text-green-700"
                              : "bg-slate-100 text-slate-700"
                          }`}>
                            {item.sentiment}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                            {item.intent.replace("_", " ")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Agent Dashboard View */}
      {selectedView === "agent" && (
        <div className="grid grid-cols-3 gap-6">
          {/* Main Conversation Area */}
          <div className="col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-slate-900">Active Conversation</h2>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                    Auto-Respond
                  </button>
                  <button className="px-3 py-1.5 border border-slate-300 text-slate-700 text-sm rounded-lg hover:bg-slate-50">
                    Transfer
                  </button>
                </div>
              </div>

              {/* Conversation */}
              <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                {conversationData.slice(0, 3).map((item, index) => (
                  <div key={index} className={`flex ${item.sender === "customer" ? "justify-start" : "justify-end"}`}>
                    <div className={`max-w-md p-3 rounded-lg ${
                      item.sender === "customer"
                        ? "bg-slate-100 text-slate-900"
                        : "bg-blue-600 text-white"
                    }`}>
                      <p className="text-sm">{item.message}</p>
                      <div className="text-xs mt-1 opacity-70">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Suggested Responses */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-900">AI Suggested Responses</span>
                </div>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition-colors">
                    <p className="text-sm text-slate-900">
                      "I've processed a replacement order with expedited shipping. You'll receive it by tomorrow."
                    </p>
                    <div className="text-xs text-blue-600 mt-1">Confidence: 96%</div>
                  </button>
                  <button className="w-full text-left p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                    <p className="text-sm text-slate-900">
                      "I apologize for the inconvenience. I'm issuing a full refund and a 20% discount on your next order."
                    </p>
                    <div className="text-xs text-slate-600 mt-1">Confidence: 87%</div>
                  </button>
                </div>
              </div>

              {/* Reply Box */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Recommended Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 text-left">
                  <div className="font-medium text-slate-900 text-sm">Process Replacement</div>
                  <div className="text-xs text-slate-600 mt-1">Order #12345</div>
                </button>
                <button className="p-3 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 text-left">
                  <div className="font-medium text-slate-900 text-sm">Issue Refund</div>
                  <div className="text-xs text-slate-600 mt-1">$89.99</div>
                </button>
                <button className="p-3 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 text-left">
                  <div className="font-medium text-slate-900 text-sm">Apply Discount</div>
                  <div className="text-xs text-slate-600 mt-1">20% next purchase</div>
                </button>
                <button className="p-3 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 text-left">
                  <div className="font-medium text-slate-900 text-sm">Escalate to Manager</div>
                  <div className="text-xs text-slate-600 mt-1">High urgency</div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Context & Insights */}
          <div className="space-y-6">
            {/* Customer Context */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-slate-600" />
                <h3 className="font-semibold text-slate-900">Customer Context</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-slate-600">Lifetime Value</div>
                  <div className="font-semibold text-slate-900">$2,450</div>
                </div>
                <div>
                  <div className="text-slate-600">Previous Orders</div>
                  <div className="font-semibold text-slate-900">23</div>
                </div>
                <div>
                  <div className="text-slate-600">Avg. Satisfaction</div>
                  <div className="font-semibold text-slate-900">4.8/5</div>
                </div>
                <div>
                  <div className="text-slate-600">Last Contact</div>
                  <div className="font-semibold text-slate-900">2 weeks ago</div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-slate-900">AI Insights</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-slate-600 mb-1">Intent</div>
                  <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded w-fit">
                    {aiInsights.intent}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">Sentiment Journey</div>
                  <div className="text-sm font-medium text-slate-900">{aiInsights.sentiment}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">Urgency Score</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500" style={{ width: `${aiInsights.urgency * 10}%` }} />
                    </div>
                    <span className="text-sm font-semibold text-orange-600">{aiInsights.urgency}/10</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">Predicted Resolution</div>
                  <div className="text-sm font-medium text-green-700">{aiInsights.predictedResolution}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-1">Churn Risk</div>
                  <div className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded w-fit">
                    {aiInsights.riskScore}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-slate-600" />
                <h3 className="font-semibold text-slate-900">Recent Activity</h3>
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex gap-2">
                  <div className="text-slate-500">2 days ago</div>
                  <div className="text-slate-900">Ordered Product SKU-789</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-slate-500">1 week ago</div>
                  <div className="text-slate-900">Chat: Shipping inquiry</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-slate-500">2 weeks ago</div>
                  <div className="text-slate-900">Phone: Account update</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Escalation Flow View */}
      {selectedView === "escalation" && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Intelligent Routing & Escalation
            </h2>
            <p className="text-slate-600 text-sm mb-6">
              AI-powered decision flow for optimal case handling
            </p>

            {/* Flow Diagram */}
            <div className="space-y-6">
              {/* Stage 1 */}
              <div className="flex items-center gap-4">
                <div className="w-32 shrink-0 text-sm font-semibold text-slate-600">Incoming Request</div>
                <div className="flex-1 bg-blue-100 border border-blue-300 rounded-lg p-4">
                  <div className="font-medium text-blue-900 mb-2">Multi-Channel Ingestion</div>
                  <div className="text-sm text-blue-700">Voice • Chat • Email • WhatsApp • Social</div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-slate-400">↓</div>
              </div>

              {/* Stage 2 */}
              <div className="flex items-center gap-4">
                <div className="w-32 shrink-0 text-sm font-semibold text-slate-600">AI Analysis</div>
                <div className="flex-1 bg-purple-100 border border-purple-300 rounded-lg p-4">
                  <div className="font-medium text-purple-900 mb-2">Intent & Sentiment Detection</div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="bg-white rounded p-2 text-xs">
                      <div className="text-purple-900 font-medium">Intent</div>
                      <div className="text-purple-700">Product Issue</div>
                    </div>
                    <div className="bg-white rounded p-2 text-xs">
                      <div className="text-purple-900 font-medium">Sentiment</div>
                      <div className="text-red-600">Frustrated</div>
                    </div>
                    <div className="bg-white rounded p-2 text-xs">
                      <div className="text-purple-900 font-medium">Urgency</div>
                      <div className="text-orange-600">8.5/10</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-slate-400">↓</div>
              </div>

              {/* Stage 3 - Decision Point */}
              <div className="flex items-center gap-4">
                <div className="w-32 shrink-0 text-sm font-semibold text-slate-600">Routing Logic</div>
                <div className="flex-1 bg-orange-100 border border-orange-300 rounded-lg p-4">
                  <div className="font-medium text-orange-900 mb-3">Priority Scoring</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-orange-800">Customer Value Score</span>
                      <span className="text-orange-900 font-semibold">+30 pts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-800">Sentiment Negative</span>
                      <span className="text-orange-900 font-semibold">+25 pts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-800">Urgency High</span>
                      <span className="text-orange-900 font-semibold">+20 pts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-800">Channel Switch</span>
                      <span className="text-orange-900 font-semibold">+15 pts</span>
                    </div>
                    <div className="border-t border-orange-300 pt-2 flex justify-between">
                      <span className="text-orange-900 font-semibold">Total Priority</span>
                      <span className="text-orange-900 font-bold text-lg">90/100</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-slate-400">↓</div>
              </div>

              {/* Stage 4 - Routing Decision */}
              <div className="flex items-center gap-4">
                <div className="w-32 shrink-0 text-sm font-semibold text-slate-600">Assignment</div>
                <div className="flex-1 grid grid-cols-3 gap-3">
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 opacity-50">
                    <div className="text-xs text-gray-600 mb-1">Low Priority</div>
                    <div className="font-medium text-gray-700">Chatbot</div>
                    <div className="text-xs text-gray-600 mt-2">Score {"< 40"}</div>
                  </div>
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 opacity-50">
                    <div className="text-xs text-gray-600 mb-1">Medium Priority</div>
                    <div className="font-medium text-gray-700">Junior Agent</div>
                    <div className="text-xs text-gray-600 mt-2">Score 40-70</div>
                  </div>
                  <div className="bg-green-100 border-2 border-green-500 rounded-lg p-3">
                    <div className="text-xs text-green-700 mb-1">High Priority</div>
                    <div className="font-medium text-green-900">Senior Agent</div>
                    <div className="text-xs text-green-700 mt-2">Score {"> 70"}</div>
                    <div className="flex items-center gap-1 mt-2">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-green-800 font-semibold">SELECTED</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-slate-400">↓</div>
              </div>

              {/* Stage 5 - Agent Match */}
              <div className="flex items-center gap-4">
                <div className="w-32 shrink-0 text-sm font-semibold text-slate-600">Agent Match</div>
                <div className="flex-1 bg-green-100 border border-green-300 rounded-lg p-4">
                  <div className="font-medium text-green-900 mb-3">Best Agent Selected</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                      SK
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-green-900">Sarah Kim</div>
                      <div className="text-sm text-green-700">Senior Support • Product Specialist</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-green-700">Match Score</div>
                      <div className="font-semibold text-green-900">94%</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                    <div className="bg-white rounded p-2">
                      <div className="text-green-700">Expertise</div>
                      <div className="text-green-900 font-semibold">Product Issues</div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="text-green-700">Availability</div>
                      <div className="text-green-900 font-semibold">Available Now</div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="text-green-700">CSAT</div>
                      <div className="text-green-900 font-semibold">4.9/5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Escalation Triggers */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Automated Escalation Triggers</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-red-900 text-sm">Negative Sentiment Spike</div>
                  <div className="text-xs text-red-700 mt-1">
                    3+ consecutive negative messages → Auto-escalate
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-orange-900 text-sm">Resolution Time Exceeded</div>
                  <div className="text-xs text-orange-700 mt-1">
                    {"> 15 min without resolution → Manager alert"}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-purple-900 text-sm">High-Value Customer</div>
                  <div className="text-xs text-purple-700 mt-1">
                    LTV {"> $1000 + negative sentiment → Priority queue"}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-blue-900 text-sm">Multiple Channel Attempts</div>
                  <div className="text-xs text-blue-700 mt-1">
                    2+ channels in 1 hour → Assign dedicated agent
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
