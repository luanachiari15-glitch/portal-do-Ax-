import React from 'react';
import { Gift, Sparkles, Moon, Calendar, BookOpen, Flame, CheckCircle, ShieldCheck } from 'lucide-react';
import { EXCLUSIVE_BONUSES } from '../data/content';

interface ExclusiveBonusesProps {
  onUnlockClick: () => void;
}

export const ExclusiveBonuses: React.FC<ExclusiveBonusesProps> = ({ onUnlockClick }) => {
  const getBonusIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-[#ffd875]" />;
      case 'moon':
        return <Moon className="w-6 h-6 text-[#e5c07b]" />;
      case 'calendar':
        return <Calendar className="w-6 h-6 text-[#ffd875]" />;
      case 'book-open':
        return <BookOpen className="w-6 h-6 text-[#ff758f]" />;
      default:
        return <Gift className="w-6 h-6 text-[#ffd875]" />;
    }
  };

  return (
    <section id="bonus" className="py-16 sm:py-24 relative overflow-hidden bg-[#0d040a]">
      {/* Ruby and Gold Aura Lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] rounded-full blur-[140px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, #a10f36 0%, #d4af37 40%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full ruby-badge text-xs font-serif font-bold tracking-widest text-[#ffd875] uppercase mb-4 animate-pulse">
            <Gift className="w-4 h-4 text-[#ffd875]" />
            <span>EXCLUSIVO NA VERSÃO COMPLETA (PREMIUM)</span>
            <Gift className="w-4 h-4 text-[#ffd875]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
            E NA VERSÃO COMPLETA, <br className="hidden sm:inline" />
            <span className="gold-text-gradient">VOCÊ AINDA RECEBE...</span>
          </h2>

          <p className="font-quote text-lg sm:text-xl text-[#f2d5de] leading-relaxed">
            Materiais complementares refinados para potencializar seus rituais e aprofundar seus conhecimentos.
          </p>
        </div>

        {/* 4 Large Premium Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {EXCLUSIVE_BONUSES.map((bonus, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: 'linear-gradient(145deg, #240816 0%, #13040b 60%, #0c0207 100%)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 10px 30px -10px rgba(161, 15, 54, 0.35)'
              }}
            >
              {/* Corner Gold Ornament Accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#ffd875]/60 pointer-events-none" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#ffd875]/60 pointer-events-none" />

              {/* Bonus Tag & Price Ribbon */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3b0b20] border border-[#ffd875]/40 text-xs font-serif font-bold text-[#ffd875]">
                  <Gift className="w-3.5 h-3.5" />
                  <span>🎁 BÔNUS #{bonus.number}</span>
                </div>

                <div className="flex items-center gap-2 text-right">
                  <span className="text-[11px] text-[#dec2ca] line-through">
                    {bonus.estimatedValue}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#c9184a] text-white text-[11px] font-bold uppercase tracking-wider">
                    GRÁTIS NO COMPLETO
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 items-start">
                
                {/* 3D Mini Mockup Cover for each bonus */}
                <div className="w-full sm:w-28 sm:h-36 shrink-0 rounded-xl p-[2px] bg-gradient-to-br from-[#ffd875] via-[#855e16] to-[#c9184a] shadow-lg flex items-center justify-center">
                  <div className="w-full h-full rounded-[10px] bg-[#1a0610] p-3 flex flex-col justify-between items-center text-center">
                    <div className="w-8 h-8 rounded-full bg-[#300a1b] border border-[#ffd875]/40 flex items-center justify-center">
                      {getBonusIcon(bonus.iconName)}
                    </div>
                    <span className="font-serif text-[9px] font-bold text-[#ffd875] uppercase tracking-wider">
                      BÔNUS #{bonus.number}
                    </span>
                    <span className="text-[8px] text-[#eed0d9] uppercase tracking-widest font-mono">
                      PDF DIGITAL
                    </span>
                  </div>
                </div>

                {/* Bonus Content & Copy */}
                <div className="flex-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {bonus.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#f0d8df] leading-relaxed mb-4">
                    {bonus.shortBenefit}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-[#ffd875] font-serif">
                    <CheckCircle className="w-3.5 h-3.5 text-[#ffd875]" />
                    <span>Incluso automaticamente no Portal Completo</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Section Conversion Banner */}
        <div className="grimoire-card rounded-3xl p-6 sm:p-8 border-2 border-[#ffd875]/50 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#ffd875] uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-[#ffd875]" />
                <span>VALOR TOTAL DOS BÔNUS SOMADOS: R$ 130,00</span>
              </div>
              <p className="text-base sm:text-lg font-serif font-bold text-white">
                Desbloqueie todos os 4 bônus na oferta Portal Completo por apenas <span className="gold-text-gradient text-xl">R$ 27,00</span>
              </p>
            </div>

            <button
              onClick={onUnlockClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl btn-gold font-serif text-sm font-bold tracking-wider uppercase cursor-pointer shrink-0"
            >
              GARANTIR TODOS OS BÔNUS
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
