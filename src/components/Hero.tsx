import React from 'react';
import { TopGoldenBanner } from './TopGoldenBanner';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pb-24 md:pb-28 overflow-hidden text-center">
      {/* Faixa Dourada Metálica Realista no Topo da Primeira Sessão */}
      <TopGoldenBanner />

      {/* Background Deep Ruby Gradient Accent */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[650px] md:w-[900px] h-[300px] sm:h-[450px] rounded-full blur-[24px] sm:blur-[90px] md:blur-[140px] opacity-40 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #810018 0%, #350009 50%, transparent 80%)' }}
      />

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
        
        {/* Headline */}
        <h1 className="font-heading text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#F8F0E9] uppercase leading-[1.15] max-w-4xl mx-auto mb-6">
          NÃO É SÓ UM PERFUME.<br />
          <span className="text-[#D4A43E] gold-gradient-text">É A </span>
          <span className="text-[#C70028] ruby-gradient-text drop-shadow-[0_0_20px_rgba(199,0,40,0.6)]">INTENÇÃO</span>
          <span className="text-[#D4A43E] gold-gradient-text"> QUE VOCÊ COLOCA NELE.</span>
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#F8F0E9]/90 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Descubra como trabalhar perfumes, ervas, rituais e momentos específicos para intenções de <strong className="text-[#D4A43E] font-semibold border-b border-[#D4A43E]/50 pb-0.5">amor</strong>, <strong className="text-[#D4A43E] font-semibold border-b border-[#D4A43E]/50 pb-0.5">magnetismo</strong>, <strong className="text-[#D4A43E] font-semibold border-b border-[#D4A43E]/50 pb-0.5">dinheiro</strong>, <strong className="text-[#D4A43E] font-semibold border-b border-[#D4A43E]/50 pb-0.5">riqueza</strong> e <strong className="text-[#D4A43E] font-semibold border-b border-[#D4A43E]/50 pb-0.5">sucesso</strong>.
        </p>

        {/* Premium Central Visual Element */}
        <div className="my-8 flex justify-center items-center bg-transparent">
          <div className="w-full max-w-[340px] min-[400px]:max-w-[380px] sm:max-w-[460px] md:max-w-[500px] mx-auto bg-transparent">
            <picture className="w-full h-auto block">
              <source media="(max-width: 640px)" srcSet="/hero-mobile.webp" type="image/webp" />
              <source media="(min-width: 641px)" srcSet="/hero.webp" type="image/webp" />
              <img
                src="/hero.webp"
                alt="Portal do Axé — perfumes e práticas ritualísticas"
                width="640"
                height="585"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-contain mx-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
              />
            </picture>
          </div>
        </div>

        {/* Curiosidade em itálico */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#F8F0E9] italic max-w-2xl mx-auto mb-6 leading-relaxed">
          “Você escolhe o objetivo. O guia mostra o perfume, a receita, o ritual e o momento certo para fazer.”
        </p>

        {/* Destaque */}
        <div className="inline-block py-2 px-5 sm:px-8 rounded-full border border-[#D4A43E]/40 bg-[#110305]/80 backdrop-blur-sm sm:backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(212,164,62,0.15)]">
          <p className="font-sans text-xs sm:text-sm md:text-base font-semibold tracking-wider text-[#D4A43E] uppercase">
            🌙 LUA &nbsp;•&nbsp; 🌿 ERVAS &nbsp;•&nbsp; 🕯️ RITUAL &nbsp;•&nbsp; ✨ AXÉ
          </p>
        </div>

        {/* Capsule CTA Button */}
        <div className="flex flex-col items-center justify-center">
          <button
            id="hero-cta-btn"
            onClick={onCtaClick}
            className="btn-capsule-ruby py-4 px-8 sm:px-12 text-base sm:text-lg w-full sm:w-auto max-w-md cursor-pointer"
          >
            QUERO ABRIR O PORTAL
          </button>

          {/* Trust Subtext */}
          <p className="font-sans text-xs sm:text-sm text-[#B5A39F] mt-3 tracking-wide">
            Acesso digital • Pagamento seguro
          </p>
        </div>

      </div>
    </section>
  );
};
