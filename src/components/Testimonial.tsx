"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-slate-50 to-blue-50 p-12 md:p-20 rounded-[3rem] border border-blue-100 shadow-xl overflow-hidden"
        >
          <Quote className="absolute top-10 left-10 text-blue-100 w-32 h-32 -z-0" />
          
          <div className="relative z-10 text-center space-y-8">
            <div className="flex justify-center gap-1 text-yellow-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} fill="currentColor" size={24} />
              ))}
            </div>
            
            <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-relaxed italic">
              "SmartyQ has been a game-changer for our cafe. We went from getting 2 reviews a month to over 40. The AI feedback improvement really helps our customers share what they love about us."
            </p>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-300 mb-4 border-4 border-white shadow-md overflow-hidden">
                {/* Profile Placeholder */}
                <div className="w-full h-full bg-gradient-to-tr from-blue-400 to-indigo-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Sarah Johnson</h4>
              <p className="text-blue-600 font-semibold">Owner, The Daily Grind Cafe</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
