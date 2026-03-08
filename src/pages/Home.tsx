import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  Gift, 
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Bike
} from 'lucide-react';

const HERO_IMAGE_URL = "https://i.postimg.cc/vY1CM3Jk/Whats-App-Video-2025-11-24-at-20-22-05-27dc7674.gif";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-28">
        <div className="absolute top-0 right-0 w-1/3 h-full gradient-bg opacity-[0.03] -skew-x-12 transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pickle-pink/10 text-pickle-purple font-bold text-sm mb-6">
                <Smartphone size={16} />
                <span>Colombo's #1 Women Driver App</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                Empowering Women to <span className="gradient-text">Drive Their Future</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
                Join Colombo’s first women driver app and be part of a safe, flexible, and rewarding community.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  to="/join" 
                  className="gradient-bg text-white px-10 py-5 rounded-2xl font-extrabold text-lg text-center hover:shadow-2xl hover:shadow-pickle-pink/40 transition-all active:scale-95"
                >
                  Join as Driver
                </Link>
                <Link 
                  to="/demo"
                  className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-extrabold text-lg text-center hover:border-pickle-purple hover:text-pickle-purple transition-all active:scale-95"
                >
                  Explore Demo
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border-[12px] border-white">
                <img 
                  src={HERO_IMAGE_URL} 
                  alt="PICKHER Platform" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -bottom-10 -right-10 z-20 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-50 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-xl leading-none">Safe & Secure</p>
                    <p className="text-slate-500 text-sm font-bold mt-1">Verified Community</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 z-0 w-80 h-80 gradient-bg rounded-full blur-[100px] opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Mission Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                PickHer was born out of a simple necessity: the need for women to travel freely, safely, and comfortably at any time of day.
              </p>
              <Link to="/mission" className="inline-flex items-center gap-2 text-pickle-purple font-black text-lg group">
                Read our full story
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why PICKHER Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">Why PICKHER?</h2>
            <div className="w-24 h-2 gradient-bg mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Safe & Supportive Environment",
                desc: "Drive with peace of mind in a community that looks out for you.",
                icon: <ShieldCheck size={32} />
              },
              {
                title: "Flexible Working Hours",
                desc: "You decide when to drive. Perfect for balancing life and work.",
                icon: <Clock size={32} />
              },
              {
                title: "Early Rewards & Incentives",
                desc: "Get rewarded for your loyalty with exclusive bonuses and perks.",
                icon: <Gift size={32} />
              },
              {
                title: "Fast & Simple Onboarding",
                desc: "Start earning in days with our streamlined verification process.",
                icon: <CheckCircle2 size={32} />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-pickle-pink/10 transition-all group"
              >
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
