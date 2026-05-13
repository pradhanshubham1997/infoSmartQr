"use client";

import React from "react";
import { motion } from "framer-motion";
import { QrCode, Sparkles, Navigation, LayoutDashboard, Smartphone } from "lucide-react";

const features = [
  {
    title: "QR Code for Every Business",
    description: "Custom branded QR codes for your tables, counters, or receipts.",
    icon: QrCode,
    color: "bg-blue-500",
  },
  {
    title: "AI Feedback Improvement",
    description: "Our AI helps customers write detailed, positive reviews effortlessly.",
    icon: Sparkles,
    color: "bg-indigo-500",
  },
  {
    title: "Smart Review Routing",
    description: "Positive feedback goes to Google, concerns are sent privately to you.",
    icon: Navigation,
    color: "bg-violet-500",
  },
  {
    title: "Simple Dashboard",
    description: "Track your reputation and customer satisfaction in one place.",
    icon: LayoutDashboard,
    color: "bg-blue-600",
  },
  {
    title: "No App Needed",
    description: "Works instantly in any mobile browser. Zero friction for users.",
    icon: Smartphone,
    color: "bg-indigo-600",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">
            Core Features
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900">
            Everything you need to grow your reputation
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} text-white flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
