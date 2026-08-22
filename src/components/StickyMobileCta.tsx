import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface StickyMobileCtaProps {
  onCtaClick: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 500px (past hero)
      if (window.scrollY > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#11030b]/95 border-t border-[#ffd875]/40 backdrop-blur-sm sm:backdrop-blur-md sm:hidden animate-fade-in shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="text-left leading-tight pl-1">
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#ffd875] block">
            PORTAL DO AXÉ
          </span>
          <span className="text-xs text-white font-semibold">
            A partir de <span className="text-[#ffd875] font-bold">R$ 9,90</span>
          </span>
        </div>

        <button
          id="sticky-mobile-cta"
          onClick={onCtaClick}
          className="py-2.5 px-4 btn-capsule-ruby text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FFE89E]" />
          <span>QUERO ACESSAR</span>
        </button>
      </div>
    </div>
  );
};
