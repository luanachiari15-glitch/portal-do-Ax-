import React from 'react';
import { Sparkles, Compass, Target, Smartphone, HeartHandshake, ArrowRight, FileText, Printer, BookOpen } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const cards = [
    {
      icon: <Compass className="w-6 h-6 text-[#ffd875]" />,
      emoji: '🔮',
      title: 'PRÁTICO',
      description: 'Conteúdo organizado para você consultar sempre que precisar, direto ao ponto e pronto para aplicar.'
    },
    {
      icon: <Target className="w-6 h-6 text-[#ff4d6d]" />,
      emoji: '🌹',
      title: 'OBJETIVO',
      description: 'Sem precisar passar horas procurando informações espalhadas, contraditórias ou incompletas pela internet.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#ffd875]" />,
      emoji: '📖',
      title: 'FÁCIL DE CONSULTAR',
      description: 'Você pode acessar pelo celular onde estiver ou imprimir os materiais para montar seu próprio material físico de consulta.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#e5c07b]" />,
      emoji: '✨',
      title: 'PARA DIFERENTES INTENÇÕES',
      description: 'Amor, magnetismo, sucesso, prosperidade, riqueza, abertura de caminhos e fortalecimento pessoal.'
    }
  ];

  const workflowSteps = [
    { label: 'CELULAR', icon: <Smartphone className="w-5 h-5 text-[#ffd875]" />, sub: 'Acesso na palma da mão' },
    { label: 'PDF DIGITAL', icon: <FileText className="w-5 h-5 text-[#ffd875]" />, sub: 'Download em alta resolução' },
    { label: 'IMPRESSÃO', icon: <Printer className="w-5 h-5 text-[#ffd875]" />, sub: 'Se desejar encadernar' },
    { label: 'GRIMÓRIO PESSOAL', icon: <BookOpen className="w-5 h-5 text-[#ffd875]" />, sub: 'Seu livro de consultas' }
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#080205]">
      {/* Background Decorative Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 80% 50%, #3d0716 0%, #150208 50%, #080205 100%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-serif font-semibold tracking-widest text-[#ffd875] bg-[#200611] border border-[#ffd875]/30 uppercase mb-3">
            DIFERENCIAIS EXCLUSIVOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
            POR QUE O <span className="gold-text-gradient">PORTAL DO AXÉ</span> É DIFERENTE?
          </h2>
          <p className="font-quote text-lg sm:text-xl text-[#ebd0d8] leading-relaxed">
            Uma abordagem mística refinada, clara e sem complexidades desnecessárias.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="grimoire-card rounded-2xl p-6 sm:p-7 border border-[#ffd875]/20 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#ffd875]/50 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#240815] border border-[#ffd875]/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-2xl">{card.emoji}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2.5 group-hover:text-[#ffd875] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#dbc1c9] leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#ffd875]/10">
                <span className="text-[10px] font-mono tracking-widest text-[#ffd875]/70 uppercase">
                  Diferencial #{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Composition: CELULAR → PDF → IMPRESSÃO → GRIMÓRIO */}
        <div className="grimoire-card rounded-3xl p-6 sm:p-10 border border-[#ffd875]/30 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold gold-text-gradient uppercase mb-2">
              SEU PORTAL EM QUALQUER FORMATO
            </h3>
            <p className="text-xs sm:text-sm text-[#e5c9d2]">
              Flexibilidade total para você estudar, consultar e praticar como preferir:
            </p>
          </div>

          {/* Steps Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-[#1a0610] border border-[#ffd875]/25 rounded-xl p-5 text-center flex flex-col items-center justify-center group hover:border-[#ffd875]/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#2a0917] border border-[#ffd875]/40 flex items-center justify-center mb-3 shadow-[0_0_12px_rgba(212,175,55,0.2)]">
                  {step.icon}
                </div>
                <h4 className="font-serif text-sm font-bold text-white mb-1 group-hover:text-[#ffd875] transition-colors">
                  {step.label}
                </h4>
                <p className="text-[11px] text-[#ccaeb7]">
                  {step.sub}
                </p>

                {/* Right Arrow between steps on desktop */}
                {idx < workflowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#350a1d] border border-[#ffd875]/50 items-center justify-center text-[#ffd875] shadow-md">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reassuring Highlight Banner */}
          <div className="mt-8 pt-6 border-t border-[#ffd875]/20 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2b0817] border border-[#c9184a]/40 text-xs sm:text-sm text-[#ffe5ec] font-quote text-base">
              <Sparkles className="w-4 h-4 text-[#ffd875] shrink-0" />
              <span>
                "Você não precisa consumir tudo de uma vez. Consulte o Portal sempre que quiser trabalhar uma nova intenção."
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
