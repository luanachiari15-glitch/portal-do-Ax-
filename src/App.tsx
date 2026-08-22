/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { GuideContent } from './components/GuideContent';
import { ConsultationMaterial } from './components/ConsultationMaterial';
import { Bonuses } from './components/Bonuses';
import { Testimonials } from './components/Testimonials';
import { Offers } from './components/Offers';
import { Faq } from './components/Faq';
import { GuaranteeAndFinalCta } from './components/GuaranteeAndFinalCta';
import { Footer } from './components/Footer';
import { DiscountPopupModal } from './components/DiscountPopupModal';
import { MysticalParticles } from './components/MysticalParticles';

export default function App() {
  const [isDiscountPopupOpen, setIsDiscountPopupOpen] = useState(false);

  const scrollToOffers = () => {
    const offersElement = document.getElementById('ofertas');
    if (offersElement) {
      offersElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEssential = () => {
    // Abre o pop-up de desconto especial do plano completo por R$ 17,00
    setIsDiscountPopupOpen(true);
  };

  const handleSelectComplete = () => {
    // Redireciona diretamente para o checkout da oferta de R$ 27,00
    window.location.href = 'https://pay.cakto.com.br/ye7dopx_1051731';
  };

  const handleCloseDiscountPopup = () => {
    setIsDiscountPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050101] text-[#F8F0E9] relative selection:bg-[#810018] selection:text-[#F8F0E9]">
      {/* Background Ambience & Golden Sparks */}
      <MysticalParticles />

      {/* Main Landing Page Flow */}
      <main className="relative z-10">
        {/* SEÇÃO 1 — HERO */}
        <Hero onCtaClick={scrollToOffers} />

        {/* SEÇÃO 2 — CONTEÚDO DO GUIA */}
        <GuideContent onCtaClick={scrollToOffers} />

        {/* SEÇÃO 3 — MATERIAL DE CONSULTA */}
        <ConsultationMaterial />

        {/* SEÇÃO 4 — BÔNUS */}
        <Bonuses />

        {/* SEÇÃO 5 — DEPOIMENTOS */}
        <Testimonials />

        {/* SEÇÃO 6 — OFERTAS */}
        <Offers
          onSelectEssential={handleSelectEssential}
          onSelectComplete={handleSelectComplete}
        />

        {/* SEÇÃO 7 — FAQ */}
        <Faq />

        {/* SEÇÃO 8 — GARANTIA E CTA FINAL */}
        <GuaranteeAndFinalCta onCtaClick={scrollToOffers} />
      </main>

      {/* RODAPÉ */}
      <Footer />

      {/* POP-UP DE DESCONTO EXCLUSIVO (OFERTA DE R$ 17,00) */}
      <DiscountPopupModal
        isOpen={isDiscountPopupOpen}
        onClose={handleCloseDiscountPopup}
      />
    </div>
  );
}
