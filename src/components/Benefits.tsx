"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Heart, Search } from "lucide-react";

const benefits = [
  {
    title: "Get more 5-star reviews",
    description: "Watch your Google rating climb as we automate the review process.",
    icon: Star,
  },
  {
    title: "Improve customer satisfaction",
    description: "Identify issues before they become public complaints.",
    icon: Heart,
  },
  {
    title: "Understand real customer issues",
    description: "Detailed analytics show you exactly where to improve.",
    icon: Search,
  },
  {
    title: "Build trust online",
    description: "A strong reputation attracts more local customers automatically.",
    icon: TrendingUp,
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
                The Result
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Grow your business with a stellar reputation
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <benefit.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{benefit.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] shadow-2xl text-white overflow-hidden"
          >
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 space-y-8">
              <div className="text-6xl font-black opacity-20">SmartyQ</div>
              <div className="space-y-4">
                <div className="text-4xl font-bold">94%</div>
                <p className="text-blue-100 text-lg">
                  of customers read online reviews before visiting a local business.
                </p>
              </div>
              <div className="h-px bg-white/20 w-full" />
              <div className="space-y-4">
                <div className="text-4xl font-bold">+150%</div>
                <p className="text-blue-100 text-lg">
                  average increase in weekly reviews for our active users.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
