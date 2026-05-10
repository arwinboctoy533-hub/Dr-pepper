import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star, TrendingUp, Package } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const PRODUCTS = [
  { id: 1, name: "Original 12-Pack", price: "$16.99", rating: 4.9, trending: true, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2670&auto=format&fit=crop" },
  { id: 2, name: "Cherry 12-Pack", price: "$17.99", rating: 4.8, trending: false, image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=2564&auto=format&fit=crop" },
  { id: 3, name: "Vanilla Cream 12-Pack", price: "$18.99", rating: 5.0, trending: true, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=2574&auto=format&fit=crop" },
  { id: 4, name: "Zero Sugar 12-Pack", price: "$16.99", rating: 4.7, trending: false, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=2565&auto=format&fit=crop" }
];

export const ProductCommerce = () => {
  return (
    <section id="shop" className="bg-brand-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-brand-crimson font-heading font-bold uppercase tracking-widest text-xs block mb-4">Marketplace</span>
            <h2 className="text-5xl md:text-7xl">RESTOCK THE <span className="text-glow">FRIDGE.</span></h2>
          </div>
          <div className="flex gap-4">
               <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-bold uppercase tracking-widest text-xs hover:bg-white/10">All Products</button>
               <button className="px-6 py-3 rounded-xl bg-brand-crimson font-bold uppercase tracking-widest text-xs">Bundles</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-neutral-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-brand-crimson/30 transition-all duration-500"
            >
              <div className="aspect-square relative overflow-hidden bg-white/5 p-8">
                {product.trending && (
                  <div className="absolute top-4 left-4 z-10 bg-brand-crimson text-white px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1">
                    <TrendingUp size={10} /> Trending
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-yellow-500">
                    <Star size={12} fill="currentColor" /> {product.rating}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-white/30 uppercase font-black">
                    <Package size={12} /> 12pk
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl mb-1 truncate">{product.name}</h3>
                  <span className="text-brand-crimson font-display text-4xl">{product.price}</span>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-white text-brand-black hover:bg-brand-crimson hover:text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2">
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscription Upsell */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-12 bg-gradient-to-r from-brand-red/10 to-brand-crimson/10 rounded-[40px] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl">NEVER RUN DRY.</h3>
            <p className="text-white/50 text-xl font-light">Subscribe and save 15% on every restock. Cancel anytime.</p>
          </div>
          <button className="bg-white text-brand-black px-12 py-6 rounded-full font-bold uppercase tracking-widest shadow-2xl hover:bg-brand-crimson hover:text-white transition-all whitespace-nowrap">
            Setup Subscription
          </button>
        </motion.div>
      </div>
    </section>
  );
};
