"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Scissors, Dumbbell, Utensils, Store } from "lucide-react";

const targets = [
  { name: "Cafes", icon: Coffee, emoji: "☕" },
  { name: "Salons", icon: Scissors, emoji: "💇" },
  { name: "Gyms", icon: Dumbbell, emoji: "🏋️" },
  { name: "Restaurants", icon: Utensils, emoji: "🍽️" },
  { name: "Local Shops", icon: Store, emoji: "🏪" },
];

export const TargetUsers = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3">
            Who is it for?
          </h2>
          <h3 className="text-4xl font-extrabold">Perfect for every local business</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-slate-800/50 border border-slate-700 px-8 py-6 rounded-2xl hover:bg-slate-800 hover:border-blue-500 transition-all cursor-default group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <target.icon size={24} />
              </div>
              <span className="text-xl font-bold">{target.name} {target.emoji}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
