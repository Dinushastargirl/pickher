import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  Gift, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Facebook, 
  Mail,
  Menu,
  X,
  Smartphone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/v8p7dXWy/pickher.png";
const HERO_IMAGE_URL = "https://i.postimg.cc/vY1CM3Jk/Whats-App-Video-2025-11-24-at-20-22-05-27dc7674.gif";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    vehicleType: '',
    city: '',
    experience: ''
  });

  const [contactData, setContactData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for applying! We will get back to you soon.');
    setFormData({ phone: '', vehicleType: '', city: '', experience: '' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact submitted:', contactData);
    alert('Message sent! We will respond to you shortly.');
    setContactData({ email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-pickle-pink/30 font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src={LOGO_URL} alt="PICKHER Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <a href="#apply" className="text-slate-600 hover:text-pickle-purple transition-colors font-semibold">Join as Driver</a>
              <a href="#demo" className="text-slate-600 hover:text-pickle-purple transition-colors font-semibold">Explore Demo</a>
              <a href="#contact-section" className="text-slate-600 hover:text-pickle-purple transition-colors font-semibold">Contact Us</a>
              <a 
                href="#apply" 
                className="gradient-bg text-white px-7 py-3 rounded-full font-bold hover:shadow-xl hover:shadow-pickle-pink/20 transition-all active:scale-95 flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-pickle-purple"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-8 space-y-4 shadow-xl"
          >
            <a href="#apply" className="block text-slate-600 font-bold py-3 px-4 rounded-xl hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Join as Driver</a>
            <a href="#demo" className="block text-slate-600 font-bold py-3 px-4 rounded-xl hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Explore Demo</a>
            <a href="#contact-section" className="block text-slate-600 font-bold py-3 px-4 rounded-xl hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            <a 
              href="#apply" 
              className="block gradient-bg text-white text-center px-6 py-4 rounded-2xl font-bold shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Join as Driver
            </a>
          </motion.div>
        )}
      </header>

      <main className="flex-grow pt-20">
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
                  <a 
                    href="#apply" 
                    className="gradient-bg text-white px-10 py-5 rounded-2xl font-extrabold text-lg text-center hover:shadow-2xl hover:shadow-pickle-pink/40 transition-all active:scale-95"
                  >
                    Join as Driver
                  </a>
                  <a 
                    href="#demo"
                    className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-extrabold text-lg text-center hover:border-pickle-purple hover:text-pickle-purple transition-all active:scale-95"
                  >
                    Explore Demo
                  </a>
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

        {/* What is PICKHER Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000" 
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
                className="order-1 lg:order-2 space-y-8"
              >
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                  What is <span className="gradient-text">PICKHER?</span>
                </h2>
                <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                  PICKHER is a ride-sharing platform designed exclusively for women drivers and passengers. It provides safety, flexibility, and empowerment while building a supportive community.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    "Exclusive for Women",
                    "Real-time Safety Monitoring",
                    "Community-driven Support"
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
        </section>

        {/* Why PICKHER Section */}
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

        {/* Demo Section */}
        <section id="demo" className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] gradient-bg rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] gradient-bg rounded-full blur-[120px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
                  Interested? Try the <br /> <span className="gradient-text">PICKHER app demo!</span>
                </h2>
                <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium">
                  Experience the interface and features of the PICKHER app through our interactive prototype. See how easy it is to manage your rides and earnings.
                </p>
                <button className="gradient-bg text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-pickle-pink/30 hover:scale-105 transition-transform active:scale-95">
                  Launch Interactive Demo
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-[320px] aspect-[9/19.5] bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 shadow-2xl overflow-hidden">
                  {/* Mock Screen */}
                  <div className="absolute inset-0 bg-white p-6 flex flex-col">
                    <div className="h-6 w-24 bg-slate-100 rounded-full mb-8 mx-auto" />
                    <div className="space-y-4">
                      <div className="h-40 w-full gradient-bg rounded-2xl opacity-80" />
                      <div className="h-8 w-3/4 bg-slate-100 rounded-lg" />
                      <div className="h-4 w-full bg-slate-50 rounded-lg" />
                      <div className="h-4 w-full bg-slate-50 rounded-lg" />
                      <div className="pt-8 space-y-3">
                        <div className="h-12 w-full bg-pickle-purple rounded-xl" />
                        <div className="h-12 w-full border-2 border-slate-100 rounded-xl" />
                      </div>
                    </div>
                  </div>
                  {/* Interactive overlay */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors cursor-pointer flex items-center justify-center group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">
                      <ArrowRight className="text-pickle-purple" size={32} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join as Driver Section */}
        <section id="apply" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">Were you waiting for this opportunity?</h2>
              <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                Take the first step towards financial independence and community leadership. Apply now to become a PICKHER driver.
              </p>
            </div>
            <div className="bg-white rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 gradient-bg p-12 text-white flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                      alt="Empowered woman driver" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-6">Why Apply?</h3>
                    <div className="space-y-6">
                      {[
                        "Guaranteed Safety",
                        "Higher Earnings",
                        "Flexible Shifts",
                        "Supportive Network"
                      ].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 font-bold text-lg">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <ChevronRight size={14} />
                          </div>
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 p-12 lg:p-16">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="07X XXX XXXX"
                          className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-pickle-purple focus:ring-4 focus:ring-pickle-purple/10 outline-none transition-all font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">City</label>
                        <input 
                          type="text" 
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          placeholder="Colombo 03"
                          className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-pickle-purple focus:ring-4 focus:ring-pickle-purple/10 outline-none transition-all font-medium"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Vehicle Type</label>
                        <select 
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-pickle-purple focus:ring-4 focus:ring-pickle-purple/10 outline-none transition-all font-medium bg-white appearance-none"
                        >
                          <option value="">Select Vehicle</option>
                          <option value="car">Car / Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="scooter">Scooter</option>
                          <option value="tuk">Tuk Tuk</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Driving Experience</label>
                        <input 
                          type="text" 
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. 5 Years"
                          className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-pickle-purple focus:ring-4 focus:ring-pickle-purple/10 outline-none transition-all font-medium"
                        />
                      </div>
                    </div>
                    <button 
                      type="submit"
                      className="w-full gradient-bg text-white py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-pickle-pink/40 transition-all active:scale-[0.98] mt-4"
                    >
                      Apply Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact-section" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
                  Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-xl text-slate-600 mb-12 font-medium leading-relaxed">
                  Have questions about joining as a driver or using the app? Our team is here to help you 24/7.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-pickle-purple shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-slate-900 font-black text-xl mb-1">Email Us</p>
                      <a href="mailto:hello@pickher.lk" className="text-slate-500 font-bold hover:text-pickle-purple transition-colors">hello@pickher.lk</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-pickle-purple shrink-0">
                      <Smartphone size={28} />
                    </div>
                    <div>
                      <p className="text-slate-900 font-black text-xl mb-1">Call Us</p>
                      <p className="text-slate-500 font-bold">+94 11 234 5678</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 lg:p-12 rounded-[3rem] shadow-2xl border border-slate-100"
              >
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={contactData.email}
                      onChange={handleContactChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-pickle-purple focus:ring-4 focus:ring-pickle-purple/10 outline-none transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={contactData.subject}
                      onChange={handleContactChange}
                      required
                      placeholder="How can we help?"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-pickle-purple focus:ring-4 focus:ring-pickle-purple/10 outline-none transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={contactData.message}
                      onChange={handleContactChange}
                      required
                      rows={4}
                      placeholder="Write your message here..."
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-pickle-purple focus:ring-4 focus:ring-pickle-purple/10 outline-none transition-all font-medium resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full gradient-bg text-white py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-pickle-pink/40 transition-all active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div className="space-y-8">
              <img src={LOGO_URL} alt="PICKHER Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Colombo's first ride-sharing platform designed exclusively for women, by women. Join us in driving change.
              </p>
              <div className="flex gap-5">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-pickle-purple hover:border-pickle-purple hover:shadow-lg transition-all">
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h4 className="text-xl font-black text-slate-900">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-500 font-medium">
                  <Mail className="text-pickle-purple" size={20} />
                  <a href="mailto:hello@pickher.lk" className="hover:text-pickle-purple transition-colors">hello@pickher.lk</a>
                </div>
                <div className="flex items-center gap-4 text-slate-500 font-medium">
                  <Smartphone className="text-pickle-purple" size={20} />
                  <span>+94 11 234 5678</span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h4 className="text-xl font-black text-slate-900">Newsletter</h4>
              <p className="text-slate-500 font-medium">Stay updated with our latest news and offers.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-5 py-3 rounded-xl border border-slate-200 focus:border-pickle-purple outline-none"
                />
                <button className="gradient-bg text-white px-5 py-3 rounded-xl font-bold">Join</button>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-200 flex flex-col md:row justify-between items-center gap-6">
            <p className="text-slate-400 font-bold text-sm">
              © {new Date().getFullYear()} PICKHER Platform (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex gap-10 text-sm font-bold text-slate-400">
              <a href="#" className="hover:text-slate-600">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600">Terms of Service</a>
              <a href="#" className="hover:text-slate-600">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
