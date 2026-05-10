import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled ? "bg-brand-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Placeholder - Dr Pepper Style */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-crimson rounded-full flex items-center justify-center font-display text-2xl rotate-[-10deg] group-hover:rotate-0 transition-transform duration-300">
            DP
          </div>
          <span className="font-display text-2xl tracking-tight">DR PEPPER</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Flavors', 'Drops', 'Story', 'Shop'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-widest text-white/70 hover:text-brand-crimson transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-brand-crimson text-[10px] flex items-center justify-center rounded-full font-bold">2</span>
          </button>
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button className="hidden md:block bg-brand-crimson hover:bg-brand-red text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(224,26,34,0.3)]">
            Buy Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-black/95 backdrop-blur-2xl absolute top-full left-0 right-0 border-b border-white/10 overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6 items-center">
              {['Flavors', 'Drops', 'Story', 'Shop'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-display uppercase tracking-wider hover:text-brand-crimson"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-brand-crimson text-white py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg">
                Buy Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
