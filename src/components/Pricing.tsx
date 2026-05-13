"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import Link from "next/link";
import { GOOGLE_FORM_URL } from "@/lib/constants";

const plans = [
  {
    name: "Growth Plan",
    price: "1999",
    period: "Lifetime",
    description: "Everything you need to grow your business reputation",
    features: [
      "Unlimited QR Codes",
      "Unlimited AI Feedback Improvement",
      "Smart Routing (Private/Google)",
      "Advanced Analytics Dashboard",
      "Priority Support",
      "Custom Branding",
    ],
    cta: "Start Growing 🚀",
    popular: true,
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
            Pricing
          </h2>

          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Simple Pricing. <br />
            <span className="text-blue-600">Maximum Growth.</span>
          </h3>

          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            One-time investment to boost your Google reviews and customer trust.
          </p>
        </div>

        <div className="flex justify-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-[2.5rem] bg-white border border-blue-100 shadow-2xl w-full max-w-md hover:scale-105 transition-all duration-300"
            >
              {/* Popular Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                <Zap size={14} fill="currentColor" />
                Most Popular
              </div>

              {/* Header */}
              <div className="mb-8 text-center">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h4>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-black text-slate-900">
                    ₹{plan.price}
                  </span>
                  <span className="text-slate-500 font-medium text-sm mb-2">
                    {plan.period}
                  </span>
                </div>

                <p className="text-slate-600 text-sm mt-3">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="text-blue-600" size={14} />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-center block"
              >
                {plan.cta}
              </Link>

              {/* Trust Line */}
              <p className="text-center text-xs text-slate-500 mt-4">
                No monthly fees • One-time payment • Instant setup
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};