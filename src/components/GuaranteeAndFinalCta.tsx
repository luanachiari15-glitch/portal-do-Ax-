import React from 'react';

interface GuaranteeAndFinalCtaProps {
  onCtaClick: () => void;
}

export const GuaranteeAndFinalCta: React.FC<GuaranteeAndFinalCtaProps> = ({
  onCtaClick
}) => {
  return (
    <section 
      className="relative py-20 md:py-28 text-center overflow-hidden lazy-section"
      style={{
        background: 'linear-gradient(180deg, #050101 0%, #350009 50%, #050101 100%)',
        containIntrinsicSize: '1px 500px'
      }}
    >
      {/* Ruby ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] sm:h-[400px] rounded-full blur-[24px] sm:blur-[90px] md:blur-[140px] opacity-40 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #810018 0%, transparent 75%)' }}
      />

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        
        {/* Golden Circular Guarantee Seal */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full border-2 border-[#D4A43E] bg-[#110305] p-1.5 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,164,62,0.35)]">
          <div className="w-full h-full rounded-full border border-[#D4A43E]/40 bg-gradient-to-b from-[#350009] to-[#110305] flex flex-col items-center justify-center text-center">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#D4A43E] gold-gradient-text leading-none">
              7
            </span>
            <span className="font-heading text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest leading-none mt-1">
              DIAS
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#F8F0E9] uppercase mb-4 leading-tight">
          CONHEÇA O PORTAL POR <span className="text-[#D4A43E] gold-gradient-text">7 DIAS</span>
        </h2>

        {/* Description Text */}
        <p className="font-sans text-base sm:text-lg text-[#F8F0E9]/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Você pode acessar o material e conhecer o conteúdo dentro das condições da garantia oferecida na compra.
        </p>

        {/* Capsule CTA Button */}
        <div className="flex justify-center">
          <button
            id="guarantee-cta-btn"
            onClick={onCtaClick}
            className="btn-capsule-ruby py-4 px-8 sm:px-12 text-base sm:text-lg w-full sm:w-auto max-w-md cursor-pointer"
          >
            QUERO ABRIR O PORTAL
          </button>
        </div>

      </div>
    </section>
  );
};
