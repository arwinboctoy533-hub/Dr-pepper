import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export const HypeDrop = () => {
  const [timeLeft, setTimeLeft] = React.useState({ h: 12, m: 45, s: 30 });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        return { ...prev, h: Math.max(0, prev.h - 1), m: 59, s: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="drops" className="min-h-screen bg-brand-crimson relative flex items-center justify-center overflow-hidden py-24 px-6">
      {/* Background Explosive Energy */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-noise opacity-20" />
        <motion.div
           animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
           transition={{ duration: 4, repeat: Infinity }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-gradient-radial from-white/30 to-transparent blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-3 bg-white text-brand-crimson px-6 py-2 rounded-full font-heading font-black uppercase tracking-[0.3em] text-xs">
            <Zap size={14} fill="currentColor" /> LIMITED DROP
          </div>
          <h2 className="text-6xl md:text-8xl leading-tight text-white drop-shadow-2xl">
            DARK CHERRY <br /> <span className="p-2 bg-brand-black text-white px-6 inline-block rotate-[-2deg]">COLLECTORS</span>
          </h2>
          <p className="text-2xl text-white/80 font-light max-w-xl">
            The vault is opening. A once-in-a-decade flavor fusion. Exclusive packaging. Zero survivors.
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-sm">
            {[
              { label: 'HOURS', val: timeLeft.h },
              { label: 'MINUTES', val: timeLeft.m },
              { label: 'SECONDS', val: timeLeft.s }
            ].map(unit => (
              <div key={unit.label} className="bg-brand-black/50 backdrop-blur-xl p-4 rounded-2xl text-center border border-white/10">
                <span className="text-4xl font-display block">{unit.val < 10 ? `0${unit.val}` : unit.val}</span>
                <span className="text-[10px] tracking-widest opacity-50 font-bold">{unit.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-brand-black text-white px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-md shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
              Unlock Early Access <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-3 text-white/70">
              <ShieldCheck size={24} className="text-brand-black" />
              <span className="text-sm font-bold uppercase tracking-widest">Verified Drop Item</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100, rotate: 10 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          className="relative"
        >
          {/* Product Hype Visual */}
          <div className="relative z-10 p-8 bg-white/10 backdrop-blur-3xl rounded-[40px] border border-white/20 shadow-[-50px_50px_100px_rgba(0,0,0,0.3)]">
             <img 
               src="https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=2564&auto=format&fit=crop" 
               alt="Collectors Item" 
               className="w-full rounded-2xl grayscale"
               referrerPolicy="no-referrer"
             />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-brand-crimson rounded-full flex items-center justify-center animate-ping opacity-50" />
             </div>
          </div>
          {/* Floating Hype Accents */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-brand-black rounded-3xl flex items-center justify-center -rotate-12 border border-white/10 shadow-2xl"
          >
            <span className="font-display text-4xl text-brand-crimson leading-tight text-center">ONLY <br /> 500</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
