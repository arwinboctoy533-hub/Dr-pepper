import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlavorCarousel } from './components/FlavorCarousel';
import { BrandStory } from './components/BrandStory';
import { SocialProof } from './components/SocialProof';
import { HypeDrop } from './components/HypeDrop';
import { ProductCommerce } from './components/ProductCommerce';
import { AiFlavorGuide } from './components/AiFlavorGuide';
import { StoreLocator } from './components/StoreLocator';
import { Footer } from './components/Footer';
import Lenis from 'lenis';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-black selection:bg-brand-crimson/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-crimson z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <FlavorCarousel />
        <BrandStory />
        <SocialProof />
        <HypeDrop />
        <ProductCommerce />
        <AiFlavorGuide />
        <StoreLocator />
      </main>

      <Footer />
      
      {/* Sticky Marquee Footer */}
      <div className="fixed bottom-0 w-full h-10 bg-brand-crimson z-[100] flex items-center overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          <span className="text-[10px] font-black uppercase tracking-widest text-white">DR PEPPER IS A ONE OF A KIND BLEND OF 23 FLAVORS</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/60">AVAILABLE AT MAJOR RETAILERS NEAR YOU</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white">TASTE THE REBELLION</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/60">ZERO SUGAR. MAXIMUM FLAVOR.</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white">STAY ORIGINAL</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/60">DR PEPPER IS A ONE OF A KIND BLEND OF 23 FLAVORS</span>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute inset-0 hero-gradient opacity-40" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      {/* Bubble Particles (Global) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
