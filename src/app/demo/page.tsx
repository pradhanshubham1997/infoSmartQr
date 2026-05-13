"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Smartphone, 
  Sparkles, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  LayoutDashboard, 
  Bell, 
  BarChart3,
  MessageSquare,
  QrCode,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GOOGLE_FORM_URL } from "@/lib/constants";

const DemoPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isAiImproving, setIsAiImproving] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const improvedFeedback = "The service was absolutely exceptional! The staff went above and beyond to make sure we were comfortable. The ambiance was perfect, and the attention to detail in every dish was impressive. Highly recommend the specialty coffee!";

  const handleAiImprove = () => {
    setIsAiImproving(true);
    setTimeout(() => {
      setIsAiImproving(false);
      setShowResult(true);
      setActiveStep(2);
    }, 2000);
  };

  const steps = [
    { title: "Scan", icon: QrCode, description: "Customer scans the QR code on your table." },
    { title: "Feedback", icon: MessageSquare, description: "Customer leaves a quick rating and comment." },
    { title: "AI Boost", icon: Sparkles, description: "Our AI optimizes the feedback for Google." },
    { title: "Growth", icon: Star, description: "High-quality reviews boost your SEO instantly." },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar isDark={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Experience the <span className="text-blue-400">SmartyQ</span> Magic
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto mb-10"
          >
            See exactly how we turn everyday customer visits into powerful marketing assets for your business.
          </motion.p>
        </div>
      </section>

      {/* Interactive Simulation Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Simulation Control */}
          <div className="space-y-12">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Live Simulation</h2>
              <h3 className="text-4xl font-extrabold text-slate-900">How your customers see you</h3>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-6 rounded-3xl transition-all border-2 ${
                    activeStep === index ? "bg-white border-blue-500 shadow-xl scale-[1.02]" : "bg-transparent border-transparent opacity-60"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    activeStep === index ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"
                  }`}>
                    <step.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone Mockup Simulation */}
          <div className="relative flex justify-center">
            <div className="w-[320px] h-[650px] bg-slate-900 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-slate-800 relative">
              {/* Speaker & Sensor */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* Screen Content */}
              <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative flex flex-col">
                <AnimatePresence mode="wait">
                  {activeStep === 0 && (
                    <motion.div 
                      key="step0"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col items-center justify-center p-6 text-center"
                    >
                      <div className="w-48 h-48 bg-slate-100 rounded-3xl flex items-center justify-center mb-8 relative group">
                        <QrCode size={120} className="text-slate-900" />
                        <motion.div 
                          animate={{ y: [0, 160, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          className="absolute top-0 left-0 right-0 h-1 bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Ready to Scan</h4>
                      <p className="text-sm text-slate-500 mb-8">Your customer simply opens their camera.</p>
                      <button 
                        onClick={() => setActiveStep(1)}
                        className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2"
                      >
                        Start Demo <Smartphone size={18} />
                      </button>
                    </motion.div>
                  )}

                  {activeStep === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      className="flex-1 flex flex-col p-6 pt-12"
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">SQ</div>
                        <div>
                          <p className="font-bold text-slate-900">The Daily Grind</p>
                          <p className="text-[10px] text-slate-400">Powered by SmartyQ</p>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-slate-900 mb-6">How was your visit?</h4>
                      
                      <div className="flex gap-2 justify-between mb-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                            <Star size={24} fill={i <= 4 ? "currentColor" : "none"} />
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <label className="text-sm font-bold text-slate-700">Tell us more:</label>
                        <textarea 
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          placeholder="Great coffee and service!"
                          className="w-full h-32 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <button 
                          onClick={handleAiImprove}
                          disabled={isAiImproving}
                          className="w-full py-4 gradient-button rounded-2xl font-bold flex items-center justify-center gap-2"
                        >
                          {isAiImproving ? "AI is Improving..." : "Enhance with AI ✨"}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      className="flex-1 flex flex-col p-6 pt-12 bg-blue-50"
                    >
                      <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-blue-100 space-y-6">
                        <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
                          <Sparkles size={14} />
                          AI OPTIMIZED REVIEW
                        </div>
                        
                        <div className="flex gap-1 text-yellow-500">
                          {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>

                        <p className="text-sm text-slate-700 leading-relaxed italic">
                          "{improvedFeedback}"
                        </p>

                        <div className="pt-4 flex flex-col gap-3">
                          <button 
                            onClick={() => setActiveStep(3)}
                            className="w-full py-4 bg-[#4285F4] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg"
                          >
                            <Image src="/vercel.svg" alt="G" width={16} height={16} className="invert" />
                            Post to Google
                          </button>
                          <button className="text-slate-400 text-xs font-medium">No thanks, keep it private</button>
                        </div>
                      </div>

                      <div className="mt-auto text-center pb-4">
                        <p className="text-[10px] text-slate-400">
                          SmartyQ routes happy customers to Google and concerns to your private dashboard.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6"
                    >
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <CheckCircle2 size={48} />
                      </div>
                      <h4 className="text-2xl font-black text-slate-900">Reputation Boosted!</h4>
                      <p className="text-slate-500 text-sm">
                        The review is now live on Google, improving your ranking and attracting more customers.
                      </p>
                      <button 
                        onClick={() => setActiveStep(0)}
                        className="text-blue-600 font-bold"
                      >
                        Try Again
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Side Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">Business Perspective</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Manage it all with ease</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              While your customers enjoy a seamless feedback experience, you get powerful tools to grow your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Review Routing",
                description: "AI automatically detects sentiment. Happy users go to Google, unhappy ones send private alerts to you.",
                icon: ShieldCheck,
                color: "text-green-400"
              },
              {
                title: "Real-time Analytics",
                description: "Track your average rating, total reviews, and customer sentiment across all your locations.",
                icon: BarChart3,
                color: "text-blue-400"
              },
              {
                title: "Instant Alerts",
                description: "Get notified immediately when someone leaves feedback so you can respond while they are still in-store.",
                icon: Bell,
                color: "text-yellow-400"
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 bg-slate-800 rounded-[2.5rem] border border-slate-700 hover:border-blue-500 transition-all group">
                <div className={`w-14 h-14 rounded-2xl bg-slate-700 flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 relative">
            <div className="rounded-[3rem] overflow-hidden border-[12px] border-slate-800 shadow-2xl">
              <Image 
                src="/dashboard-mockup.png" 
                alt="SmartyQ Dashboard" 
                width={1200} 
                height={800} 
                className="w-full h-auto"
              />
            </div>
            
            {/* Overlay features */}
            <div className="absolute top-10 left-10 hidden lg:block">
              <div className="glass p-4 rounded-2xl border-white/10 shadow-2xl animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold">AVG RATING</p>
                    <p className="text-lg font-black">4.9 / 5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-slate-600">
            Start collecting 5-star reviews and improving your customer experience today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href={GOOGLE_FORM_URL} 
              target="_blank"
              className="gradient-button px-12 py-5 rounded-full text-2xl font-black shadow-xl"
            >
              Get Started Now
            </Link>
            <Link 
              href="/" 
              className="bg-white border-2 border-slate-200 hover:border-blue-600 px-12 py-5 rounded-full text-2xl font-black transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DemoPage;
