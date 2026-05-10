import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Motion */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-gradient-radial from-brand-red/30 via-transparent to-transparent opacity-50" />
      </motion.div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="mb-4 flex items-center gap-2 text-brand-crimson font-bold text-xs uppercase tracking-[0.2em] justify-center lg:justify-start">
            <span className="w-8 h-[1px] bg-brand-crimson"></span>
            The 23 Flavor Symphony
          </div>
          <h1 className="text-7xl md:text-9xl lg:text-[120px] leading-[0.85] mb-8 metallic-text font-black tracking-tighter">
            ONE OF<br />A KIND.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-md mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
            Not your average soda. A complex, fizzy, and undeniably smooth blend of 23 secret flavors designed for those who refuse to settle for boring.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <button className="px-10 py-5 bg-brand-crimson text-white rounded-lg font-black uppercase text-sm hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(226,26,55,0.3)]">
              Buy Now
            </button>
            <button className="px-10 py-5 glass text-white rounded-lg font-bold uppercase text-sm border-white/20 hover:bg-white/5 transition-all">
              Find Your Flavor
            </button>
          </div>
        </motion.div>

        {/* Cinematic Can Visual */}
        <motion.div
          style={{ rotate, scale }}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center"
        >
          {/* Decorative Elements */}
          <div className="absolute w-[450px] h-[450px] bg-brand-crimson rounded-full filter blur-[120px] opacity-20" />
          
          <div className="relative w-[280px] h-[520px] drop-shadow-[0_0_40px_rgba(94,18,29,0.6)] group cursor-pointer">
            <div className="w-full h-full rounded-[48px] bg-gradient-to-r from-[#3D0A11] via-[#851828] to-[#3D0A11] border-x border-white/10 relative overflow-hidden flex flex-col group-hover:scale-105 transition-transform duration-700">
              <div className="absolute top-0 w-full h-[60px] bg-gradient-to-b from-black/40 to-transparent"></div>
              <div className="mt-12 px-8">
                <div className="text-[14px] font-bold text-white/40 uppercase tracking-[0.3em]">The Original</div>
                <div className="text-[80px] font-black text-white leading-none mt-4 -ml-2 italic transform -rotate-12 select-none opacity-5">PEPPER</div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <div className="w-[160px] h-[160px] rounded-full border-4 border-white/10 flex items-center justify-center group-hover:border-brand-crimson/50 transition-colors">
                   <div className="text-center">
                     <div className="text-5xl font-black italic">Dr</div>
                     <div className="text-5xl font-black italic -mt-2">Pepper</div>
                   </div>
                 </div>
              </div>
              <div className="absolute bottom-12 w-full px-8">
                 <div className="h-1 w-full bg-white/20 rounded-full mb-2"></div>
                 <div className="flex justify-between text-[10px] uppercase font-black tracking-widest text-white/50">
                   <span>Est. 1885</span>
                   <span>12 FL OZ (355mL)</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Floating Flavor Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: Math.random() * 3 + 2, 
                repeat: Infinity,
                delay: i * 0.5
              }}
              className="absolute w-4 h-4 bg-brand-crimson rounded-full blur-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-crimson to-transparent" />
      </motion.div>
    </section>
  );
};
