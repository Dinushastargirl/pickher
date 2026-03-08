import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Join() {
  const [formData, setFormData] = useState({
    phone: '',
    vehicleType: '',
    city: '',
    experience: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for applying! We will get back to you soon.');
    setFormData({ phone: '', vehicleType: '', city: '', experience: '' });
  };

  return (
    <div className="py-24">
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
                      <option value="">Select Bike Type</option>
                      <option value="scooter">Scooter</option>
                      <option value="electric-bike">Electric Bike</option>
                      <option value="motorcycle">Motorcycle</option>
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
    </div>
  );
}
