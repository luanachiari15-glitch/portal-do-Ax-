import React from 'react';
import { ShieldCheck, Sparkles, Check } from 'lucide-react';

interface GuaranteeProps {
  onCtaClick: () => void;
}

export const Guarantee: React.FC<GuaranteeProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#0a0206]">
      {/* Ruby / Gold Aura */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #4f081d 0%, #1a030a 55%, #080205 100%)'
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <div className="grimoire-card rounded-3xl p-8 sm:p-12 border-2 border-[#ffd875]/40 shadow-2xl relative overflow-hidden">
          
          {/* Circular Golden Wax Seal */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 flex items-center justify-center">
            {/* Spinning Golden Dashed Border */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none opacity-80"
              style={{
                border: '2px dashed #ffd875'
              }}
            />
            <div 
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center p-2 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #ffd875 0%, #a87920 50%, #f7df8f 100%)',
                border: '3px solid #fff3b0'
              }}
            >
              <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-[#1a080c] mb-0.5" />
              <span className="text-[9px] sm:text-[10px] font-serif font-black uppercase text-[#1a080c] tracking-widest text-center leading-tight">
                7 DIAS DE<br />GARANTIA
              </span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase mb-4">
            VOCÊ TEM <span className="gold-text-gradient">7 DIAS</span> PARA CONHECER O PORTAL DO AXÉ
          </h2>

          {/* Body Text */}
          <p className="font-quote text-base sm:text-lg text-[#f7e0e7] leading-relaxed max-w-2xl mx-auto mb-8">
            Adquira o Portal do Axé, acesse todos os materiais digitais, explore as práticas de perfumes encantados e conheça cada detalhe. Se dentro do período de 7 dias você entender que este material não é para você, basta solicitar o reembolso e o valor da sua compra será integralmente devolvido. Risco zero para você.
          </p>

          {/* CTA */}
          <button
            id="guarantee-cta"
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4.5 rounded-xl btn-gold font-serif text-base sm:text-lg tracking-wider uppercase font-bold inline-flex items-center justify-center gap-3 cursor-pointer shadow-xl"
          >
            <Sparkles className="w-5 h-5 text-[#1a080c]" />
            <span>QUERO CONHECER O PORTAL</span>
          </button>

        </div>

      </div>
    </section>
  );
};
