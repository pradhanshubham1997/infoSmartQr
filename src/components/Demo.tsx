"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Demo = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
            Product Preview
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Designed for simplicity
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our clean interface ensures that neither you nor your customers have to struggle with complex technology.
          </p>
        </div>

        <div className="relative">
          {/* Main Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white overflow-hidden bg-white"
          >
            <Image
              src="/dashboard-mockup.png"
              alt="SmartyQ Dashboard Mockup"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Floating Feedback Form Mockup (Simulated with absolute div) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -right-4 -bottom-10 w-72 md:w-80 glass p-6 rounded-3xl shadow-2xl border-4 border-white hidden lg:block"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">SQ</div>
                <span className="font-bold text-slate-800">Feedback Form</span>
              </div>
              <p className="text-sm font-bold text-slate-900">How was your experience today?</p>
              <div className="flex gap-2 justify-between">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <span className="text-lg">⭐</span>
                  </div>
                ))}
              </div>
              <div className="h-20 bg-slate-100 rounded-xl p-3 text-[10px] text-slate-400">
                "The service was amazing and the coffee was perfect..."
              </div>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-md">
                Post to Google
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
