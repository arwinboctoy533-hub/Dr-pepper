import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Heart, Share2, Instagram } from 'lucide-react';

const FEED_ITEMS = [
  { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1514516348920-f5d905ff9319?q=80&w=2670&auto=format&fit=crop', author: '@drpepper_fanatic', likes: '12K' },
  { id: 2, type: 'video', url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop', author: '@streetstyle_dp', likes: '8.5K' },
  { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1521316730702-829a8e30df47?q=80&w=2670&auto=format&fit=crop', author: '@flavor_seeker', likes: '25K' },
  { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2670&auto=format&fit=crop', author: '@modern_dp', likes: '15K' }
];

export const SocialProof = () => {
  return (
    <section className="bg-brand-black py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div className="max-w-xl">
            <span className="text-brand-crimson font-heading font-bold uppercase tracking-widest text-xs block mb-4">The Culture</span>
            <h2 className="text-5xl md:text-7xl">HITTING THE <span className="text-glow">FEED.</span></h2>
          </div>
          <button className="mt-8 md:mt-0 flex items-center gap-2 text-white font-bold uppercase tracking-widest border-b border-brand-crimson pb-2 group">
            <Instagram size={20} />
            Follow @drpepper
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEED_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={item.url} 
                alt="Social content" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm tracking-wide">{item.author}</span>
                  <div className="flex gap-4">
                    <button className="hover:text-brand-crimson transition-colors"><Heart size={18} /></button>
                    <button className="hover:text-brand-crimson transition-colors"><MessageSquare size={18} /></button>
                    <button className="hover:text-brand-crimson transition-colors"><Share2 size={18} /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
