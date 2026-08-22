import React from 'react';
import { GuideCarousel } from './GuideCarousel';

interface GuideContentProps {
  onCtaClick: () => void;
}

export const GuideContent: React.FC<GuideContentProps> = ({ onCtaClick }) => {
  const guideCards = [
    {
      icon: '❤️',
      title: 'AMOR',
      desc: 'Perfumes e práticas para intenções relacionadas a amor, atração e conexão.'
    },
    {
      icon: '🌹',
      title: 'MAGNETISMO',
      desc: 'Práticas para trabalhar simbolicamente presença, autoestima e poder pessoal.'
    },
    {
      icon: '💰',
      title: 'DINHEIRO',
      desc: 'Práticas relacionadas a prosperidade, riqueza e abundância.'
    },
    {
      icon: '👑',
      title: 'SUCESSO',
      desc: 'Intenções relacionadas a confiança, reconhecimento e realização.'
    },
    {
      icon: '🚪',
      title: 'CAMINHOS',
      desc: 'Práticas relacionadas a movimento e novas possibilidades.'
    },
    {
      icon: '🌙',
      title: 'MOMENTO CERTO',
      desc: 'Fases da Lua e dias da semana associados às diferentes intenções.'
    }
  ];

  const steps = [
    'RECEITA',
    'RITUAL',
    'COMO USAR',
    'QUANDO USAR',
    'LUA',
    'DIA',
    'ERVAS'
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#050101] text-center border-t border-[#D4A43E]/20">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#F8F0E9] uppercase mb-4 leading-tight">
          TUDO O QUE VOCÊ PRECISA PARA COMEÇAR <span className="text-[#D4A43E] gold-gradient-text">ESTÁ AQUI.</span>
        </h2>

        {/* Section Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#B5A39F] max-w-2xl mx-auto mb-14 font-normal">
          Um guia organizado por objetivo para você parar de procurar receitas aleatórias pela internet.
        </p>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 text-left">
          
          {/* Left Column: Carrossel com as páginas do guia */}
          <div className="lg:col-span-5 flex justify-center">
            <GuideCarousel />
          </div>

          {/* Right Column: 2x3 Grid with 6 Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guideCards.map((card, idx) => (
                <div 
                  key={idx}
                  className="axe-card p-5 flex flex-col justify-start"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xl">{card.icon}</span>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#F8F0E9] uppercase tracking-wide">
                      {card.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#B5A39F] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* E CADA PRÁTICA VEM ORGANIZADA */}
        <div className="mt-14 mb-8">
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-[#F8F0E9] uppercase tracking-wider mb-6">
            E CADA PRÁTICA VEM ORGANIZADA.
          </h3>

          {/* Horizontal sequence of capsules */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <span className="px-3.5 py-1.5 rounded-full border border-[#D4A43E]/50 bg-[#110305] text-[#F8F0E9] font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                  {step}
                </span>
                {index < steps.length - 1 && (
                  <span className="text-[#D4A43E] font-bold text-xs sm:text-sm">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Central Wine Card (Substituição de Ervas) */}
        <div className="max-w-2xl mx-auto axe-card-wine p-6 sm:p-8 my-10 text-center shadow-[0_10px_30px_rgba(53,0,9,0.5)]">
          <div className="w-10 h-10 mx-auto rounded-full bg-[#810018] border border-[#D4A43E]/60 flex items-center justify-center mb-3">
            <span className="text-lg">🌿</span>
          </div>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#D4A43E] uppercase tracking-wider mb-2">
            Não encontrou uma erva?
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#F8F0E9] leading-relaxed">
            O guia também apresenta opções de substituição para facilitar a preparação.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button
            id="guide-cta-btn"
            onClick={onCtaClick}
            className="btn-capsule-ruby py-4 px-8 sm:px-12 text-base sm:text-lg w-full sm:w-auto max-w-md cursor-pointer"
          >
            QUERO MEU GUIA
          </button>
        </div>

      </div>
    </section>
  );
};
