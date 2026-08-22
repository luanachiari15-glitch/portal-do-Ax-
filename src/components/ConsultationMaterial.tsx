import React from 'react';

export const ConsultationMaterial: React.FC = () => {
  const formats = [
    {
      icon: '📱',
      title: 'No celular',
      desc: 'Abra em qualquer lugar para consultar receitas e dias rapidamente.'
    },
    {
      icon: '🖨️',
      title: 'Para imprimir',
      desc: 'Formato pronto para impressão em alta resolução se preferir ter em mãos.'
    },
    {
      icon: '📖',
      title: 'Para guardar e consultar',
      desc: 'Seu acervo pessoal de receitas místicas organizado para a vida inteira.'
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#050101]">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        
        {/* Big Horizontal Card with Gold Border */}
        <div 
          className="relative rounded-2xl p-5 sm:p-10 md:p-14 text-center overflow-hidden border border-[#D4A43E]/50 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(212,164,62,0.2)]"
          style={{
            background: 'linear-gradient(180deg, #110305 0%, #1a0408 50%, #080102 100%)'
          }}
        >
          {/* Subtle Ruby Glow inside card */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[600px] h-[160px] sm:h-[200px] rounded-full blur-[30px] sm:blur-[90px] opacity-35 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #810018 0%, transparent 70%)' }}
          />

          {/* Title */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F8F0E9] uppercase mb-4 leading-tight">
            NÃO É UM PDF PARA LER <span className="text-[#C70028] ruby-gradient-text">E ESQUECER.</span>
          </h2>

          {/* Subtitle / Text */}
          <p className="font-sans text-base sm:text-lg text-[#B5A39F] max-w-2xl mx-auto mb-10 sm:mb-12 font-normal leading-relaxed">
            É um material de consulta para você voltar sempre que quiser trabalhar uma nova intenção.
          </p>

          {/* 3 Divisions inside the card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {formats.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#050101]/80 border border-[#D4A43E]/30 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:border-[#D4A43E]/60 shadow-lg"
              >
                <div className="text-3xl sm:text-4xl mb-3">
                  {item.icon}
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#F8F0E9] uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#B5A39F] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
