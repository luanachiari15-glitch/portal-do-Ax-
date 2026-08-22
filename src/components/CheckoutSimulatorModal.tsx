import React, { useState } from 'react';
import { Lock, ShieldCheck, Download, CheckCircle2, Copy, Check, X, QrCode, CreditCard } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  planName: string;
  price: string;
  onClose: () => void;
}

export const CheckoutSimulatorModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  planName,
  price,
  onClose
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copied, setCopied] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const pixCode = `00020126580014br.gov.bcb.pix0136portaldoaxe-${price.replace(',', '')}@digital.axe520400005303986540${price.replace(',', '.')}5802BR5915PORTAL DO AXE6009SAO PAULO62070503***6304`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompleted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg my-8 rounded-2xl p-6 sm:p-8 bg-[#110305] border-2 border-[#D4A43E] shadow-2xl text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#050101] border border-[#D4A43E]/40 flex items-center justify-center text-[#D4A43E] hover:bg-[#810018] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#D4A43E] uppercase tracking-wider mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Ambiente Seguro • Acesso Imediato</span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F8F0E9] mb-1 uppercase">
              Finalizar Pedido • <span className="text-[#D4A43E]">Portal do Axé</span>
            </h3>

            <div className="flex items-center justify-between py-3 border-b border-[#D4A43E]/20 mb-5">
              <span className="text-xs sm:text-sm font-semibold text-[#F8F0E9] uppercase">{planName}</span>
              <span className="font-heading text-2xl font-bold text-[#D4A43E]">R$ {price}</span>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 font-sans font-semibold text-xs sm:text-sm cursor-pointer transition-all ${
                  paymentMethod === 'pix'
                    ? 'bg-[#350009] border-[#D4A43E] text-[#D4A43E] shadow-[0_0_12px_rgba(212,164,62,0.25)]'
                    : 'bg-[#050101] border-[#D4A43E]/20 text-[#B5A39F] hover:border-[#D4A43E]/40'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>PIX (Acesso Imediato)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 font-sans font-semibold text-xs sm:text-sm cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'bg-[#350009] border-[#D4A43E] text-[#D4A43E] shadow-[0_0_12px_rgba(212,164,62,0.25)]'
                    : 'bg-[#050101] border-[#D4A43E]/20 text-[#B5A39F] hover:border-[#D4A43E]/40'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Cartão de Crédito</span>
              </button>
            </div>

            <form onSubmit={handleSimulatePayment} className="space-y-4">
              <div>
                <label className="block text-xs font-sans font-semibold text-[#B5A39F] uppercase mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome..."
                  className="w-full bg-[#050101] border border-[#D4A43E]/30 rounded-xl py-2.5 px-4 text-sm text-[#F8F0E9] focus:outline-none focus:border-[#D4A43E]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-[#B5A39F] uppercase mb-1">
                  Seu Melhor E-mail (Para receber o material)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full bg-[#050101] border border-[#D4A43E]/30 rounded-xl py-2.5 px-4 text-sm text-[#F8F0E9] focus:outline-none focus:border-[#D4A43E]"
                />
              </div>

              {paymentMethod === 'pix' ? (
                <div className="bg-[#050101] border border-[#D4A43E]/30 rounded-xl p-4 text-center my-4">
                  <div className="w-32 h-32 mx-auto bg-white rounded-lg p-2 mb-3 flex items-center justify-center">
                    {/* Simulated QR Code Canvas */}
                    <div className="w-full h-full border-2 border-black grid grid-cols-4 gap-1 p-1">
                      <div className="bg-black col-span-2 row-span-2" />
                      <div className="bg-black" />
                      <div className="bg-black" />
                      <div className="bg-black col-span-2" />
                      <div className="bg-black" />
                      <div className="bg-black" />
                    </div>
                  </div>

                  <p className="text-xs text-[#B5A39F] font-sans mb-3">
                    Escaneie o QR Code ou copie o código abaixo:
                  </p>

                  <div className="flex items-center gap-2 bg-[#110305] border border-[#D4A43E]/40 rounded-lg p-2 mb-2">
                    <input
                      type="text"
                      readOnly
                      value={pixCode}
                      className="bg-transparent text-[11px] text-[#B5A39F] w-full font-mono focus:outline-none truncate"
                    />
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="shrink-0 bg-[#D4A43E] text-[#050101] text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1 hover:bg-[#FFE89E] transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 bg-[#050101] border border-[#D4A43E]/30 rounded-xl p-4">
                  <div>
                    <label className="block text-[11px] font-sans text-[#B5A39F] mb-1">Número do Cartão</label>
                    <input
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      className="w-full bg-[#110305] border border-[#D4A43E]/30 rounded-lg py-2 px-3 text-xs text-[#F8F0E9] focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-sans text-[#B5A39F] mb-1">Validade</label>
                      <input
                        type="text"
                        required
                        placeholder="MM/AA"
                        className="w-full bg-[#110305] border border-[#D4A43E]/30 rounded-lg py-2 px-3 text-xs text-[#F8F0E9] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-sans text-[#B5A39F] mb-1">CVV</label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        className="w-full bg-[#110305] border border-[#D4A43E]/30 rounded-lg py-2 px-3 text-xs text-[#F8F0E9] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="btn-capsule-ruby w-full py-4 text-base cursor-pointer mt-4"
              >
                CONFIRMAR E LIBERAR ACESSO
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#B5A39F] font-sans pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4A43E]" />
                <span>Garantia incondicional de 7 dias e envio imediato.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#350009] border-2 border-[#D4A43E] flex items-center justify-center mx-auto mb-4 text-[#D4A43E]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-[#F8F0E9] mb-2 uppercase">
              Acesso Liberado!
            </h3>
            <p className="font-sans text-sm text-[#B5A39F] mb-6">
              Parabéns, {name || 'iniciado(a)'}! Seu acesso ao <strong className="text-[#D4A43E]">{planName}</strong> foi liberado e enviado para <strong>{email || 'seu e-mail'}</strong>.
            </p>

            <div className="bg-[#050101] border border-[#D4A43E]/30 rounded-xl p-5 mb-6 text-left space-y-2 text-xs text-[#F8F0E9]">
              <p className="flex items-center gap-2">
                <span className="text-[#D4A43E]">✓</span> Guia Digital em PDF de Alta Resolução
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#D4A43E]">✓</span> Acesso ao Portal no Celular e Computador
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#D4A43E]">✓</span> Suporte de Consulta Vitalícia
              </p>
            </div>

            <button
              onClick={() => {
                alert('Iniciando download do Guia Portal do Axé em PDF...');
                onClose();
              }}
              className="btn-capsule-ruby w-full py-4 text-base cursor-pointer flex items-center justify-center gap-2 mb-3"
            >
              <Download className="w-5 h-5" />
              <span>BAIXAR GUIA DIGITAL AGORA (PDF)</span>
            </button>

            <button
              onClick={onClose}
              className="text-xs text-[#B5A39F] hover:text-[#D4A43E] font-sans underline cursor-pointer"
            >
              Voltar para a página
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
