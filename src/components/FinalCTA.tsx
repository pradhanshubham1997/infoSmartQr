"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { GOOGLE_FORM_URL } from "@/lib/constants";

export const FinalCTA = () => {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Start Growing Your Reviews Today 🚀
          </h2>
          <p className="text-xl text-blue-100 font-medium leading-relaxed">
            Join hundreds of local businesses that are already seeing the impact of smart customer feedback.
          </p>
          <div className="pt-8">
            <Link
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 hover:bg-blue-50 px-12 py-5 rounded-full text-2xl font-black shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto w-fit"
            >
              Get Started Now
              <Rocket className="fill-blue-700" size={28} />
            </Link>
            <p className="text-sm text-blue-200 mt-6 font-medium">
              No credit card required • 7-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
