"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Share2, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-110 duration-300">
              <Image
                src="/logo.png"
                alt="SmartyQ Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <span className="text-3xl font-bold text-white">SmartyQ</span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs text-slate-400">
            The smartest way to collect customer feedback and grow your Google reputation effortlessly.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Share2 size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Globe size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Share2 size={18} />
            </Link>
          </div>
        </div>

        {/* Links Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Product</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link></li>
            <li><Link href="#how-it-works" className="hover:text-blue-400 transition-colors">How it Works</Link></li>
            <li><Link href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Security</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" />
              <span>pradhanshubham1997@gmail.com</span>
            </li>
            {/* <li className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-500" />
              <span></span>
            </li> */}
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500" />
              <span>+91 7869150895</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 SmartyQ Inc. All rights reserved.</p>
        <p>Built with ❤️ for small business owners.</p>
      </div>
    </footer>
  );
};
