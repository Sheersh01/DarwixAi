import { Database, Brain, Shield, Zap, GitBranch, Cpu } from "lucide-react";

export default function AIBlueprint() {
  const aiModels = [
    {
      name: "Intent Classification",
      model: "Fine-tuned BERT",
      purpose: "Classify user intents across 25+ categories",
      accuracy: "96.3%"
    },
    {
      name: "Sentiment Analysis",
      model: "RoBERTa",
      purpose: "Detect emotional tone (positive/negative/neutral)",
      accuracy: "94.8%"
    },
    {
      name: "Urgency Prediction",
      model: "Gradient Boosting",
      purpose: "Score urgency from 1-10 based on context",
      accuracy: "92.1%"
    },
    {
      name: "Response Generation",
      model: "GPT-4 + RAG",
      purpose: "Generate contextual, personalized responses",
      accuracy: "95.7%"
    },
    {
      name: "Entity Extraction",
      model: "spaCy NER",
      purpose: "Extract key entities (names, dates, products)",
      accuracy: "97.2%"
    },
    {
      name: "Language Detection",
      model: "fastText",
      purpose: "Identify customer language in real-time",
      accuracy: "99.1%"
    }
  ];

  const safetyMeasures = [
    {
      category: "Content Safety",
      measures: [
        "Toxicity detection using Perspective API",
        "PII redaction and masking",
        "Profanity filtering",
        "Bias detection in AI responses"
      ]
    },
    {
      category: "Accuracy & Quality",
      measures: [
        "Human-in-the-loop validation for high-stakes decisions",
        "Confidence scoring (threshold: 0.85)",
        "Fallback to human agents when confidence < threshold",
        "A/B testing of model variants",
        "Continuous model monitoring and retraining"
      ]
    },
    {
      category: "Security & Compliance",
      measures: [
        "End-to-end encryption for all customer data",
        "GDPR, CCPA, SOC2 compliance",
        "Role-based access control (RBAC)",
        "Audit logging of all AI decisions",
        "Data residency options"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Architecture Blueprint</h1>
        <p className="text-slate-600">Technical design & implementation details</p>
      </div>

      {/* Data Flow Diagram */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <GitBranch className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Data Flow Architecture</h2>
        </div>
        <div className="bg-white rounded-xl p-8 border border-slate-200">
          {/* Visual Data Flow */}
          <div className="space-y-6">
            {/* Ingestion Layer */}
            <div>
              <div className="text-sm font-semibold text-slate-600 mb-3">1. INGESTION LAYER</div>
              <div className="grid grid-cols-5 gap-3">
                {["Voice", "WhatsApp", "Email", "Web Chat", "Social"].map((channel) => (
                  <div key={channel} className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-blue-900">{channel}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center my-2">
                <div className="text-slate-400">↓</div>
              </div>
            </div>

            {/* Preprocessing Layer */}
            <div>
              <div className="text-sm font-semibold text-slate-600 mb-3">2. PREPROCESSING</div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-purple-900 mb-1">Normalization</div>
                    <div className="text-purple-700">Text cleaning, tokenization</div>
                  </div>
                  <div>
                    <div className="font-medium text-purple-900 mb-1">Enrichment</div>
                    <div className="text-purple-700">Customer context lookup</div>
                  </div>
                  <div>
                    <div className="font-medium text-purple-900 mb-1">Routing</div>
                    <div className="text-purple-700">Message queue (Kafka)</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <div className="text-slate-400">↓</div>
              </div>
            </div>

            {/* AI Processing Layer */}
            <div>
              <div className="text-sm font-semibold text-slate-600 mb-3">3. AI PROCESSING</div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-green-900">Real-time Models</div>
                    <div className="text-xs text-green-700 space-y-1">
                      <div>• Intent Classification (BERT)</div>
                      <div>• Sentiment Analysis (RoBERTa)</div>
                      <div>• Entity Extraction (spaCy)</div>
                      <div>• Language Detection</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-green-900">Response Generation</div>
                    <div className="text-xs text-green-700 space-y-1">
                      <div>• RAG Vector Search (Pinecone)</div>
                      <div>• LLM Response Gen (GPT-4)</div>
                      <div>• Personalization Engine</div>
                      <div>• Safety Filters</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <div className="text-slate-400">↓</div>
              </div>
            </div>

            {/* Intelligence Layer */}
            <div>
              <div className="text-sm font-semibold text-slate-600 mb-3">4. INTELLIGENCE LAYER</div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-orange-900 mb-1">Routing Engine</div>
                    <div className="text-orange-700 text-xs">Priority scoring, agent matching</div>
                  </div>
                  <div>
                    <div className="font-medium text-orange-900 mb-1">Action Engine</div>
                    <div className="text-orange-700 text-xs">Auto-execute workflows</div>
                  </div>
                  <div>
                    <div className="font-medium text-orange-900 mb-1">Analytics</div>
                    <div className="text-orange-700 text-xs">Real-time insights</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <div className="text-slate-400">↓</div>
              </div>
            </div>

            {/* Output Layer */}
            <div>
              <div className="text-sm font-semibold text-slate-600 mb-3">5. OUTPUT LAYER</div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-pink-900">Agent Dashboard</div>
                </div>
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-pink-900">Customer Response</div>
                </div>
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-pink-900">Analytics Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Models */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">AI Models & Usage</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {aiModels.map((model, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-slate-900">{model.name}</h3>
                  <div className="text-sm text-blue-600 font-medium mt-1">{model.model}</div>
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  {model.accuracy}
                </div>
              </div>
              <p className="text-sm text-slate-600">{model.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RAG Implementation */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">RAG (Retrieval-Augmented Generation)</h2>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Knowledge Base Architecture</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="font-medium text-purple-900 mb-2">1. Indexing</div>
                  <div className="text-sm text-purple-700">
                    • Product docs, FAQs, policies<br/>
                    • Historical conversations<br/>
                    • Company knowledge base<br/>
                    • Embedded using OpenAI Ada-002
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="font-medium text-purple-900 mb-2">2. Retrieval</div>
                  <div className="text-sm text-purple-700">
                    • Vector similarity search (Pinecone)<br/>
                    • Top-k relevant documents (k=5)<br/>
                    • Hybrid search (semantic + keyword)<br/>
                    • Context window: 8K tokens
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="font-medium text-purple-900 mb-2">3. Generation</div>
                  <div className="text-sm text-purple-700">
                    • GPT-4 with retrieved context<br/>
                    • Temperature: 0.3 (factual)<br/>
                    • Max tokens: 500<br/>
                    • Fact-checking layer
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Update Strategy</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-slate-900">Real-time Updates</div>
                    <div className="text-slate-600">New policies, product changes indexed within 5 minutes</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Cpu className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-slate-900">Conversation Learning</div>
                    <div className="text-slate-600">Successful resolutions added to knowledge base nightly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Accuracy */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Safety & Accuracy Plan</h2>
        </div>
        <div className="space-y-6">
          {safetyMeasures.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">{section.category}</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {section.measures.map((measure, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{measure}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Technology Stack</h2>
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">AI/ML</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div>• OpenAI GPT-4</div>
                <div>• Hugging Face Transformers</div>
                <div>• TensorFlow / PyTorch</div>
                <div>• spaCy NLP</div>
                <div>• Pinecone Vector DB</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Infrastructure</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div>• AWS / GCP (multi-cloud)</div>
                <div>• Kubernetes orchestration</div>
                <div>• Apache Kafka streaming</div>
                <div>• Redis caching</div>
                <div>• PostgreSQL + MongoDB</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">APIs & Integration</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div>• Twilio (Voice, WhatsApp)</div>
                <div>• SendGrid (Email)</div>
                <div>• WebSocket (Web Chat)</div>
                <div>• Social platform APIs</div>
                <div>• CRM connectors (REST)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Targets */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Performance & Scale Targets</h2>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900">Metric</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Target</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-900">AI Response Latency</td>
                  <td className="p-4 text-green-700 font-semibold">{"< 500ms"}</td>
                  <td className="p-4 text-slate-600 text-sm">Model optimization, GPU inference</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-900">Concurrent Users</td>
                  <td className="p-4 text-green-700 font-semibold">100K+</td>
                  <td className="p-4 text-slate-600 text-sm">Auto-scaling, load balancing</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-900">System Uptime</td>
                  <td className="p-4 text-green-700 font-semibold">99.95%</td>
                  <td className="p-4 text-slate-600 text-sm">Multi-region deployment, failover</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-900">Model Accuracy</td>
                  <td className="p-4 text-green-700 font-semibold">{"> 95%"}</td>
                  <td className="p-4 text-slate-600 text-sm">Continuous training, HITL validation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
