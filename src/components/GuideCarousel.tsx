import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const GuideCarousel: React.FC = () => {
  const slides = [
    {
      id: 1,
      webp: '/guide-preview/preview-1.webp',
      fallback: 'https://i.ibb.co/217msQt8/3.png',
      alt: 'Página do Guia Portal do Axé 1'
    },
    {
      id: 2,
      webp: '/guide-preview/preview-2.webp',
      fallback: 'https://i.ibb.co/RGR9r5Yy/6.png',
      alt: 'Página do Guia Portal do Axé 2'
    },
    {
      id: 3,
      webp: '/guide-preview/preview-3.webp',
      fallback: 'https://i.ibb.co/wZs5FDX6/11.png',
      alt: 'Página do Guia Portal do Axé 3'
    },
    {
      id: 4,
      webp: '/guide-preview/preview-4.webp',
      fallback: 'https://i.ibb.co/HLjhSHcP/16.png',
      alt: 'Página do Guia Portal do Axé 4'
    },
    {
      id: 5,
      webp: '/guide-preview/preview-5.webp',
      fallback: 'https://i.ibb.co/DHR5W5bg/34.png',
      alt: 'Página do Guia Portal do Axé 5'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 35) {
      nextSlide();
    } else if (diff < -35) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-[#810018]/20 rounded-full blur-[70px] -z-10 pointer-events-none" />

      {/* Pure Image Display */}
      <div className="flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`transition-opacity duration-500 w-full flex items-center justify-center ${
              index === currentIndex ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            <picture>
              <source srcSet={item.webp} type="image/webp" />
              <img
                src={item.fallback}
                alt={item.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full max-w-[300px] sm:max-w-[340px] h-auto max-h-[460px] object-contain mx-auto rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Página anterior"
        className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#110305]/90 border border-[#D4A43E]/80 text-[#D4A43E] hover:bg-[#810018] hover:text-white flex items-center justify-center shadow-lg transition-all cursor-pointer z-20 focus:outline-none"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Próxima página"
        className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#110305]/90 border border-[#D4A43E]/80 text-[#D4A43E] hover:bg-[#810018] hover:text-white flex items-center justify-center shadow-lg transition-all cursor-pointer z-20 focus:outline-none"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para imagem ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-6 h-1.5 bg-[#D4A43E] shadow-[0_0_8px_rgba(212,164,62,0.8)]'
                : 'w-1.5 h-1.5 bg-[#B5A39F]/30 hover:bg-[#D4A43E]/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
