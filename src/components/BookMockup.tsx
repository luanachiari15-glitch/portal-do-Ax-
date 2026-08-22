import React from 'react';

interface BookMockupProps {
  compact?: boolean;
}

export const BookMockup: React.FC<BookMockupProps> = ({ compact = false }) => {
  return (
    <div className={`relative flex items-center justify-center ${compact ? 'scale-90 sm:scale-100' : 'scale-95 sm:scale-105 md:scale-115'} transition-transform duration-500`}>
      {/* Ruby ambient glow behind mockup */}
      <div 
        className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full blur-[90px] opacity-60 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #810018 0%, #350009 60%, transparent 80%)' }}
      />
      <div 
        className="absolute w-[200px] sm:w-[260px] h-[200px] sm:h-[260px] rounded-full blur-[60px] opacity-35 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #D4A43E 0%, transparent 70%)' }}
      />

      {/* Composition Container */}
      <div className="relative w-[340px] sm:w-[440px] md:w-[480px] h-[340px] sm:h-[390px] flex items-center justify-center">
        
        {/* Soft magical smoke / mist backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#810018]/15 to-transparent rounded-full blur-xl pointer-events-none" />

        {/* 1. DIGITAL GRIMOIRE / BOOK (Central Left Tilt) */}
        <div 
          className="absolute left-4 sm:left-8 top-6 sm:top-8 w-[200px] sm:w-[250px] md:w-[270px] h-[270px] sm:h-[330px] rounded-r-xl rounded-l-sm transform -rotate-6 shadow-[0_20px_50px_rgba(0,0,0,0.95)] border border-[#D4A43E]/40 overflow-hidden flex flex-col justify-between p-4 sm:p-6 z-10"
          style={{
            background: 'linear-gradient(135deg, #110305 0%, #1a0408 40%, #080102 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.95), 0 0 25px rgba(129, 0, 24, 0.4), inset 0 0 20px rgba(0,0,0,0.8)'
          }}
        >
          {/* Book Spine Shadow on left */}
          <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-black/80 via-black/40 to-transparent border-r border-[#D4A43E]/20" />
          
          {/* Book Golden Filigree Ornaments */}
          <div className="absolute top-2 left-6 right-2 h-4 border-t border-r border-[#D4A43E]/40" />
          <div className="absolute bottom-2 left-6 right-2 h-4 border-b border-r border-[#D4A43E]/40" />
          
          {/* Top Label */}
          <div className="text-center pt-2 pl-4">
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-sans font-bold text-[#D4A43E] uppercase block">
              ✦ GUIA EXCLUSIVO ✦
            </span>
          </div>

          {/* Center Title & Ruby Medallion */}
          <div className="text-center pl-4 my-auto">
            {/* Ruby Gemstone Amulet */}
            <div className="mx-auto w-12 sm:w-14 h-12 sm:h-14 rounded-full border border-[#D4A43E] p-1 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(129,0,24,0.7)] bg-[#110305]">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FF385C] via-[#810018] to-[#350009] flex items-center justify-center shadow-inner">
                <span className="text-sm sm:text-base">✨</span>
              </div>
            </div>
            <h3 className="font-heading text-lg sm:text-2xl font-bold tracking-wider text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              PORTAL DO AXÉ
            </h3>
            <div className="w-12 h-[1px] bg-[#D4A43E]/60 mx-auto my-1.5" />
            <p className="text-[10px] sm:text-xs text-[#B5A39F] font-sans tracking-wide">
              PERFUMES & RITUAIS
            </p>
          </div>

          {/* Book Bottom Badge */}
          <div className="text-center pl-4 pb-1">
            <span className="text-[8px] sm:text-[9px] font-sans uppercase tracking-widest text-[#D4A43E]/80 border border-[#D4A43E]/30 px-2 py-0.5 rounded-full bg-black/40">
              PRÁTICAS RITUALÍSTICAS
            </span>
          </div>
        </div>

        {/* 2. LUXURY SQUARE PERFUME FLACON (Front Right) */}
        <div 
          className="absolute right-2 sm:right-6 bottom-4 sm:bottom-6 w-[120px] sm:w-[150px] md:w-[165px] h-[170px] sm:h-[210px] rounded-lg border border-[#D4A43E]/60 z-20 flex flex-col items-center justify-between p-3"
          style={{
            background: 'linear-gradient(135deg, rgba(129, 0, 24, 0.45) 0%, rgba(53, 0, 9, 0.85) 50%, rgba(17, 3, 5, 0.95) 100%)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.9), 0 0 25px rgba(212, 164, 62, 0.3), inset 0 0 15px rgba(255,232,158,0.2)'
          }}
        >
          {/* Gold Bottle Cap */}
          <div className="absolute -top-6 sm:-top-7 w-10 sm:w-12 h-6 sm:h-7 rounded-t-sm border border-[#D4A43E] bg-gradient-to-b from-[#F3D37A] via-[#D4A43E] to-[#8B641D] shadow-md flex items-center justify-center">
            <div className="w-6 h-[1px] bg-white/60" />
          </div>

          {/* Bottle Collar */}
          <div className="w-7 sm:w-8 h-1.5 bg-[#D4A43E] rounded-xs -mt-1 shadow-sm" />

          {/* Golden Perfume Label */}
          <div className="w-full bg-[#110305]/90 border border-[#D4A43E]/50 rounded-sm p-2 text-center my-auto shadow-inner">
            <span className="text-[7px] sm:text-[8px] text-[#D4A43E] uppercase font-bold tracking-widest block">
              ELIXIR RITUAL
            </span>
            <span className="font-heading text-[11px] sm:text-xs text-white font-bold tracking-wider block">
              PORTAL DO AXÉ
            </span>
            <div className="w-6 h-[1px] bg-[#D4A43E] mx-auto my-1" />
            <span className="text-[7px] text-[#B5A39F]">EAU DE PARFUM</span>
          </div>

          {/* Liquid highlight line */}
          <div className="w-full flex justify-between items-center px-1 text-[8px] text-[#D4A43E]/70 font-sans">
            <span>🌹 AMOR</span>
            <span>💰 PROSPERIDADE</span>
          </div>
        </div>

        {/* 3. MYSTICAL DECORATIVE ELEMENTS: Roses, Herb Sprigs, Rubies, Candles */}
        {/* Glowing Candle on Left */}
        <div className="absolute left-0 bottom-2 z-10 flex flex-col items-center">
          {/* Flame */}
          <div className="w-3 h-4 bg-gradient-to-t from-[#D4A43E] via-[#FF385C] to-white rounded-full blur-[0.5px] animate-pulse shadow-[0_0_12px_#D4A43E]" />
          {/* Candle Body */}
          <div className="w-3.5 h-10 bg-gradient-to-b from-[#810018] to-[#110305] rounded-t-xs border-x border-[#D4A43E]/30" />
        </div>

        {/* Ruby Gemstone Floating on Bottom */}
        <div className="absolute left-16 bottom-0 z-20 flex items-center gap-1 bg-[#110305]/90 px-2 py-0.5 rounded-full border border-[#D4A43E]/40 text-[9px] text-[#F8F0E9] shadow-lg">
          <span className="text-[#FF385C]">💎</span>
          <span className="font-sans text-[9px]">Rubi & Ervas</span>
        </div>

        {/* Red Rose on Right Bottom */}
        <div className="absolute -right-2 bottom-0 z-20 text-2xl filter drop-shadow-[0_2px_10px_rgba(129,0,24,0.8)]">
          🌹
        </div>

        {/* Herb Branch badge top right */}
        <div className="absolute right-0 top-6 z-20 text-xl filter drop-shadow-[0_2px_8px_rgba(212,164,62,0.6)]">
          🌿
        </div>

      </div>
    </div>
  );
};
