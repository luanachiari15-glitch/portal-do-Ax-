import React from 'react';

export const Bonuses: React.FC = () => {
  const bonusList = [
    {
      num: 'BÔNUS 01',
      oldPrice: 'R$ 47,00',
      icon: '🛡️',
      title: 'BLINDAGEM ESPIRITUAL',
      desc: 'Como se proteger da inveja e trabalhar práticas relacionadas à proteção e quebra de demanda.',
      italic: 'Para complementar suas práticas com conteúdos voltados à proteção espiritual.'
    },
    {
      num: 'BÔNUS 02',
      oldPrice: 'R$ 37,00',
      icon: '🌹',
      title: 'BANHOS DE MAGNETISMO PESSOAL',
      desc: 'Um guia com práticas de banho voltadas ao magnetismo, autoestima, presença e confiança.',
      italic: 'Um complemento para quando sua intenção é trabalhar primeiro a sua própria energia e presença.'
    },
    {
      num: 'BÔNUS 03',
      oldPrice: 'R$ 37,00',
      icon: '🎨',
      title: 'GUIA DE CORES COM AXÉ',
      desc: 'Descubra as associações tradicionais de diferentes cores e como utilizá-las nas suas roupas, acessórios e maquiagem de acordo com sua intenção.',
      colorsLegend: [
        { name: 'Amor', color: '#E0002F' },
        { name: 'Prosperidade', color: '#D4A43E' },
        { name: 'Crescimento', color: '#2A9D8F' },
        { name: 'Proteção', color: '#110305' },
        { name: 'Renovação', color: '#F8F0E9' }
      ]
    }
  ];

  return (
    <section 
      className="relative py-20 md:py-28 overflow-hidden text-center lazy-section"
      style={{
        background: 'linear-gradient(180deg, #050101 0%, #1a0307 35%, #350009 60%, #050101 100%)',
        containIntrinsicSize: '1px 800px'
      }}
    >
      {/* Background radial glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[700px] h-[300px] sm:h-[500px] rounded-full blur-[24px] sm:blur-[90px] md:blur-[140px] opacity-35 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #810018 0%, transparent 75%)' }}
      />

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#F8F0E9] uppercase mb-4 leading-tight">
          E A VERSÃO COMPLETA AINDA ESCONDE <span className="text-[#D4A43E] gold-gradient-text">3 BÔNUS.</span>
        </h2>

        {/* Section Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#B5A39F] max-w-2xl mx-auto mb-14 font-normal">
          Materiais complementares para ampliar suas possibilidades de prática.
        </p>

        {/* 3 Bonus Cards in Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          {bonusList.map((bonus, idx) => (
            <div
              key={idx}
              className="axe-card p-5 sm:p-7 flex flex-col justify-between relative border border-[#D4A43E]/35 hover:border-[#D4A43E]/70 transition-all duration-300"
              style={{
                background: 'linear-gradient(180deg, #110305 0%, #1f0409 100%)'
              }}
            >
              {/* Card Header: Bonus Number, Old Price, Tag */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-sans text-xs font-bold tracking-widest text-[#D4A43E] uppercase">
                    {bonus.num}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#B5A39F] line-through">
                      {bonus.oldPrice}
                    </span>
                    <span className="bg-[#810018] text-[#F8F0E9] font-sans text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#D4A43E]/50">
                      GRÁTIS
                    </span>
                  </div>
                </div>

                {/* Bonus Title */}
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#F8F0E9] uppercase tracking-wide mb-3 flex items-start gap-2">
                  <span className="text-xl shrink-0">{bonus.icon}</span>
                  <span>{bonus.title}</span>
                </h3>

                {/* Bonus Description */}
                <p className="font-sans text-xs sm:text-sm text-[#B5A39F] leading-relaxed mb-4">
                  {bonus.desc}
                </p>
              </div>

              {/* Specific footer depending on card */}
              <div className="pt-3 border-t border-[#D4A43E]/20">
                {bonus.italic && (
                  <p className="font-sans text-xs text-[#D4A43E]/90 italic leading-relaxed">
                    “{bonus.italic}”
                  </p>
                )}

                {bonus.colorsLegend && (
                  <div>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {bonus.colorsLegend.map((c, i) => (
                        <div key={i} className="flex items-center gap-1.5 bg-[#050101] px-2 py-1 rounded-full border border-[#D4A43E]/25">
                          <span 
                            className="w-2.5 h-2.5 rounded-full inline-block border border-white/20"
                            style={{ backgroundColor: c.color }}
                          />
                          <span className="text-[10px] text-[#F8F0E9] font-sans">
                            {c.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Final Quote / Transition */}
        <div className="max-w-2xl mx-auto text-center mt-4">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F8F0E9] uppercase tracking-wider mb-2">
            O PERFUME É <span className="text-[#D4A43E] gold-gradient-text">O COMEÇO.</span>
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#B5A39F] leading-relaxed">
            Os bônus complementam a experiência trabalhando diferentes elementos: perfume, banho, proteção e cores.
          </p>
        </div>

      </div>
    </section>
  );
};
