"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3">
                The Problem
              </h2>
              <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Why businesses struggle to grow their online reputation
              </h3>
            </div>

            <div className="space-y-6">
              {[
                "Customers are busy and forget to leave reviews",
                "Negative feedback is posted publicly, hurting your reputation",
                "Business owners don’t know what to improve in real-time",
              ].map((problem, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-red-100 shadow-sm">
                  <XCircle className="text-red-500 shrink-0" size={24} />
                  <p className="text-slate-700 font-medium">{problem}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-3">
                The Solution
              </h2>
              <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
                SmartyQ makes feedback easy and reviews automatic
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  text: "Easy QR-based feedback (No app needed)",
                  icon: Zap,
                  color: "text-blue-500",
                  bg: "bg-blue-50",
                },
                {
                  text: "AI-powered improvement for better review quality",
                  icon: ShieldCheck,
                  color: "text-indigo-500",
                  bg: "bg-indigo-50",
                },
                {
                  text: "Smart Routing: Happy → Google, Private → You",
                  icon: BarChart3,
                  color: "text-violet-500",
                  bg: "bg-violet-50",
                },
              ].map((solution, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-green-100 shadow-lg relative overflow-hidden group">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${solution.bg.replace("bg-", "bg-")}`} />
                  <solution.icon className={`${solution.color} shrink-0`} size={28} />
                  <p className="text-slate-800 font-bold text-lg">{solution.text}</p>
                  <CheckCircle2 className="text-green-500 ml-auto" size={24} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
