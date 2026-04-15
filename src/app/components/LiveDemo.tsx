import { useState } from "react";
import { MessageSquare, Phone, Mail, Send, Sparkles, TrendingUp, AlertCircle, CheckCircle, Clock, Zap } from "lucide-react";

export default function LiveDemo() {
  const [activeDemo, setActiveDemo] = useState<"customer" | "agent">("customer");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "system",
      text: "Welcome! How can we help you today?",
      time: "2:30 PM",
      channel: "chat"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [aiProcessing, setAiProcessing] = useState(false);

  // AI Insights that update based on conversation
  const [aiInsights, setAiInsights] = useState({
    intent: "greeting",
    sentiment: "neutral",
    urgency: 3,
    suggestedAction: "None",
    confidence: 0
  });

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: "customer",
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      channel: "chat"
    };
    setMessages([...messages, userMessage]);
    setInputValue("");
    setAiProcessing(true);

    // Simulate AI processing
    setTimeout(() => {
      // Update AI insights based on message content
      const lowerText = inputValue.toLowerCase();
      let newInsights = { ...aiInsights };
      
      if (lowerText.includes("broken") || lowerText.includes("damaged") || lowerText.includes("defective")) {
        newInsights = {
          intent: "product_issue",
          sentiment: "negative",
          urgency: 8,
          suggestedAction: "Process replacement order",
          confidence: 94
        };
      } else if (lowerText.includes("track") || lowerText.includes("shipping") || lowerText.includes("delivery")) {
        newInsights = {
          intent: "order_tracking",
          sentiment: "neutral",
          urgency: 5,
          suggestedAction: "Provide tracking information",
          confidence: 92
        };
      } else if (lowerText.includes("cancel") || lowerText.includes("refund")) {
        newInsights = {
          intent: "cancellation_request",
          sentiment: "frustrated",
          urgency: 7,
          suggestedAction: "Process refund with manager approval",
          confidence: 89
        };
      } else if (lowerText.includes("thank") || lowerText.includes("great") || lowerText.includes("perfect")) {
        newInsights = {
          intent: "positive_feedback",
          sentiment: "positive",
          urgency: 2,
          suggestedAction: "Send satisfaction survey",
          confidence: 96
        };
      }

      setAiInsights(newInsights);

      // Generate AI response
      let aiResponse = "";
      if (newInsights.intent === "product_issue") {
        aiResponse = "I'm sorry to hear about the issue with your product. I can see this is important to you. Let me help you process a replacement right away. Can you provide your order number?";
      } else if (newInsights.intent === "order_tracking") {
        aiResponse = "I'd be happy to help you track your order. Your package is currently in transit and expected to arrive tomorrow by 5 PM. Would you like me to send you real-time tracking updates?";
      } else if (newInsights.intent === "cancellation_request") {
        aiResponse = "I understand you'd like to cancel your order. I can process that for you immediately and initiate a full refund. Is there anything we could do to address your concerns instead?";
      } else if (newInsights.intent === "positive_feedback") {
        aiResponse = "Thank you so much for your kind words! We're thrilled to hear you're satisfied. I've made a note of your feedback for our team. Is there anything else I can help you with today?";
      } else {
        aiResponse = "Thank you for reaching out! I'm here to assist you. Could you please provide more details about how I can help?";
      }

      const agentMessage = {
        id: messages.length + 2,
        sender: "agent",
        text: aiResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        channel: "chat",
        aiGenerated: true
      };

      setMessages(prev => [...prev, agentMessage]);
      setAiProcessing(false);
    }, 1500);
  };

  const quickMessages = [
    "My product arrived damaged",
    "Where is my order?",
    "I want to request a refund",
    "Thank you for the great service!"
  ];

  const sentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return "text-green-700 bg-green-100";
      case "negative": return "text-red-700 bg-red-100";
      case "frustrated": return "text-orange-700 bg-orange-100";
      default: return "text-slate-700 bg-slate-100";
    }
  };

  const urgencyColor = (urgency: number) => {
    if (urgency >= 7) return "bg-red-500";
    if (urgency >= 4) return "bg-orange-500";
    return "bg-green-500";
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Live Interactive Demo</h1>
        <p className="text-slate-600">Experience the AI-powered platform in action</p>
      </div>

      {/* View Toggle */}
      <div className="flex gap-2 mb-6 bg-white p-1 rounded-lg border border-slate-200 w-fit">
        <button
          onClick={() => setActiveDemo("customer")}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeDemo === "customer"
              ? "bg-blue-600 text-white"
              : "text-slate-700 hover:bg-slate-50"
          }`}
        >
          Customer View
        </button>
        <button
          onClick={() => setActiveDemo("agent")}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeDemo === "agent"
              ? "bg-blue-600 text-white"
              : "text-slate-700 hover:bg-slate-50"
          }`}
        >
          Agent Dashboard
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Chat Area */}
        <div className={activeDemo === "customer" ? "col-span-3" : "col-span-2"}>
          <div className="bg-white rounded-xl border border-slate-200 h-[600px] flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-blue-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">UnifyAI Support</div>
                    <div className="text-xs text-blue-100">AI-Powered • Always Available</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-white/20 rounded-full text-xs text-white flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-md ${message.sender === "customer" ? "" : "space-y-2"}`}>
                    {message.sender === "agent" && message.aiGenerated && (
                      <div className="flex items-center gap-1 text-xs text-purple-600 mb-1">
                        <Sparkles className="w-3 h-3" />
                        <span>AI-Generated Response</span>
                      </div>
                    )}
                    <div
                      className={`p-4 rounded-2xl ${
                        message.sender === "customer"
                          ? "bg-blue-600 text-white rounded-br-sm"
                          : message.sender === "system"
                          ? "bg-slate-200 text-slate-800 rounded-bl-sm"
                          : "bg-white border border-slate-200 text-slate-900 rounded-bl-sm shadow-sm"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <div className={`text-xs mt-2 ${
                        message.sender === "customer" ? "text-blue-100" : "text-slate-500"
                      }`}>
                        {message.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {aiProcessing && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm p-4 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies (Customer View) */}
            {activeDemo === "customer" && messages.length === 1 && (
              <div className="px-6 py-3 border-t border-slate-200 bg-white">
                <div className="text-xs text-slate-600 mb-2">Quick replies:</div>
                <div className="flex flex-wrap gap-2">
                  {quickMessages.map((msg, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(msg)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded-full transition-colors"
                    >
                      {msg}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-slate-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={aiProcessing || !inputValue.trim()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Dashboard Sidebar */}
        {activeDemo === "agent" && (
          <div className="space-y-4">
            {/* AI Insights Panel */}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-slate-900">Real-Time AI Insights</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-xs text-slate-600 mb-1.5">Detected Intent</div>
                  <div className="px-3 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg">
                    {aiInsights.intent.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-600 mb-1.5">Sentiment</div>
                  <div className={`px-3 py-2 text-sm font-medium rounded-lg ${sentimentColor(aiInsights.sentiment)}`}>
                    {aiInsights.sentiment.charAt(0).toUpperCase() + aiInsights.sentiment.slice(1)}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-600 mb-1.5">Urgency Level</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${urgencyColor(aiInsights.urgency)}`}
                        style={{ width: `${aiInsights.urgency * 10}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-900 w-8">{aiInsights.urgency}/10</span>
                  </div>
                </div>

                {aiInsights.confidence > 0 && (
                  <div>
                    <div className="text-xs text-slate-600 mb-1.5">AI Confidence</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 transition-all duration-500"
                          style={{ width: `${aiInsights.confidence}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-green-700 w-10">{aiInsights.confidence}%</span>
                    </div>
                  </div>
                )}

                {aiInsights.suggestedAction !== "None" && (
                  <div>
                    <div className="text-xs text-slate-600 mb-1.5">Suggested Action</div>
                    <div className="px-3 py-2 bg-green-50 border border-green-200 text-green-800 text-sm rounded-lg flex items-start gap-2">
                      <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{aiInsights.suggestedAction}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Customer Context */}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-slate-900">Customer Profile</h3>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Customer Since</span>
                  <span className="font-medium text-slate-900">Jan 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Total Orders</span>
                  <span className="font-medium text-slate-900">18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Lifetime Value</span>
                  <span className="font-medium text-green-700">$1,845</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Avg. Satisfaction</span>
                  <span className="font-medium text-slate-900">4.7/5</span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <div className="px-3 py-2 bg-purple-50 text-purple-700 text-xs font-medium rounded text-center">
                    High-Value Customer
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900 mb-3 text-sm">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm rounded-lg transition-colors flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Process Replacement
                </button>
                <button className="w-full px-3 py-2 bg-green-50 hover:bg-green-100 text-green-700 text-sm rounded-lg transition-colors flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Provide Tracking
                </button>
                <button className="w-full px-3 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 text-sm rounded-lg transition-colors flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Escalate to Manager
                </button>
              </div>
            </div>

            {/* Channel History */}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900 mb-3 text-sm">Channel History</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <MessageSquare className="w-3 h-3" />
                  <span>Web Chat (Current)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Mail className="w-3 h-3" />
                  <span>Email - 3 days ago</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Phone className="w-3 h-3" />
                  <span>Phone - 1 week ago</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Demo Instructions */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Try It Out!
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div>
            <div className="font-medium mb-2">In Customer View:</div>
            <ul className="space-y-1 text-blue-700">
              <li>• Try the quick reply buttons or type your own message</li>
              <li>• Watch how the AI responds contextually</li>
              <li>• Experience seamless, natural conversation</li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-2">In Agent Dashboard:</div>
            <ul className="space-y-1 text-blue-700">
              <li>• See real-time AI insights update as you chat</li>
              <li>• Monitor sentiment, intent, and urgency detection</li>
              <li>• View suggested actions and customer context</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
