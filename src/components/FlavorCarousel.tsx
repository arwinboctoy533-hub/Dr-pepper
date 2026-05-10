import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Info, ShoppingCart } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const FLAVORS = [
  {
    name: "Original",
    color: "#711116",
    accent: "#E01A22",
    description: "The timeless blend of 23 signature flavors.",
    personality: "Bold & Authentic",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Cherry",
    color: "#4A0404",
    accent: "#FF003C",
    description: "A smooth collision of cherry and spice.",
    personality: "Vibrant & Sweet",
    image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=2564&auto=format&fit=crop"
  },
  {
    name: "Cream Soda",
    color: "#2C1810",
    accent: "#FFD700",
    description: "Velvety smooth vanilla meets carbonated bliss.",
    personality: "Rich & Smooth",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: "Zero Sugar",
    color: "#111111",
    accent: "#C0C0C0",
    description: "All the flavor, none of the sugar.",
    personality: "Pure & Unfiltered",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=2565&auto=format&fit=crop"
  }
];

export const FlavorCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const containerRef = React.useRef(null);
  
  const activeFlavor = FLAVORS[activeIndex];

  return (
    <section id="flavors" className="relative py-32 overflow-hidden bg-brand-black">
      {/* Background Accent */}
      <motion.div
        animate={{ backgroundColor: activeFlavor.color }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 opacity-10 blur-[100px] rounded-full scale-150"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl metallic-text"
            >
              FIND YOUR <br />
              <span className="p-2 border-b-2 border-brand-crimson">SIGNATURE.</span>
            </motion.h2>
            <p className="text-white/40 font-heading tracking-widest uppercase text-[10px] mt-6">Select a flavor to explore its identity</p>
          </div>
          
          <div className="flex gap-4">
            {FLAVORS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "w-12 h-1 overflow-hidden transition-all duration-500",
                  activeIndex === i ? "w-24 bg-brand-crimson" : "bg-white/20"
                )}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Interactive Visuals */}
          <div className="w-full lg:w-1/2 relative aspect-square flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.2, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-3/4 max-w-sm"
              >
                <div className="relative group perspective-1000">
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <img 
                      src={activeFlavor.image} 
                      alt={activeFlavor.name}
                      className="w-full rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    {/* Floating Accent */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-crimson/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center animate-bounce">
                      <Sparkles className="text-brand-crimson" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Background Halo */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-white/5 rounded-full"
            />
            <motion.div
              animate={{ scale: [1.3, 1.2, 1.3], rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-brand-crimson/10 rounded-full scale-125 border-dashed"
            />
          </div>

          {/* Flavor Details */}
          <div className="w-full lg:w-1/2 space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-8"
              >
                <div>
                  <span className="text-brand-crimson font-heading font-black uppercase tracking-widest text-[10px] mb-4 block">
                    {activeFlavor.personality}
                  </span>
                  <h3 className="text-7xl md:text-9xl mb-6 metallic-text">{activeFlavor.name}</h3>
                  <p className="text-xl text-white/70 leading-relaxed font-light">
                    {activeFlavor.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-2 font-black">Complexity</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={cn("h-1 flex-1 rounded-full", i < 4 ? "bg-brand-crimson" : "bg-white/10")} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-2 font-black">Fizz Level</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={cn("h-1 flex-1 rounded-full", i < 3 ? "bg-brand-crimson" : "bg-white/10")} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="flex-1 min-w-[200px] bg-brand-crimson hover:bg-brand-red text-white py-5 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all group shadow-[0_10px_30px_rgba(226,26,55,0.2)]">
                    <ShoppingCart size={18} className="group-hover:scale-110" />
                    Add to Cart
                  </button>
                  <button className="px-8 py-5 rounded-xl glass hover:bg-white/5 transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group border-white/20">
                    <Info size={18} className="group-hover:rotate-12" />
                    Full Specs
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
