import { ContentModule, BonusItem, Testimonial, FaqItem, OfferPlan } from '../types';

export const CONTENT_MODULES: ContentModule[] = [
  {
    id: 'amor',
    icon: 'rose',
    tag: 'AMOR & MAGNETISMO',
    title: 'PERFUMES PARA O AMOR',
    description: 'Práticas e orientações relacionadas a amor, magnetismo, atração, autoestima e conexão profunda.',
    badge: 'Módulo 01',
    ritualHighlight: 'Consagração de rosas rubras & óleos de atração pessoal',
    previewPoints: [
      'Alinhamento vibracional para despertar magnetismo natural e presença',
      'Combinações aromáticas místicas para conexão afetiva e autoamor',
      'Rituais de unção antes de encontros e momentos especiais'
    ]
  },
  {
    id: 'riqueza',
    icon: 'coins',
    tag: 'ABUNDÂNCIA & FLUXO',
    title: 'PERFUMES PARA RIQUEZA E PROSPERIDADE',
    description: 'Conteúdos e práticas ritualísticas relacionados à abundância, abertura de caminhos, prosperidade e intenções financeiras.',
    badge: 'Módulo 02',
    ritualHighlight: 'Fixação de intenção com especiarias nobres e resinas áureas',
    previewPoints: [
      'Ervas e notas cítricas/amadeiradas para circulação e atração de recursos',
      'Práticas matinais de unção para foco comercial e oportunidades',
      'Uso intencional em carteiras, contratos e ambientes de trabalho'
    ]
  },
  {
    id: 'sucesso',
    icon: 'sparkles',
    tag: 'PODER & CONCRETIZAÇÃO',
    title: 'PERFUMES PARA SUCESSO',
    description: 'Práticas voltadas a confiança, presença marcante, autoridade, foco, abertura de portas e realização pessoal.',
    badge: 'Módulo 03',
    ritualHighlight: 'Potencialização de aura de liderança e segurança pessoal',
    previewPoints: [
      'Como criar uma assinatura olfativa de respeito e destaque',
      'Momentos de aplicação antes de reuniões, decisões e provas',
      'Desbloqueio de firmeza mental e assertividade energética'
    ]
  },
  {
    id: 'ervas',
    icon: 'leaf',
    tag: 'BOTÂNICA SAGRADA',
    title: 'ERVAS E INGREDIENTES',
    description: 'Conheça ingredientes tradicionalmente associados às diferentes intenções e como incorporá-los com respeito às práticas.',
    badge: 'Módulo 04',
    ritualHighlight: 'Dicionário alquímico de 24 ervas, flores, raízes e especiarias',
    previewPoints: [
      'Propriedades simbólicas de alfazema, canela, cravo, patchouli e benjoim',
      'Cuidados com manuseio, pureza e combinações harmoniosas',
      'Como substituir ingredientes sem perder a essência do seu ritual'
    ]
  },
  {
    id: 'consagracao',
    icon: 'flame',
    tag: 'RITUALÍSTICA & ALQUIMIA',
    title: 'CONSAGRAÇÃO E PREPARAÇÃO',
    description: 'Aprenda o passo a passo de como preparar e consagrar simbolicamente seus frascos dentro da proposta do Portal do Axé.',
    badge: 'Módulo 05',
    ritualHighlight: 'O ritual dos 4 elementos: Fogo, Água, Terra e Ar',
    previewPoints: [
      'Passo a passo da limpeza energética do frasco e do ambiente',
      'Palavras de poder e ancoramento de intenção durante o preparo',
      'O tempo de descanso e maturação do perfume consagrado'
    ]
  },
  {
    id: 'momentos',
    icon: 'moon',
    tag: 'CICLOS & SINCRONICIDADE',
    title: 'MOMENTOS E INTENÇÕES',
    description: 'Orientações para escolher os melhores dias, fases da lua e formas de utilização de acordo com o objetivo desejado.',
    badge: 'Módulo 06',
    ritualHighlight: 'Guia de correspondências lunares e horários de poder',
    previewPoints: [
      'Influência das fases lunares nas intenções de atração e limpeza',
      'Pontos do corpo ideais para aplicação conforme a energia desejada',
      'Como integrar os perfumes à sua rotina diária sem complicação'
    ]
  }
];

export const EXCLUSIVE_BONUSES: BonusItem[] = [
  {
    number: '01',
    title: 'GUIA EXPRESS: 7 PERFUMES DE ATRAÇÃO & MAGNETISMO INSTANTÂNEO',
    shortBenefit: 'Receitas rápidas com ingredientes fáceis para unção emergencial de magnetismo pessoal e presença marcante.',
    detailedBenefit: 'Um manual direto ao ponto para preparar fórmulas aromáticas de ação rápida para encontros e eventos decisivos.',
    estimatedValue: 'R$ 37,00',
    iconName: 'sparkles',
    tag: 'EXCLUSIVO COMPLETO'
  },
  {
    number: '02',
    title: 'RITUAL DA LUA NOVA: ABERTURA DE CAMINHOS & PROSPERIDADE',
    shortBenefit: 'O passo a passo da consagração na primeira noite de lua nova para ancorar novos ciclos de abundância.',
    detailedBenefit: 'Instruções minuciosas de montagem de altar simples, velas e orações de direcionamento para o mês.',
    estimatedValue: 'R$ 29,00',
    iconName: 'moon',
    tag: 'EXCLUSIVO COMPLETO'
  },
  {
    number: '03',
    title: 'CALENDÁRIO LUNAR & TABELA DE CORRESPONDÊNCIAS MÍSTICAS',
    shortBenefit: 'Tabela de consulta rápida com as melhores datas, horários e dias da semana para cada tipo de consagração.',
    detailedBenefit: 'Nunca mais tenha dúvidas de quando consagrar um perfume para amor, negócios, proteção ou autoridade.',
    estimatedValue: 'R$ 25,00',
    iconName: 'calendar',
    tag: 'EXCLUSIVO COMPLETO'
  },
  {
    number: '04',
    title: 'GRIMÓRIO DIGITAL IMPRIMÍVEL (DIÁRIO DE INTENÇÕES & RITUAIS)',
    shortBenefit: 'Fichas em alta resolução prontas para imprimir e montar seu caderno de anotações místico.',
    detailedBenefit: 'Páginas decoradas em estilo pergaminho para você registrar suas receitas, observações e relatos de rituais.',
    estimatedValue: 'R$ 39,00',
    iconName: 'book-open',
    tag: 'EXCLUSIVO COMPLETO'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'O Portal do Axé é um produto físico?',
    answer: 'Não. O Portal do Axé é um produto 100% digital. Você recebe acesso imediato a todos os materiais, guias ilustrados em PDF de altíssima resolução e materiais para consulta online ou impressão.'
  },
  {
    id: 'faq-2',
    question: 'Como vou receber meu acesso?',
    answer: 'Imediatamente após a confirmação do pagamento, você receberá no seu e-mail e pelo WhatsApp os dados de acesso direto à área de membros exclusiva do Portal do Axé, onde poderá baixar todos os arquivos com total segurança.'
  },
  {
    id: 'faq-3',
    question: 'Posso acessar pelo celular?',
    answer: 'Sim! Todos os materiais foram especialmente diagramados para proporcionar uma leitura confortável e fluida na tela do celular, tablet ou computador.'
  },
  {
    id: 'faq-4',
    question: 'Posso imprimir?',
    answer: 'Sim, com certeza! Os materiais em formato de livro/grimório foram desenvolvidos em alta definição caso você deseje imprimir e encadernar seu próprio material físico de consulta.'
  },
  {
    id: 'faq-5',
    question: 'Preciso ter experiência com espiritualidade?',
    answer: 'Não. O conteúdo foi estruturado de forma muito clara, didática e acessível, perfeito tanto para quem está dando os primeiros passos quanto para quem já pratica e deseja enriquecer seus conhecimentos.'
  },
  {
    id: 'faq-6',
    question: 'Qual a diferença entre a versão Essencial e a Completa?',
    answer: 'A versão Essencial (R$ 9,90) inclui o Guia Principal dos Perfumes Mágicos. A versão Completa (R$ 27,00) inclui o Guia Principal + Todos os 4 Bônus Exclusivos + Tabela Lunar + Materiais de Impressão e todos os conteúdos adicionais da oferta.'
  },
  {
    id: 'faq-7',
    question: 'Os perfumes garantem resultados?',
    answer: 'O Portal do Axé apresenta práticas, saberes tradicionais e conhecimentos dentro de uma abordagem estritamente espiritual e ritualística. Experiências, percepções e resultados podem variar de pessoa para pessoa de acordo com a fé, momento e dedicação individual.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Juliana Medeiros',
    role: 'Aluna verificada',
    location: 'São Paulo, SP',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'Há 3 dias',
    text: 'Eu sempre amei perfumes, mas nunca imaginei o poder de consagrar com uma intenção clara. O ritual do amor me deu uma segurança e autoestima que há muito tempo eu não sentia. O material é lindo demais!',
    intentionWorked: 'Perfume de Atração & Autoestima',
    type: 'review'
  },
  {
    id: 'test-2',
    name: 'Carla Vasconcelos',
    role: 'Aluna verificada',
    location: 'Belo Horizonte, MG',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'Há 5 dias',
    text: 'Achei o passo a passo muito simples e sem enrolação. Fiz a unção do perfume de prosperidade antes de fechar um contrato importante na minha loja e a energia fluiu de um jeito maravilhoso. Valeu cada centavo da versão completa.',
    intentionWorked: 'Perfume de Prosperidade nos Negócios',
    type: 'chat'
  },
  {
    id: 'test-3',
    name: 'Marcella Sampaio',
    role: 'Aluna verificada',
    location: 'Rio de Janeiro, RJ',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'Há 1 semana',
    text: 'Imprimi as folhas do grimório e montei um fichário dourado lindo. As explicações sobre as ervas e a melhor lua para consagrar clarearam todas as minhas dúvidas. Recomendo muito!',
    intentionWorked: 'Grimório Impresso & Tabela Lunar',
    type: 'review'
  },
  {
    id: 'test-4',
    name: 'Renata Albuquerque',
    role: 'Aluna verificada',
    location: 'Salvador, BA',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'Há 2 semanas',
    text: 'A sensação de preparar seu próprio perfume encantado é mágica. Você se conecta com a sua essência e com sua ancestralidade. É um material de respeito e muito bom gosto.',
    intentionWorked: 'Consagração dos 4 Elementos',
    type: 'chat'
  }
];

export const OFFER_ESSENTIAL: OfferPlan = {
  id: 'essential',
  name: 'PORTAL DO AXÉ — ESSENCIAL',
  price: '9,90',
  originalPrice: '47,00',
  description: 'Para quem busca iniciar suas práticas e ter acesso ao guia básico fundamental.',
  features: [
    { included: true, text: 'Guia Principal dos Perfumes Mágicos (Digital)' },
    { included: true, text: 'Instruções para Amor, Prosperidade e Sucesso' },
    { included: true, text: 'Guia de Ervas e Ingredientes Básicos' },
    { included: true, text: 'Acesso imediato no celular ou computador' },
    { included: false, text: 'Os 4 Bônus Exclusivos de Alta Conversão' },
    { included: false, text: 'Tabela & Calendário Lunar de Consagração' },
    { included: false, text: 'Grimório Imprimível em Alta Resolução' }
  ],
  ctaText: 'QUERO A VERSÃO ESSENCIAL',
  subText: 'Pagamento único • Acesso vitalício digital'
};

export const OFFER_COMPLETE: OfferPlan = {
  id: 'complete',
  name: 'PORTAL DO AXÉ — COMPLETO',
  badge: '🔥 MAIS ESCOLHIDA',
  price: '27,00',
  originalPrice: '147,00',
  description: 'Para quem quer aproveitar toda a experiência do Portal do Axé em um único pacote.',
  features: [
    { included: true, text: 'Guia Principal dos Perfumes Mágicos (Digital Completo)', highlight: true },
    { included: true, text: 'BÔNUS #01: Guia Express de Perfumes de Atração Instantânea', highlight: true },
    { included: true, text: 'BÔNUS #02: Ritual da Lua Nova para Abertura Financeira', highlight: true },
    { included: true, text: 'BÔNUS #03: Calendário Lunar & Tabela de Correspondências', highlight: true },
    { included: true, text: 'BÔNUS #04: Grimório Digital Imprimível em Alta Definição', highlight: true },
    { included: true, text: 'Todos os materiais complementares e atualizações futuras', highlight: true },
    { included: true, text: 'Garantia incondicional de 7 dias com reembolso total' }
  ],
  ctaText: 'QUERO O PORTAL COMPLETO',
  subText: 'De R$ 147 por apenas R$ 27,00 • Acesso imediato',
  isPopular: true
};
