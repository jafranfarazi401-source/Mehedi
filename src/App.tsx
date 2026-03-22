/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Mail, Phone, MapPin, ChevronRight, Menu, X, Sparkles, Loader2 } from 'lucide-react';
import { DESIGNS, Design } from './constants';
import { getDesignInspiration } from './services/geminiService';

export default function App() {
  const [filter, setFilter] = useState<string>('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const categories = ['All', 'Bridal', 'Arabic', 'Minimalist', 'Traditional'];
  const filteredDesigns = filter === 'All' 
    ? DESIGNS 
    : DESIGNS.filter(d => d.category === filter);

  const handleAiConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;

    setIsAiLoading(true);
    setAiResponse('');
    try {
      const result = await getDesignInspiration(aiPrompt);
      setAiResponse(result || 'No inspiration found. Try another prompt.');
    } catch (error) {
      setAiResponse('Error: Please ensure your GEMINI_API_KEY is configured in the Secrets panel.');
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#f5f5f0]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-tight italic">Mehedi Design</h1>
          
          <div className="hidden md:flex gap-8 font-sans text-xs uppercase tracking-widest font-medium">
            <a href="#home" className="hover:opacity-60 transition-opacity">Home</a>
            <a href="#gallery" className="hover:opacity-60 transition-opacity">Gallery</a>
            <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-black/5 p-6 flex flex-col gap-4 font-sans text-xs uppercase tracking-widest"
            >
              <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32 min-h-screen flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs uppercase tracking-[0.3em] text-[#5A5A40] font-semibold mb-4 block"
          >
            The Art of Henna
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-light leading-tight mb-8"
          >
            Exquisite <br />
            <span className="italic">Patterns</span> for <br />
            Every Soul.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black/60 max-w-md mb-10 leading-relaxed"
          >
            Celebrating tradition through intricate designs and contemporary artistry. We bring the timeless beauty of Mehndi to your special moments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a href="#gallery" className="olive-button inline-flex items-center gap-2">
              Explore Gallery <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-4">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            src="https://picsum.photos/seed/henna-hero-1/600/800" 
            alt="Mehndi Art" 
            className="pill-image w-full"
            referrerPolicy="no-referrer"
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            src="https://picsum.photos/seed/henna-hero-2/600/800" 
            alt="Mehndi Art" 
            className="pill-image w-full mt-12"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#5A5A40] font-semibold mb-4 block">Portfolio</span>
              <h3 className="text-4xl md:text-5xl font-medium">Curated Designs</h3>
            </div>
            
            <div className="flex flex-wrap gap-4 font-sans text-[10px] uppercase tracking-widest font-bold">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    filter === cat 
                      ? 'bg-[#5A5A40] text-white border-[#5A5A40]' 
                      : 'border-black/10 hover:border-black/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredDesigns.map((design) => (
                <motion.div
                  layout
                  key={design.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="card group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={design.imageUrl} 
                      alt={design.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <span className="text-white font-sans text-xs uppercase tracking-widest font-medium">View Details</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-[#5A5A40] font-bold mb-2 block">
                      {design.category}
                    </span>
                    <h4 className="text-xl font-medium mb-2">{design.title}</h4>
                    <p className="text-sm text-black/50 leading-relaxed">{design.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* AI Consultant Section */}
      <section id="ai-consultant" className="section-padding bg-[#5A5A40]/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] font-sans text-[10px] uppercase tracking-widest font-bold mb-8">
            <Sparkles size={14} /> AI Design Consultant
          </div>
          <h3 className="text-4xl md:text-5xl font-medium mb-8">Describe your <span className="italic">Dream</span> Design.</h3>
          <p className="text-lg text-black/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Not sure what you want? Tell our AI about the occasion, your style, or your favorite motifs, and we'll craft a unique design concept just for you.
          </p>

          <form onSubmit={handleAiConsult} className="relative max-w-2xl mx-auto mb-12">
            <input 
              type="text" 
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="e.g., A bridal design with peacocks and delicate lace for a summer wedding..."
              className="w-full bg-white border border-black/10 rounded-full px-8 py-4 pr-32 font-sans text-sm focus:outline-none focus:border-[#5A5A40] transition-colors"
            />
            <button 
              type="submit"
              disabled={isAiLoading}
              className="absolute right-2 top-2 bottom-2 bg-[#5A5A40] text-white rounded-full px-6 flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest font-bold disabled:opacity-50"
            >
              {isAiLoading ? <Loader2 size={14} className="animate-spin" /> : 'Consult'}
            </button>
          </form>

          <AnimatePresence>
            {aiResponse && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5 text-left"
              >
                <h5 className="font-sans text-[10px] uppercase tracking-widest text-[#5A5A40] font-bold mb-4">AI Inspiration</h5>
                <p className="text-lg italic text-black/80 leading-relaxed">"{aiResponse}"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1">
          <img 
            src="https://picsum.photos/seed/henna-artist/800/1000" 
            alt="The Artist" 
            className="rounded-[32px] w-full shadow-xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#5A5A40] font-semibold mb-4 block">Our Story</span>
          <h3 className="text-4xl md:text-5xl font-medium mb-8">Preserving the <span className="italic">Ancient</span> Craft.</h3>
          <div className="space-y-6 text-lg text-black/60 leading-relaxed">
            <p>
              Mehedi Design was born from a passion for the intricate and symbolic art of henna. With over a decade of experience, we specialize in creating unique patterns that tell a story.
            </p>
            <p>
              From the grand celebrations of bridal mehndi to the subtle elegance of minimalist designs, every stroke is applied with precision and care, using only the finest organic henna.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h5 className="text-3xl font-medium mb-1">10+</h5>
              <p className="font-sans text-[10px] uppercase tracking-widest text-black/40 font-bold">Years Experience</p>
            </div>
            <div>
              <h5 className="text-3xl font-medium mb-1">500+</h5>
              <p className="font-sans text-[10px] uppercase tracking-widest text-black/40 font-bold">Happy Brides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-[#5A5A40] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-white/60 font-semibold mb-4 block">Get in Touch</span>
          <h3 className="text-4xl md:text-6xl font-medium mb-12 italic">Let's create something beautiful together.</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <p className="font-sans text-sm tracking-widest">+1 (555) 000-0000</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <p className="font-sans text-sm tracking-widest">hello@mehedidesign.com</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <p className="font-sans text-sm tracking-widest">New York, NY</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#5A5A40] transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/5 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold">
          &copy; {new Date().getFullYear()} Mehedi Design Artistry. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
