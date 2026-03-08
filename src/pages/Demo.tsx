import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bike, 
  MapPin, 
  Search, 
  ArrowLeft, 
  Navigation, 
  CheckCircle2,
  Clock,
  ShieldCheck
} from 'lucide-react';

type DemoState = 'home' | 'selection' | 'finding' | 'on_trip' | 'completed';

export default function Demo() {
  const [demoState, setDemoState] = useState<DemoState>('home');
  const [pickup, setPickup] = useState('Colombo Fort');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (demoState === 'finding') {
      timer = setTimeout(() => setDemoState('on_trip'), 3000);
    } else if (demoState === 'on_trip') {
      timer = setTimeout(() => setDemoState('completed'), 5000);
    }
    return () => clearTimeout(timer);
  }, [demoState]);

  const resetDemo = () => {
    setDemoState('home');
    setDestination('');
  };

  return (
    <div className="py-24 bg-slate-900 relative overflow-hidden min-h-[calc(100vh-80px)]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] gradient-bg rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] gradient-bg rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Experience the <br /> <span className="gradient-text">PICKHER App</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium">
              See how easy it is to book a ride. Our passenger interface is designed for speed, safety, and simplicity.
            </p>
            <div className="space-y-6 mb-12">
              {[
                { icon: MapPin, text: "Easy location selection" },
                { icon: Bike, text: "Instant bike booking" },
                { icon: ShieldCheck, text: "Verified female drivers only" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80 font-bold">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-pickle-pink">
                    <item.icon size={20} />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={resetDemo}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-black transition-all"
            >
              Reset Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[320px] aspect-[9/19.5] bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 shadow-2xl overflow-hidden">
              {/* Phone Content */}
              <div className="absolute inset-0 bg-white flex flex-col">
                {/* Status Bar */}
                <div className="h-10 px-6 flex justify-between items-center text-[10px] font-black text-slate-400">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {demoState === 'home' && (
                    <motion.div 
                      key="home"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 p-6 space-y-6"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-black text-slate-900">Hello, Sarah!</h3>
                        <div className="w-10 h-10 rounded-full gradient-bg" />
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Where are you going?</p>
                        <div className="relative">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input 
                            type="text" 
                            placeholder="Enter destination"
                            className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-slate-100 shadow-sm outline-none focus:border-pickle-purple transition-all font-bold text-sm"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && destination && setDemoState('selection')}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent Places</p>
                        {['University of Colombo', 'Majestic City', 'Galle Face'].map((place) => (
                          <button 
                            key={place}
                            onClick={() => { setDestination(place); setDemoState('selection'); }}
                            className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors text-left"
                          >
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                              <MapPin size={16} />
                            </div>
                            <span className="font-bold text-slate-700 text-sm">{place}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {demoState === 'selection' && (
                    <motion.div 
                      key="selection"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex-1 flex flex-col"
                    >
                      <div className="p-4 flex items-center gap-4 border-b border-slate-100">
                        <button onClick={() => setDemoState('home')} className="p-2 hover:bg-slate-50 rounded-lg">
                          <ArrowLeft size={20} />
                        </button>
                        <span className="font-black text-slate-900">Confirm Ride</span>
                      </div>
                      
                      <div className="flex-1 bg-slate-100 relative overflow-hidden">
                        {/* Mock Map */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pickle-purple rounded-full" />
                          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pickle-pink rounded-full" />
                          <div className="absolute top-1/2 left-1/2 w-full h-1 bg-pickle-purple/20 rotate-45" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-8 h-8 bg-pickle-purple rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
                            <Navigation size={16} />
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-t-[2rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] space-y-6">
                        <div className="flex items-center justify-between p-4 bg-pickle-purple/5 border border-pickle-purple/10 rounded-2xl">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white">
                              <Bike size={24} />
                            </div>
                            <div>
                              <p className="font-black text-slate-900">PickHer Bike</p>
                              <p className="text-[10px] text-slate-400 font-bold">2 mins away</p>
                            </div>
                          </div>
                          <p className="font-black text-slate-900">LKR 320</p>
                        </div>
                        
                        <button 
                          onClick={() => setDemoState('finding')}
                          className="w-full gradient-bg text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-pickle-pink/20"
                        >
                          Confirm Booking
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {demoState === 'finding' && (
                    <motion.div 
                      key="finding"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex-1 flex flex-col items-center justify-center p-8 text-center"
                    >
                      <div className="relative mb-12">
                        <div className="w-32 h-32 border-4 border-slate-100 rounded-full" />
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-4 border-t-pickle-purple border-r-transparent border-b-transparent border-l-transparent rounded-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Bike className="text-pickle-purple animate-pulse" size={40} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2">Finding Driver</h3>
                      <p className="text-slate-400 text-sm font-medium">Connecting you with the nearest female rider...</p>
                    </motion.div>
                  )}

                  {demoState === 'on_trip' && (
                    <motion.div 
                      key="on_trip"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex-1 flex flex-col"
                    >
                      <div className="flex-1 bg-slate-900 relative overflow-hidden">
                        {/* Dark Map Mode */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 left-0 w-full h-full border border-white/10" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <motion.div 
                            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white shadow-2xl"
                          >
                            <Bike size={20} />
                          </motion.div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-t-[2rem] space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-100" />
                            <div>
                              <p className="font-black text-slate-900">Priyani Perera</p>
                              <div className="flex items-center gap-1 text-yellow-500">
                                <span className="text-xs font-bold">4.9</span>
                                <span className="text-[10px]">★</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Arriving in</p>
                            <p className="font-black text-pickle-purple">4 mins</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex-1 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 font-bold text-sm">Message</div>
                          <div className="flex-1 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 font-bold text-sm">Call</div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {demoState === 'completed' && (
                    <motion.div 
                      key="completed"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex-1 flex flex-col items-center justify-center p-8 text-center"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-8">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2">Arrived Safely!</h3>
                      <p className="text-slate-400 text-sm font-medium mb-8">Hope you had a comfortable journey with PickHer.</p>
                      
                      <div className="w-full bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Fare</p>
                        <p className="text-3xl font-black text-slate-900">LKR 320.00</p>
                      </div>

                      <button 
                        onClick={resetDemo}
                        className="w-full gradient-bg text-white py-4 rounded-xl font-black"
                      >
                        Book Another Ride
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
