"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, QrCode } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/lib/constants";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium w-fit">
            <Star size={16} className="fill-blue-700" />
            <span>Trusted by 500+ local businesses</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
            Turn Customer Feedback into{" "}
            <span className="gradient-text">5-Star Google Reviews ⭐</span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
            Collect feedback using QR codes, improve it with AI, and grow your
            business reputation effortlessly. The smartest way to manage customer
            experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2"
            >
              Get Your QR Now
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/demo"
              className="bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2"
            >
              <QrCode size={20} />
              See Demo
            </Link>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-500 pt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
              ))}
            </div>
            <p>Join 2,000+ happy business owners</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
            <Image
              src="/hero-mockup.png"
              alt="SmartyQ Hero Mockup"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 animate-bounce hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500">New Review</p>
                <p className="text-sm font-bold text-slate-800">"Excellent service!"</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl z-20 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                AI
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500">AI Improved</p>
                <p className="text-sm font-bold text-slate-800">Review Optimized 🚀</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
