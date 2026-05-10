import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-brand-black pt-32 pb-12 px-6 overflow-hidden border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-crimson/5 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16 relative z-10">
        <div className="lg:col-span-2 space-y-12">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-brand-crimson rounded-full flex items-center justify-center font-display text-3xl rotate-[-10deg]">DP</div>
            <span className="font-display text-4xl tracking-tight uppercase">DR PEPPER</span>
          </div>
          <h3 className="text-4xl md:text-6xl max-w-md leading-tight">STAY BOLD. STAY DIFFERENT.</h3>
          
          <div className="flex gap-6">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-crimson hover:border-brand-crimson transition-all group">
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 lg:col-span-2">
          <div className="space-y-8">
            <span className="font-heading font-black uppercase tracking-widest text-xs opacity-30">Flavor Vault</span>
            <ul className="space-y-6">
              {['Original', 'Cherry', 'Cream Soda', 'Strawberries & Cream', 'Zero Sugar'].map(item => (
                <li key={item}>
                  <a href="#" className="text-xl font-light text-white/50 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <span className="font-heading font-black uppercase tracking-widest text-xs opacity-30">Identity</span>
            <ul className="space-y-6">
              {['Our Story', 'Hype Drops', 'Merch', 'Locate', 'Privacy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-xl font-light text-white/50 hover:text-white transition-colors flex items-center gap-1 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] uppercase font-black tracking-[0.4em] opacity-20">© 2026 DR PEPPER/SEVEN UP, INC. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 text-[10px] uppercase font-black tracking-[0.2em] opacity-30">
          <a href="#" className="hover:opacity-100">Terms of Service</a>
          <a href="#" className="hover:opacity-100">Contact Us</a>
        </div>
      </div>

      {/* Floating Carbonation (Footer variant) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100],
              opacity: [0, 0.3, 0],
              scale: [0.5, 1]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              delay: i * 2 
            }}
            className="absolute bottom-0 bg-white/20 rounded-full blur-[2px]"
            style={{ 
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`
            }}
          />
        ))}
      </div>
    </footer>
  );
};
