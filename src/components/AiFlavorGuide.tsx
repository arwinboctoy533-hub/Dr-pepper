import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, Send, RefreshCw, ChevronRight } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { cn } from '@/src/lib/utils';

export const AiFlavorGuide = () => {
  const [prompt, setPrompt] = React.useState('');
  const [response, setResponse] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const generateRecommendation = async () => {
    if (!prompt) return;
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const res = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `You are a Dr Pepper flavor concierge. Based on the user's mood or preference: "${prompt}", recommend ONE of the following Dr Pepper flavors: Original, Cherry, Cream Soda, Strawberries & Cream, or Zero Sugar. Give a witty, bold, and energetic reason why it fits their vibe. Keep it under 60 words.`,
      });
      setResponse(res.text || "Something went wrong. Have a Dr Pepper anyway!");
    } catch (error) {
      console.error(error);
      setResponse("AI is having a soda break. I recommend the Original!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-brand-black py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-brand-crimson/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-crimson/20">
             <Brain className="text-brand-crimson" size={40} />
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">AI FLAVOR <span className="text-glow">CONCIERGE</span></h2>
          <p className="text-white/40 font-heading tracking-widest uppercase text-xs">Describe your vibe, and I'll find your perfect fusion.</p>
        </div>

        <div className="bg-neutral-900/80 backdrop-blur-2xl rounded-[40px] p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="space-y-12">
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: 'I'm feeling creative and nostalgic...'"
                className="w-full bg-transparent border-b-2 border-white/10 py-6 text-2xl md:text-3xl font-light focus:outline-none focus:border-brand-crimson transition-colors"
              />
              <button
                onClick={generateRecommendation}
                disabled={isLoading}
                className="absolute right-0 bottom-4 p-4 text-brand-crimson hover:bg-brand-crimson hover:text-white rounded-full transition-all disabled:opacity-50"
              >
                {isLoading ? <RefreshCw className="animate-spin" /> : <Send />}
              </button>
            </div>

            <AnimatePresence mode="wait">
              {response && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="p-8 bg-brand-crimson/10 rounded-3xl border border-brand-crimson/20">
                    <div className="flex items-center gap-2 text-brand-crimson font-bold uppercase tracking-widest text-xs mb-4">
                      <Sparkles size={14} /> AI Recommendation
                    </div>
                    <p className="text-xl md:text-2xl font-light leading-relaxed italic text-white/90">
                      "{response}"
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <button 
                      onClick={() => { setResponse(null); setPrompt(''); }}
                      className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                    >
                      Reset Vibe <RefreshCw size={14} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!response && !isLoading && (
              <div className="flex flex-wrap gap-4 justify-center">
                {['Energetic', 'Laid Back', 'Spicy', 'Rebellious'].map(vibe => (
                  <button
                    key={vibe}
                    onClick={() => setPrompt(`I'm feeling ${vibe}`)}
                    className="px-6 py-2 rounded-full border border-white/10 hover:border-brand-crimson text-[10px] font-bold uppercase tracking-wider transition-all"
                  >
                    {vibe}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
