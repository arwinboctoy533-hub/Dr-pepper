import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const STORY_STEPS = [
  {
    year: "1885",
    title: "THE GENESIS",
    text: "Created by pharmacist Charles Alderton in Waco, Texas. A bold alchemy of 23 flavors that defied convention.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2670&auto=format&fit=crop"
  },
  {
    year: "1960",
    title: "CULTURAL REBEL",
    text: "The 'King of Beverages' became the choice of the non-conformists. Distinctive, different, and proudly so.",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop"
  },
  {
    year: "TODAY",
    title: "ALWAYS DIFFERENT",
    text: "Continuing to push boundaries with limited drops and viral icons. Dr Pepper isn't just a drink; it's a statement.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
  }
];

export const BrandStory = () => {
  return (
    <section id="story" className="relative bg-brand-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mb-32 text-center"
        >
          <span className="text-brand-crimson font-heading font-bold uppercase tracking-[0.4em] text-sm block mb-4">Our Legacy</span>
          <h2 className="text-5xl md:text-8xl">ONE OF A <br /> <span className="text-glow underline decoration-brand-crimson/50 underline-offset-8">KIND HISTORY</span></h2>
        </motion.div>

        <div className="space-y-40 md:space-y-64">
          {STORY_STEPS.map((step, index) => (
            <StoryItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StoryItem = ({ step, index }: { step: any, index: number }) => {
  const containerRef = React.useRef(null);
  const isEven = index % 2 === 0;

  return (
    <div ref={containerRef} className={cn(
      "flex flex-col md:flex-row items-center gap-12 md:gap-24",
      isEven ? "md:flex-row" : "md:flex-row-reverse"
    )}>
      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: isEven ? -5 : 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-brand-crimson/20 translate-x-4 translate-y-4 rounded-3xl -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
          <img 
            src={step.image} 
            alt={step.title}
            className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl grayscale-[0.8] hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-8 left-8">
            <span className="font-display text-8xl md:text-[10rem] opacity-20 text-white select-none">{step.year}</span>
          </div>
        </motion.div>
      </div>

      <div className={cn("w-full md:w-1/2 space-y-8", isEven ? "text-left" : "text-right")}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-4xl md:text-6xl mb-6">{step.title}</h3>
          <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-10">
            {step.text}
          </p>
          <button className="px-8 py-4 rounded-full border border-white/20 hover:border-brand-crimson hover:text-brand-crimson transition-all font-bold uppercase tracking-widest text-xs">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};
