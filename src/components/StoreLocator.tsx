import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, Navigation } from 'lucide-react';

export const StoreLocator = () => {
  return (
    <section className="bg-brand-black pb-32 px-6">
      <div className="max-w-7xl mx-auto bg-neutral-900 rounded-[50px] overflow-hidden border border-white/5 shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-20 flex flex-col justify-center h-full">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
            <MapPin className="text-brand-crimson" />
          </div>
          <h2 className="text-5xl md:text-7xl mb-8 leading-tight">THE FLAVOR <br /> IS <span className="text-glow">CLOSE.</span></h2>
          <p className="text-xl text-white/40 font-light mb-12">Instantly find the nearest retailer stocking the full 23-flavor experience.</p>
          
          <div className="relative group">
            <input
              type="text"
              placeholder="Enter ZIP code or City"
              className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:outline-none focus:border-brand-crimson transition-all text-xl"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-crimson text-white p-3 rounded-xl hover:scale-110 transition-transform">
               <Search size={24} />
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-brand-crimson font-bold uppercase tracking-widest text-xs cursor-pointer hover:underline">
            <Navigation size={16} /> Use My Exact Location
          </div>
        </div>

        <div className="relative min-h-[400px] bg-neutral-800">
          {/* Simulated Dark Map Visual */}
          <div className="absolute inset-0 grayscale contrast-[1.2] opacity-50">
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <motion.div
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-8 h-8 bg-brand-crimson rounded-full shadow-[0_0_30px_rgba(224,26,34,1)] border-4 border-white"
             />
          </div>
          <div className="absolute top-1/3 left-1/4">
             <div className="w-4 h-4 bg-brand-crimson/50 rounded-full blur-[2px]" />
          </div>
          <div className="absolute bottom-1/4 right-1/3">
             <div className="w-4 h-4 bg-brand-crimson/50 rounded-full blur-[2px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
