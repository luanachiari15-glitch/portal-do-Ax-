import React from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

interface DiscountPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscountPopupModal: React.FC<DiscountPopupModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const handleUpgrade17 = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Oferta Especial Completa Pop-up',
        value: 17.00,
        currency: 'BRL'
      });
    }
    window.location.href = 'https://pay.cakto.com.br/rig2y73';
  };

  const handleBasic990 = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Guia Essencial',
        value: 9.90,
        currency: 'BRL'
      });
    }
    window.location.href = 'https://pay.cakto.com.br/46phhwc_1051747';
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[calc(100vw-24px)] sm:max-w-lg my-auto max-h-[92dvh] overflow-y-auto rounded-2xl p-4 sm:p-7 border-2 border-[#D4A43E] text-left shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(199,0,40,0.4)]"
        style={{
          background: 'linear-gradient(180deg, #350009 0%, #1a0307 40%, #0d0103 100%)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#C70028]/30 rounded-full blur-[25px] sm:blur-[70px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#D4A43E]/20 rounded-full blur-[25px] sm:blur-[70px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar pop-up"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#110305] border border-[#D4A43E]/50 flex items-center justify-center text-[#D4A43E] hover:bg-[#810018] hover:text-white transition-colors cursor-pointer z-20"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Exclusive Opportunity Badge */}
        <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#C70028] text-white px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-[#D4A43E] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 shadow-lg">
          <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFE89E] animate-pulse" />
          <span>OFERTA EXCLUSIVA DESBLOQUEADA</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg sm:text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight leading-snug sm:leading-tight mb-2 pr-6 sm:pr-0">
          ESPERE! LEVE O <span className="text-[#D4A43E] gold-gradient-text">PORTAL COMPLETO</span> COM DESCONTO
        </h3>

        {/* Subtitle */}
        <p className="font-sans text-xs sm:text-sm text-[#F8F0E9]/90 mb-3 sm:mb-4 leading-relaxed">
          Antes de continuar com a versão básica, liberamos um desconto especial único para você desbloquear a <strong className="text-[#D4A43E]">Versão Premium Completa com todos os 3 bônus</strong>:
        </p>

        {/* Price Comparison Box */}
        <div className="bg-[#110305]/95 border border-[#D4A43E]/60 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 shadow-inner">
          <div className="flex items-center justify-between border-b border-[#D4A43E]/20 pb-2.5 mb-2.5">
            <div>
              <span className="text-[10px] sm:text-xs text-[#B5A39F] uppercase tracking-wider block">Valor normal:</span>
              <span className="text-sm sm:text-base text-[#B5A39F] line-through font-semibold">R$ 27,00</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] sm:text-xs text-[#D4A43E] font-bold uppercase tracking-wider block">Nesta condição:</span>
              <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D4A43E] gold-gradient-text">
                R$ 17,00
              </span>
            </div>
          </div>

          {/* Included Features */}
          <div className="space-y-1.5 font-sans text-[11px] sm:text-xs md:text-sm text-[#F8F0E9]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#D4A43E] font-bold">✓</span>
              <span><strong>Guia Completo de Perfumes Mágicos</strong></span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#FFE89E]">
              <span className="text-[#D4A43E] font-bold">✓</span>
              <span>+ Bônus: Blindagem Espiritual</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#FFE89E]">
              <span className="text-[#D4A43E] font-bold">✓</span>
              <span>+ Bônus: Banhos de Magnetismo Pessoal</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#FFE89E]">
              <span className="text-[#D4A43E] font-bold">✓</span>
              <span>+ Bônus: Guia de Cores com Axé</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#D4A43E] font-bold">✓</span>
              <span>Acesso imediato e vitalício</span>
            </div>
          </div>
        </div>

        {/* Primary CTA (17,00) */}
        <button
          id="discount-accept-btn"
          onClick={handleUpgrade17}
          className="btn-capsule-ruby w-full py-3 sm:py-3.5 px-4 sm:px-6 text-sm sm:text-base font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_30px_rgba(199,0,40,0.6)] hover:shadow-[0_15px_40px_rgba(199,0,40,0.8)] transition-all mb-2 sm:mb-2.5"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFE89E]" />
          <span>COMPRAR AGORA</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Secondary Option (9,90) */}
        <div className="text-center pt-0.5">
          <button
            id="discount-decline-btn"
            onClick={handleBasic990}
            className="text-[11px] sm:text-xs md:text-sm text-[#B5A39F] hover:text-[#F8F0E9] transition-colors underline cursor-pointer font-sans"
          >
            Não, prefiro continuar apenas com o essencial por R$ 9,90
          </button>
        </div>

        {/* Guarantee footer note */}
        <div className="flex items-center justify-center gap-1 text-[10px] sm:text-[11px] text-[#B5A39F]/80 font-sans mt-3 sm:mt-3.5 pt-2 sm:pt-2.5 border-t border-[#D4A43E]/20 text-center">
          <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4A43E] shrink-0" />
          <span>Garantia incondicional de 7 dias e pagamento 100% seguro.</span>
        </div>

      </div>
    </div>
  );
};
