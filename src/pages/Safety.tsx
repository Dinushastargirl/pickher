import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Smartphone } from 'lucide-react';

export default function Safety() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
              Safety <span className="gradient-text">Standards</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Your safety is our top priority. We implement rigorous standards to ensure every ride is secure and trustworthy.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Strict Identity Verification", icon: ShieldCheck },
                { title: "Criminal Background Checks", icon: ShieldCheck },
                { title: "GPS Real-time Monitoring", icon: Smartphone },
                { title: "SOS Emergency Integration", icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-pickle-purple/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-pickle-purple mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-black text-slate-900 leading-tight">{item.title}</h3>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://i.postimg.cc/15K3HCXF/Gemini-Generated-Image-v3zkj8v3zkj8v3zk.png" 
                alt="Safety Features" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white animate-pulse">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-slate-900 font-black">SOS Active</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
