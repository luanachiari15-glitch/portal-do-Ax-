import React, { useState } from 'react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'COMO RECEBO?',
      a: 'Após a confirmação do pagamento, você recebe acesso digital ao material.'
    },
    {
      q: 'É FÍSICO?',
      a: 'Não. O Portal do Axé é um produto totalmente digital.'
    },
    {
      q: 'POSSO USAR PELO CELULAR?',
      a: 'Sim. O material foi desenvolvido para ser acessado pelo celular, tablet ou computador.'
    },
    {
      q: 'POSSO IMPRIMIR?',
      a: 'Sim. Você pode baixar e imprimir o conteúdo para sua consulta pessoal.'
    },
    {
      q: 'PRECISO TER EXPERIÊNCIA?',
      a: 'Não. O guia apresenta as orientações de maneira organizada e fácil de consultar.'
    },
    {
      q: 'QUAL A DIFERENÇA ENTRE R$ 9,90 E R$ 27?',
      a: 'A versão de R$ 9,90 contém o guia essencial de perfumes. A versão de R$ 27 inclui o guia completo e os três bônus.'
    },
    {
      q: 'EM QUANTO TEMPO VEJO OS RESULTADOS?',
      a: 'Ao seguir o passo a passo e as instruções do guia corretamente, você já pode começar a sentir os primeiros resultados e transformações em até 24 horas.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="relative py-20 md:py-28 bg-[#050101] text-center border-t border-[#D4A43E]/20 lazy-section"
      style={{ containIntrinsicSize: '1px 600px' }}
    >
      <div className="max-w-[680px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#F8F0E9] uppercase mb-12 leading-tight">
          AINDA TEM <span className="text-[#D4A43E] gold-gradient-text">DÚVIDAS?</span>
        </h2>

        {/* Functional Accordion */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="axe-card border border-[#D4A43E]/25 overflow-hidden transition-all duration-300"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-sm sm:text-base font-bold text-[#F8F0E9] uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <span className={`text-[#D4A43E] text-lg font-bold transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-[#D4A43E]/15 pt-4">
                    <p className="font-sans text-sm sm:text-base text-[#B5A39F] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
