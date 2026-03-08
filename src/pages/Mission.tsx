import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Mission() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://i.postimg.cc/D008DRZy/Gemini-Generated-Image-mit900mit900mit9-(1).png" 
                alt="Woman using PICKHER app" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <div className="space-y-6">
              <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                PickHer was born out of a simple necessity: the need for women to travel freely, safely, and comfortably at any time of day.
              </p>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                We aren't just a ride-hailing app; we are a movement for freedom of movement. We empower female drivers with financial independence while giving passengers peace of mind.
              </p>
            </div>
            <div className="space-y-4 pt-4">
              {[
                "Exclusive for Women",
                "Financial Independence",
                "Safe & Comfortable Travel",
                "Community Empowerment",
                "Safe Night Travel"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-lg">
                  <CheckCircle2 className="text-pickle-purple" size={24} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
