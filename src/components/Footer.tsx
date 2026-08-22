import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'termos' | 'privacidade' | null>(null);

  return (
    <footer className="bg-[#050101] border-t border-[#D4A43E]/20 py-10 text-center relative z-10">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        
        <p className="font-sans text-xs sm:text-sm text-[#B5A39F] mb-3">
          © 2026 Portal do Axé. Todos os direitos reservados.
        </p>

        <div className="flex items-center justify-center gap-4 text-xs font-sans text-[#B5A39F]/80">
          <button
            onClick={() => setLegalModal('termos')}
            className="hover:text-[#D4A43E] transition-colors cursor-pointer"
          >
            Termos de Uso
          </button>
          <span>•</span>
          <button
            onClick={() => setLegalModal('privacidade')}
            className="hover:text-[#D4A43E] transition-colors cursor-pointer"
          >
            Política de Privacidade
          </button>
        </div>

      </div>

      {/* Modal for Legal Notices */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#110305] border border-[#D4A43E]/50 rounded-2xl max-w-lg w-full p-6 sm:p-8 text-left shadow-2xl relative">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#D4A43E] uppercase mb-4">
              {legalModal === 'termos' ? 'Termos de Uso' : 'Política de Privacidade'}
            </h3>
            <div className="font-sans text-xs sm:text-sm text-[#B5A39F] space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'termos' ? (
                <>
                  <p>O Portal do Axé é um conteúdo educacional e informativo sobre práticas tradicionais e simbólicas de perfumaria ritualística.</p>
                  <p>Ao adquirir o material, você recebe uma licença individual e intransferível de uso pessoal.</p>
                  <p>As práticas descritas são de cunho cultural e ritualístico tradicional.</p>
                </>
              ) : (
                <>
                  <p>Respeitamos sua privacidade e garantimos total segurança e sigilo dos seus dados cadastrais.</p>
                  <p>Seus dados são utilizados exclusivamente para o envio do acesso digital ao conteúdo adquirido.</p>
                  <p>Em conformidade com a LGPD, nenhuma informação pessoal é comercializada ou compartilhada.</p>
                </>
              )}
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="btn-capsule-outline py-2 px-6 text-xs cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
