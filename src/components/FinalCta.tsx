import React from 'react';
import { Sparkles, Flame } from 'lucide-react';

interface FinalCtaProps {
  onSelectEssential: () => void;
  onSelectComplete: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onSelectEssential,
  onSelectComplete
}) => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#070204]">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #4a071c 0%, #17030a 50%, #070204 90%)'
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Top Ornament */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#ffd875]" />
          <Sparkles className="w-5 h-5 text-[#ffd875]" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#ffd875]" />
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-5 leading-tight">
          SE VOCÊ SENTIU CURIOSIDADE, <br />
          <span className="gold-text-gradient">TALVEZ SEJA HORA DE ABRIR O PORTAL.</span>
        </h2>

        {/* Subtext */}
        <p className="font-quote text-lg sm:text-2xl text-[#fce8ef] leading-relaxed max-w-2xl mx-auto mb-10">
          Escolha sua versão e comece a explorar o universo dos perfumes encantados.
        </p>

        {/* Conversion Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
          
          {/* Essential Button */}
          <button
            id="final-cta-essential"
            onClick={onSelectEssential}
            className="w-full sm:w-auto px-6 py-4 rounded-xl border border-[#ffd875]/40 bg-[#1a0510] hover:bg-[#2e081c] text-[#ffd875] font-serif text-sm sm:text-base font-bold uppercase tracking-wider transition-all cursor-pointer hover:border-[#ffd875]"
          >
            QUERO O PORTAL ESSENCIAL — R$ 9,90
          </button>

          {/* Complete Button (Highlighted) */}
          <button
            id="final-cta-complete"
            onClick={onSelectComplete}
            className="w-full sm:w-auto px-8 py-4.5 rounded-xl btn-gold font-serif text-base sm:text-lg font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)]"
          >
            <Flame className="w-5 h-5 text-[#1a080c]" />
            <span>QUERO O PORTAL COMPLETO — R$ 27,00</span>
          </button>

        </div>

        <p className="text-xs text-[#ccabb6] mt-5 font-sans">
          Acesso digital imediato • Pagamento 100% seguro • Garantia de 7 dias
        </p>

      </div>
    </section>
  );
};
