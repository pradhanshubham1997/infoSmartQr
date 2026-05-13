"use client";

import React from "react";
import { motion } from "framer-motion";
import { QrCode, MessageSquareHeart, Globe } from "lucide-react";

const steps = [
  {
    title: "Step 1",
    description: "Customer scans your QR code",
    icon: QrCode,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Step 2",
    description: "Gives quick feedback (AI improves it)",
    icon: MessageSquareHeart,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Step 3",
    description: "Happy customers post reviews on Google",
    icon: Globe,
    color: "bg-violet-100 text-violet-600",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
            Simple & Fast
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            How SmartyQ Works
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                <step.icon size={48} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-lg text-slate-600 font-medium px-4">
                {step.description}
              </p>
              
              {/* Connector line for desktop */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 right-[-15%] w-[30%] border-t-2 border-dashed border-slate-200 -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
