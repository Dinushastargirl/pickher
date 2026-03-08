import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Menu, 
  X, 
  ArrowRight,
  Smartphone
} from 'lucide-react';

const LOGO_URL = "https://i.postimg.cc/v8p7dXWy/pickher.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Mission', path: '/mission' },
    { name: 'Safety', path: '/safety' },
    { name: 'Demo', path: '/demo' },
    { name: 'Join as Driver', path: '/join' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-pickle-pink/30 font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img src={LOGO_URL} alt="PICKHER Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-sm font-bold transition-colors ${
                    location.pathname === link.path ? 'text-pickle-purple' : 'text-slate-600 hover:text-pickle-purple'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/join" 
                className="gradient-bg text-white px-6 py-2.5 rounded-full font-bold hover:shadow-xl hover:shadow-pickle-pink/20 transition-all active:scale-95 flex items-center gap-2 text-sm"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
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
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-8 space-y-2 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`block font-bold py-3 px-4 rounded-xl hover:bg-slate-50 ${
                  location.pathname === link.path ? 'text-pickle-purple bg-slate-50' : 'text-slate-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/join" 
              className="block gradient-bg text-white text-center px-6 py-4 rounded-2xl font-bold shadow-lg mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Join as Driver
            </Link>
          </motion.div>
        )}
      </header>

      <main className="flex-grow pt-20">
        {children}
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
                  <Smartphone className="text-pickle-purple" size={20} />
                  <span>0783733819</span>
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
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
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
