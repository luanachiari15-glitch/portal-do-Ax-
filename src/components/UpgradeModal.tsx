import React from 'react';
import { Sparkles, Gift, CheckCircle2, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { EXCLUSIVE_BONUSES } from '../data/content';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpgrade: () => void;
  onDeclineToEssential: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  onAcceptUpgrade,
  onDeclineToEssential
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg my-8 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#240816] via-[#15040d] to-[#0a0206] border-2 border-[#ffd875] shadow-[0_0_50px_rgba(201,24,74,0.4)] text-center">
        
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1b0510] border border-[#ffd875]/40 flex items-center justify-center text-[#ffd875] hover:bg-[#c9184a] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Warning Ribbon */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full ruby-badge text-xs font-serif font-bold text-[#ffd875] uppercase tracking-wider mb-4 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-[#ffd875]" />
          <span>OPORTUNIDADE EXCLUSIVA NESSA TELA</span>
        </div>

        {/* Modal Headline */}
        <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-3">
          ESPERE... VOCÊ PODE <br />
          <span className="gold-text-gradient">DESBLOQUEAR O PORTAL COMPLETO</span>
        </h3>

        {/* Modal Body Copy */}
        <p className="font-quote text-base sm:text-lg text-[#f7e0e7] leading-relaxed mb-5">
          Por apenas <strong className="text-[#ffd875] font-serif font-bold">R$ 17,00</strong>, adicione todos os bônus e materiais complementares à sua compra.
        </p>

        {/* Price Box Comparison */}
        <div className="rounded-2xl bg-[#1b0611] border border-[#ffd875]/40 p-4 sm:p-5 mb-5 text-center shadow-inner">
          <span className="text-xs uppercase tracking-widest text-[#dec2ca] font-medium block mb-1">
            Valor promocional de upgrade:
          </span>
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm sm:text-base text-[#baa0a9] line-through font-semibold">
              R$ 27,00
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#ffd875] font-serif">
              POR R$ 17,00
            </span>
          </div>
          <span className="text-[11px] text-[#ff758f] font-semibold mt-1 block">
            Economia imediata de R$ 10,00 desbloqueando tudo agora
          </span>
        </div>

        {/* Included Extras Preview */}
        <div className="text-left rounded-xl bg-[#10030a] border border-[#ffd875]/20 p-4 mb-6">
          <p className="text-xs font-serif font-bold text-[#ffd875] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Gift className="w-4 h-4 text-[#ffd875]" />
            O que você leva a mais por apenas R$ 17,00:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#ebd5dc]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ffd875] shrink-0 mt-0.5" />
              <span>Guia Express: 7 Perfumes de Atração & Magnetismo</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ffd875] shrink-0 mt-0.5" />
              <span>Ritual da Lua Nova para Abertura Financeira</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ffd875] shrink-0 mt-0.5" />
              <span>Calendário Lunar & Tabela de Correspondências</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ffd875] shrink-0 mt-0.5" />
              <span>Grimório Digital Imprimível em Alta Resolução</span>
            </li>
          </ul>
        </div>

        {/* Primary Accept Upgrade CTA */}
        <button
          id="accept-upgrade-button"
          onClick={onAcceptUpgrade}
          className="w-full py-4 rounded-xl btn-gold font-serif text-base sm:text-lg font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-2xl mb-3"
        >
          <Sparkles className="w-5 h-5 text-[#1a080c]" />
          <span>SIM! QUERO DESBLOQUEAR A VERSÃO COMPLETA</span>
        </button>

        {/* Secondary Decline to Essential Option */}
        <button
          id="decline-upgrade-button"
          onClick={onDeclineToEssential}
          className="text-xs sm:text-sm text-[#d4b5bf] hover:text-white underline underline-offset-4 transition-colors cursor-pointer py-1.5"
        >
          Não, quero continuar com a versão essencial (R$ 9,90)
        </button>

      </div>
    </div>
  );
};
