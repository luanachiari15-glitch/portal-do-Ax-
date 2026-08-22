import React from 'react';

interface OffersProps {
  onSelectEssential: () => void;
  onSelectComplete?: () => void;
}

export const Offers: React.FC<OffersProps> = ({
  onSelectEssential,
  onSelectComplete
}) => {
  const completeLink = "https://pay.cakto.com.br/ye7dopx_1051731";

  const handleCompleteClick = () => {
    if (onSelectComplete) {
      onSelectComplete();
    } else {
      window.location.href = completeLink;
    }
  };
  const completeIncluded = [
    'Guia completo de perfumes mágicos',
    'Receitas organizadas por objetivo',
    'Instruções de preparo e ritual',
    'Orientações de quando utilizar',
    'Fases da Lua',
    'Dias da semana',
    'Associações com Orixás',
    'Lista de substituições de ervas',
    'Acesso imediato e vitalício'
  ];

  return (
    <section 
      id="ofertas" 
      className="relative py-20 md:py-32 overflow-hidden text-center scroll-mt-6"
      style={{
        background: 'linear-gradient(180deg, #050101 0%, #1a0307 40%, #350009 70%, #050101 100%)'
      }}
    >
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[160px] opacity-35 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #810018 0%, #350009 50%, transparent 75%)' }}
      />

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#F8F0E9] uppercase mb-4 leading-tight">
          ESCOLHA O SEU <span className="text-[#D4A43E] gold-gradient-text">PORTAL</span>
        </h2>

        {/* Section Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#B5A39F] max-w-2xl mx-auto mb-14 font-normal">
          Comece pelo guia essencial ou desbloqueie a experiência completa.
        </p>

        {/* Pricing Cards Container (On mobile: Complete first, Essential second) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-8 max-w-5xl mx-auto">
          
          {/* CARD 1 — ESSENCIAL (order-2 on mobile, order-1 on desktop) */}
          <div 
            className="w-full lg:w-[45%] order-2 lg:order-1 axe-card p-5 sm:p-8 flex flex-col justify-between text-left border border-[#D4A43E]/30 relative rounded-2xl"
            style={{
              background: 'linear-gradient(180deg, #110305 0%, #0a0203 100%)'
            }}
          >
            <div>
              {/* Badge */}
              <div className="mb-4">
                <span className="bg-[#110305] text-[#D4A43E] font-sans text-xs font-bold px-3 py-1 rounded-full border border-[#D4A43E]/40 uppercase tracking-wider">
                  ESSENCIAL
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F8F0E9] uppercase tracking-wider mb-1">
                PORTAL DO AXÉ
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#B5A39F] tracking-wide mb-6 uppercase">
                APENAS O GUIA DE PERFUMES
              </p>

              {/* Feature List */}
              <ul className="space-y-3 font-sans text-xs sm:text-sm mb-8">
                <li className="flex items-start gap-2.5 text-[#F8F0E9]">
                  <span className="text-[#D4A43E] font-bold">✓</span>
                  <span>Guia dos perfumes mágicos</span>
                </li>
                <li className="flex items-start gap-2.5 text-[#F8F0E9]">
                  <span className="text-[#D4A43E] font-bold">✓</span>
                  <span>Acesso imediato</span>
                </li>
                <li className="flex items-start gap-2.5 text-[#810018] opacity-60 line-through">
                  <span className="font-bold">✕</span>
                  <span>Sem Blindagem Espiritual</span>
                </li>
                <li className="flex items-start gap-2.5 text-[#810018] opacity-60 line-through">
                  <span className="font-bold">✕</span>
                  <span>Sem Banhos de Magnetismo Pessoal</span>
                </li>
                <li className="flex items-start gap-2.5 text-[#810018] opacity-60 line-through">
                  <span className="font-bold">✕</span>
                  <span>Sem Guia de Cores com Axé</span>
                </li>
                <li className="flex items-start gap-2.5 text-[#810018] opacity-60 line-through">
                  <span className="font-bold">✕</span>
                  <span>Não acompanha os 3 bônus</span>
                </li>
              </ul>
            </div>

            {/* Price & CTA */}
            <div className="pt-6 border-t border-[#D4A43E]/20 text-center">
              <div className="mb-5">
                <span className="font-sans text-xs text-[#B5A39F] uppercase tracking-wider block mb-1">
                  PAGAMENTO ÚNICO
                </span>
                <span className="font-heading text-3xl sm:text-4xl font-bold text-[#F8F0E9]">
                  R$ 9,90
                </span>
              </div>

              <button
                id="select-essential-btn"
                onClick={onSelectEssential}
                className="btn-capsule-outline py-3.5 px-6 text-sm sm:text-base w-full cursor-pointer"
              >
                QUERO POR R$ 9,90
              </button>
            </div>
          </div>

          {/* CARD 2 — COMPLETO (order-1 on mobile, order-2 on desktop, larger and dominant) */}
          <div 
            className="w-full lg:w-[55%] order-1 lg:order-2 rounded-2xl p-5 sm:p-9 flex flex-col justify-between text-left relative z-10 border-2 border-[#D4A43E] shadow-[0_20px_50px_rgba(129,0,24,0.4),0_0_30px_rgba(212,164,62,0.3)] transform lg:-translate-y-2"
            style={{
              background: 'linear-gradient(180deg, #350009 0%, #1f0307 40%, #110305 100%)'
            }}
          >
            {/* Top Badge: MAIS ESCOLHIDA */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-[#C70028] text-white font-sans text-xs font-bold px-4 py-1.5 rounded-full border border-[#D4A43E] uppercase tracking-wider shadow-lg flex items-center gap-1">
                🔥 MAIS ESCOLHIDA
              </span>
            </div>

            <div>
              {/* Title & Subtitle */}
              <div className="mt-2 mb-4">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
                  PORTAL DO AXÉ <span className="text-[#D4A43E] gold-gradient-text">COMPLETO</span>
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#D4A43E] font-semibold tracking-wide uppercase mt-1">
                  O GUIA COMPLETO + OS 3 BÔNUS
                </p>
              </div>

              {/* Complete Items Checklist */}
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#F8F0E9] mb-6">
                {completeIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#D4A43E] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Internal Box: 3 BÔNUS INCLUSOS */}
              <div className="bg-[#110305]/90 border border-[#D4A43E]/50 rounded-xl p-4 sm:p-5 mb-6 shadow-inner">
                <p className="font-heading text-xs sm:text-sm font-bold text-[#D4A43E] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <span>🎁</span>
                  <span>3 BÔNUS INCLUSOS</span>
                </p>
                <div className="space-y-2 font-sans text-xs sm:text-sm">
                  <div className="flex justify-between items-center text-[#F8F0E9]">
                    <span>🛡️ Blindagem Espiritual</span>
                    <span className="line-through text-[#B5A39F]/80">R$ 47,00</span>
                  </div>
                  <div className="flex justify-between items-center text-[#F8F0E9]">
                    <span>🌹 Banhos de Magnetismo Pessoal</span>
                    <span className="line-through text-[#B5A39F]/80">R$ 37,00</span>
                  </div>
                  <div className="flex justify-between items-center text-[#F8F0E9]">
                    <span>🎨 Guia de Cores com Axé</span>
                    <span className="line-through text-[#B5A39F]/80">R$ 37,00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="pt-4 border-t border-[#D4A43E]/30 text-center">
              <div className="mb-4">
                <span className="font-sans text-xs text-[#B5A39F] uppercase tracking-wider block mb-1">
                  ACESSO COMPLETO E VITALÍCIO
                </span>
                <span className="font-heading text-4xl sm:text-5xl font-bold text-[#D4A43E] gold-gradient-text">
                  R$ 27,00
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#F8F0E9] mt-1">
                  A experiência completa em um único acesso.
                </p>
              </div>

              <button
                id="select-complete-btn"
                onClick={handleCompleteClick}
                className="btn-capsule-ruby py-4 px-8 text-base sm:text-lg w-full cursor-pointer"
              >
                QUERO O PORTAL COMPLETO
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
