import { useState } from 'react';
import {
  Zap,
  Target,
  BarChart3,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Linkedin
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      <nav className="fixed top-0 w-full bg-[#0a0a1f]/90 backdrop-blur-md z-50 border-b border-purple-900/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-cyan-400" />
            <span className="text-2xl font-bold text-white">
              Ventures.ai
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Services</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">About</a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg transition-all duration-300 font-medium text-black text-sm"
            >
              Start a project
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f3e] via-[#0a0a1f] to-[#0d1b4d]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20 rounded-full filter blur-[150px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-800/20 via-indigo-600/20 to-blue-500/20 rounded-full filter blur-[120px] opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full text-xs font-medium text-cyan-300 uppercase tracking-wider">
              Automate. Optimize. Scale.
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95]">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ventures.ai
              </span>
              <br />
              <span className="text-white text-5xl md:text-6xl lg:text-7xl">
                Rocks.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              AI automation team working with companies from 0 to scale and beyond.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg transition-all duration-300 font-semibold text-black inline-flex items-center gap-2 shadow-lg"
            >
              Get a quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="hidden md:block relative">
            <div className="relative w-full h-[500px]">
              <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M150 100 L350 100 L380 130 L380 380 L150 380 L120 350 L120 130 Z"
                      stroke="url(#gradient1)" strokeWidth="2" fill="none" opacity="0.6"/>
                <path d="M180 200 L180 350 L320 350 L320 200 Z"
                      stroke="url(#gradient2)" strokeWidth="2" fill="rgba(96, 165, 250, 0.05)"/>
                <circle cx="250" cy="275" r="40" stroke="url(#gradient3)" strokeWidth="2" fill="rgba(34, 211, 238, 0.1)"/>
                <path d="M230 275 L245 290 L270 260" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="50%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative bg-gradient-to-b from-[#0a0a1f] to-[#0d1535]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">How It </span>
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-gray-400 text-lg">Simple, effective, transformative</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-10 bg-gradient-to-br from-[#1a1a3e]/80 to-[#0f1942]/80 border border-purple-500/10 rounded-3xl backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-purple-400/20">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-6xl font-bold bg-gradient-to-br from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">01</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Identify Bottlenecks</h3>
                <p className="text-gray-400 leading-relaxed">
                  We analyze your business processes to uncover inefficiencies and automation opportunities.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-10 bg-gradient-to-br from-[#1a1a3e]/80 to-[#0f1942]/80 border border-purple-500/10 rounded-3xl backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-400/20">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-6xl font-bold bg-gradient-to-br from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">02</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Design Automations</h3>
                <p className="text-gray-400 leading-relaxed">
                  We build tailored AI workflows that fit seamlessly into your existing operations.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-10 bg-gradient-to-br from-[#1a1a3e]/80 to-[#0f1942]/80 border border-purple-500/10 rounded-3xl backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-cyan-400/20">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-6xl font-bold bg-gradient-to-br from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">03</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Deploy & Optimize</h3>
                <p className="text-gray-400 leading-relaxed">
                  We integrate and monitor your systems for peak performance and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 relative bg-[#0a0a1f]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1535] via-[#0a0a1f] to-[#1a0f3e] opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 text-lg">Comprehensive AI automation solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-3xl"></div>
              <div className="relative p-10 bg-gradient-to-br from-[#1a1a3e]/60 to-[#0f1942]/60 border border-purple-500/10 rounded-3xl backdrop-blur-sm hover:border-cyan-400/20 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-purple-400/20">
                  <MessageSquare className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Automated Personalized Outreach</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Contact large sums of leads automatically with personalized emails that convert.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 rounded-3xl"></div>
              <div className="relative p-10 bg-gradient-to-br from-[#1a1a3e]/60 to-[#0f1942]/60 border border-purple-500/10 rounded-3xl backdrop-blur-sm hover:border-cyan-400/20 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-400/20">
                  <Target className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Lead Generation Automation</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Use AI to find, qualify, and nurture leads automatically around the clock.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-purple-600/5 rounded-3xl"></div>
              <div className="relative p-10 bg-gradient-to-br from-[#1a1a3e]/60 to-[#0f1942]/60 border border-purple-500/10 rounded-3xl backdrop-blur-sm hover:border-cyan-400/20 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-400/20">
                  <Zap className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Custom AI Integrations</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Connect CRMs, data tools, and communication platforms seamlessly.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-3xl"></div>
              <div className="relative p-10 bg-gradient-to-br from-[#1a1a3e]/60 to-[#0f1942]/60 border border-purple-500/10 rounded-3xl backdrop-blur-sm hover:border-cyan-400/20 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-purple-400/20">
                  <BarChart3 className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">24/7 Customer Support Agents</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Chatbots with knowledge base of company info, answering FAQs and qualifying leads.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative bg-gradient-to-b from-[#1a0f3e] via-[#0a0a1f] to-[#0d1535]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-500/10 rounded-full filter blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Results That </span>
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Matter</span>
            </h2>
            <p className="text-gray-400 text-lg">Real impact for real businesses</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-12 bg-gradient-to-br from-[#1a1a3e]/80 to-[#0f1942]/80 border border-purple-500/20 rounded-3xl text-center backdrop-blur-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-cyan-400/30">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  30+
                </div>
                <div className="text-2xl font-semibold text-white mb-2">Hours Saved</div>
                <p className="text-gray-400">
                  Per week per team through intelligent automation
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-12 bg-gradient-to-br from-[#1a1a3e]/80 to-[#0f1942]/80 border border-purple-500/20 rounded-3xl text-center backdrop-blur-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-cyan-400/30">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  70%
                </div>
                <div className="text-2xl font-semibold text-white mb-2">Increase</div>
                <p className="text-gray-400">
                  In lead response rate with AI-powered outreach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 relative bg-[#0a0a1f]">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Ventures.ai</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-3xl blur-xl"></div>
            <div className="relative p-12 bg-gradient-to-br from-[#1a1a3e]/60 to-[#0f1942]/60 border border-purple-500/10 rounded-3xl backdrop-blur-sm">
              <p className="text-gray-300 text-xl leading-relaxed text-center">
                Ventures.ai is a team of automation experts and AI engineers helping businesses
                embrace the future of work. We combine cutting-edge AI tools with real-world business
                strategy to deliver measurable results. Our mission is to empower companies to work
                smarter, not harder, by leveraging the transformative power of artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 relative bg-gradient-to-b from-[#0a0a1f] to-[#1a0f3e]">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-purple-600/15 via-blue-600/15 to-cyan-500/15 rounded-full filter blur-[120px]"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Ready to </span>
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Automate?</span>
            </h2>
            <p className="text-gray-400 text-xl">
              Schedule a free 15-minute strategy call to uncover your automation opportunities.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl blur-xl"></div>
            <form onSubmit={handleSubmit} className="relative p-10 bg-gradient-to-br from-[#1a1a3e]/80 to-[#0f1942]/80 border border-purple-500/20 rounded-3xl backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-300">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 bg-[#0a0a1f]/80 border border-purple-400/20 rounded-xl focus:outline-none focus:border-cyan-400/50 transition-colors text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-300">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 bg-[#0a0a1f]/80 border border-purple-400/20 rounded-xl focus:outline-none focus:border-cyan-400/50 transition-colors text-white placeholder-gray-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3 text-gray-300">Company</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-5 py-3.5 bg-[#0a0a1f]/80 border border-purple-400/20 rounded-xl focus:outline-none focus:border-cyan-400/50 transition-colors text-white placeholder-gray-500"
                  placeholder="Your Company Inc."
                />
              </div>
              <div className="mb-8">
                <label className="block text-sm font-medium mb-3 text-gray-300">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-5 py-3.5 bg-[#0a0a1f]/80 border border-purple-400/20 rounded-xl focus:outline-none focus:border-cyan-400/50 transition-colors text-white resize-none placeholder-gray-500"
                  placeholder="Tell us about your automation needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all duration-300 font-semibold text-lg text-black shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-[#0a0a1f] border-t border-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-cyan-400" />
              <span className="text-2xl font-bold text-white">
                Ventures.ai
              </span>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-gray-400 text-sm">© 2025 Ventures.ai</span>
              <button className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </button>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
