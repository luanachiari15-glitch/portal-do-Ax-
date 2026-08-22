import React, { useState, useEffect } from 'react';

export const TopGoldenBanner: React.FC = () => {
  // 15-minute countdown (900 seconds)
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="relative w-full overflow-hidden border-b border-[#FFE89E]/50 shadow-[0_4px_25px_rgba(212,164,62,0.35)] z-30"
      style={{
        background: 'linear-gradient(90deg, #6B470D 0%, #B8860B 15%, #D4A43E 30%, #F5DE88 50%, #D4A43E 70%, #B8860B 85%, #6B470D 100%)'
      }}
    >
      {/* Light sheen animation over metallic bar */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-60 pointer-events-none -skew-x-12 animate-[shine_5s_infinite_linear]"
      />

      <div className="max-w-[1150px] mx-auto px-3 py-2 sm:py-2.5 flex items-center justify-center text-center">
        {/* Countdown Timer Only */}
        <div className="flex items-center gap-2">
          <span className="font-sans text-xs sm:text-sm font-bold text-[#1f1100] uppercase tracking-wider">
            EXPIRA EM:
          </span>
          <div className="flex items-center gap-1">
            <div className="bg-[#110305] text-[#F8F0E9] border border-[#8B641D] px-2.5 py-0.5 rounded font-mono font-bold text-xs sm:text-sm shadow-inner min-w-[32px] text-center">
              {minutes}
            </div>
            <span className="text-[#2b1900] font-extrabold text-sm sm:text-base">:</span>
            <div className="bg-[#110305] text-[#F8F0E9] border border-[#8B641D] px-2.5 py-0.5 rounded font-mono font-bold text-xs sm:text-sm shadow-inner min-w-[32px] text-center text-[#E0002F]">
              {seconds}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
