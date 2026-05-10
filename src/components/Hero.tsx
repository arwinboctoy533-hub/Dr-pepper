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
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-brand-crimson font-heading font-bold uppercase tracking-[0.3em] mb-6 text-sm"
          >
            One of a Kind. Since 1885.
          </motion.span>
          <h1 className="text-6xl md:text-8xl lg:text-[10vw] leading-[0.85] mb-8 text-glow">
            THE FLAVOR <br />
            <span className="text-brand-crimson">HITS DIFFERENT</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
            Experience the legendary 23 flavors fused in a cinematic collision of taste and attitude. Not your average soda.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <button className="group relative bg-white text-brand-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                Buy Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-brand-crimson translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              />
            </button>
            <button className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm hover:text-brand-crimson transition-colors py-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group">
                <Play size={16} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              </div>
              Watch Brand Film
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
          <div className="absolute inset-0 bg-gradient-radial from-brand-crimson/20 to-transparent blur-3xl rounded-full scale-150 animate-pulse" />
          
          {/* Can Placeholder Image */}
          <div className="relative z-10 w-full max-w-[400px] aspect-[1/2] rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2670&auto=format&fit=crop" 
              alt="Dr Pepper Can" 
              className="w-full h-full object-cover grayscale-[0.2] contrast-[1.2] group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Liquid Shine Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-black/90 to-transparent">
              <span className="text-4xl font-display text-white">ORIGINAL</span>
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
