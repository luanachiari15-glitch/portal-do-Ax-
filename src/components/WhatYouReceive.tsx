import React, { useState } from 'react';
import { Sparkles, Heart, Coins, Flame, Leaf, Moon, CheckCircle2, ChevronRight, BookOpen, X } from 'lucide-react';
import { CONTENT_MODULES } from '../data/content';
import { ContentModule } from '../types';

interface WhatYouReceiveProps {
  onCtaClick: () => void;
}

export const WhatYouReceive: React.FC<WhatYouReceiveProps> = ({ onCtaClick }) => {
  const [selectedModule, setSelectedModule] = useState<ContentModule | null>(null);

  const getModuleIcon = (icon: string) => {
    switch (icon) {
      case 'rose':
        return <Heart className="w-5 h-5 text-[#ff4d6d]" />;
      case 'coins':
        return <Coins className="w-5 h-5 text-[#ffd875]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#ffd875]" />;
      case 'leaf':
        return <Leaf className="w-5 h-5 text-[#52b788]" />;
      case 'flame':
        return <Flame className="w-5 h-5 text-[#ff758f]" />;
      case 'moon':
        return <Moon className="w-5 h-5 text-[#e5c07b]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#ffd875]" />;
    }
  };

  return (
    <section id="conteudo" className="py-16 sm:py-24 relative overflow-hidden bg-[#0a0407]">
      {/* Subtle background divider glow */}
      <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#ffd875]/50 to-transparent mx-auto mb-12" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-serif font-semibold tracking-widest text-[#ffd875] bg-[#220712] border border-[#ffd875]/30 uppercase mb-3">
            ESTRUTURA COMPLETA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
            O QUE EXISTE DENTRO DO <span className="gold-text-gradient">PORTAL DO AXÉ?</span>
          </h2>
          <p className="font-quote text-lg sm:text-xl text-[#f3d4dc] leading-relaxed">
            Um guia completo para você explorar o universo dos perfumes encantados e suas diferentes intenções.
          </p>
        </div>

        {/* Grimoire Pages Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CONTENT_MODULES.map((module, index) => (
            <div
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className="grimoire-card rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between transition-all duration-300 cursor-pointer group hover:-translate-y-1.5"
            >
              {/* Grimoire Page Mockup Styling Frame */}
              <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-[#1f0611] border border-[#ffd875]/30 text-[10px] uppercase tracking-widest font-serif font-bold text-[#ffd875]">
                {module.badge}
              </div>

              <div>
                {/* Icon & Category Tag */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#280916] border border-[#ffd875]/40 flex items-center justify-center shadow-[0_0_15px_rgba(201,24,74,0.3)] group-hover:border-[#ffd875] transition-colors">
                    {getModuleIcon(module.icon)}
                  </div>
                  <span className="text-[11px] font-sans font-bold tracking-widest uppercase text-[#e0b1bd]">
                    {module.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#ffd875] transition-colors leading-snug">
                  {module.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#dec2ca] leading-relaxed mb-5 font-normal">
                  {module.description}
                </p>

                {/* Mini Grimoire Page Preview Box */}
                <div className="rounded-xl bg-[#14050d] border border-[#ffd875]/15 p-3.5 mb-4 group-hover:border-[#ffd875]/35 transition-colors">
                  <div className="flex items-center gap-1.5 text-[11px] font-serif font-semibold text-[#ffd875] mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#ffd875]" />
                    <span>Trecho do Grimório:</span>
                  </div>
                  <p className="text-xs text-[#ebd1d8] italic font-quote line-clamp-2">
                    "{module.ritualHighlight}"
                  </p>
                </div>
              </div>

              {/* Action Prompt */}
              <div className="pt-2 border-t border-[#ffd875]/10 flex items-center justify-between text-xs text-[#ffd875] font-semibold group-hover:text-[#fff]">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#ffd875]" />
                  Ver detalhes da prática
                </span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            id="what-you-receive-cta"
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4.5 rounded-xl btn-ruby font-serif text-base sm:text-lg tracking-wider uppercase font-bold inline-flex items-center justify-center gap-3 cursor-pointer shadow-xl hover:shadow-[#c9184a]/50"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span>QUERO CONHECER O PORTAL</span>
          </button>
          <p className="text-xs text-[#cbafb8] mt-3 font-sans">
            Guia digital imediato • Práticas organizadas passo a passo
          </p>
        </div>

      </div>

      {/* Module Detail Modal / Preview Grimoire Page */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg grimoire-card rounded-2xl p-6 sm:p-8 border-2 border-[#ffd875]/60 shadow-2xl shadow-[#a10f36]/40">
            {/* Close Button */}
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#200611] border border-[#ffd875]/40 flex items-center justify-center text-[#ffd875] hover:bg-[#c9184a] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#330a1c] border border-[#ffd875]/40 text-[10px] uppercase font-serif font-bold text-[#ffd875]">
                {selectedModule.badge}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#e8bdc9]">
                {selectedModule.tag}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-3">
              {selectedModule.title}
            </h3>

            <p className="text-sm text-[#f5e0e6] leading-relaxed mb-6 font-quote text-base">
              {selectedModule.description}
            </p>

            <div className="rounded-xl bg-[#12040b] border border-[#ffd875]/30 p-4 mb-6">
              <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#ffd875] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#ffd875]" />
                O que você encontra neste capítulo:
              </h4>
              <ul className="space-y-2.5">
                {selectedModule.previewPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#ebd5dc]">
                    <CheckCircle2 className="w-4 h-4 text-[#ffd875] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                setSelectedModule(null);
                onCtaClick();
              }}
              className="w-full py-3.5 rounded-xl btn-gold font-serif text-sm font-bold uppercase tracking-wider cursor-pointer"
            >
              QUERO ACESSAR ESTE CONTEÚDO
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
