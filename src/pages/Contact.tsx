import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone } from 'lucide-react';

export default function Contact() {
  const [contactData, setContactData] = useState({
    subject: '',
    message: ''
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact submitted:', contactData);
    alert('Message sent! We will respond to you shortly.');
    setContactData({ subject: '', message: '' });
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
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
                  <Smartphone size={28} />
                </div>
                <div>
                  <p className="text-slate-900 font-black text-xl mb-1">Call Us</p>
                  <p className="text-slate-500 font-bold">0783733819</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 lg:p-12 rounded-[3rem] shadow-2xl border border-slate-100"
          >
            <form onSubmit={handleContactSubmit} className="space-y-6">
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
    </div>
  );
}
