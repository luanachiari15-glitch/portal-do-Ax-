import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const images = [
    {
      id: 1,
      webp: '/testimonials/depoimento-1.webp',
      fallback: '/testimonials/depoimento-1.jpg',
      alt: 'Depoimento 1 - Portal do Axé'
    },
    {
      id: 2,
      webp: '/testimonials/depoimento-2.webp',
      fallback: '/testimonials/depoimento-2.jpg',
      alt: 'Depoimento 2 - Portal do Axé'
    },
    {
      id: 3,
      webp: '/testimonials/depoimento-3.webp',
      fallback: '/testimonials/depoimento-3.jpg',
      alt: 'Depoimento 3 - Portal do Axé'
    },
    {
      id: 4,
      webp: '/testimonials/depoimento-4.webp',
      fallback: '/testimonials/depoimento-4.jpg',
      alt: 'Depoimento 4 - Portal do Axé'
    },
    {
      id: 5,
      webp: '/testimonials/depoimento-5.webp',
      fallback: '/testimonials/depoimento-5.jpg',
      alt: 'Depoimento 5 - Portal do Axé'
    },
    {
      id: 6,
      webp: '/testimonials/depoimento-6.webp',
      fallback: '/testimonials/depoimento-6.jpg',
      alt: 'Depoimento 6 - Portal do Axé'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, images.length]);

  // Preload all testimonial images in background for instant responsiveness
  useEffect(() => {
    images.forEach((imgItem) => {
      const img = new Image();
      img.src = imgItem.webp;
    });
  }, []);

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
    <section className="relative py-16 md:py-24 bg-[#050101] text-center border-t border-[#D4A43E]/20 overflow-hidden">
      {/* Background Subtle Accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] opacity-20 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #810018 0%, transparent 70%)' }}
      />

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        
        {/* Five Golden Stars */}
        <div className="flex justify-center items-center gap-1.5 text-[#D4A43E] text-lg sm:text-xl mb-3">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#F8F0E9] uppercase mb-4 leading-tight">
          QUEM JÁ CONHECEU <span className="text-[#D4A43E] gold-gradient-text">O PORTAL</span>
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#B5A39F] max-w-2xl mx-auto mb-10 font-normal">
          Veja os relatos reais de quem já aplicou os conhecimentos do guia.
        </p>

        {/* Carrossel — APENAS AS FOTOS PURAS E RESPONSIVAS */}
        <div 
          className="relative max-w-[420px] mx-auto px-3 sm:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Pure Image Display */}
          <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] w-full">
            {images.map((item, index) => (
              <div
                key={item.id}
                className={`transition-opacity duration-300 w-full flex items-center justify-center ${
                  index === currentIndex
                    ? 'relative opacity-100 z-10 pointer-events-auto'
                    : 'absolute inset-0 opacity-0 pointer-events-none z-0'
                }`}
              >
                <picture className="w-full flex justify-center">
                  <source srcSet={item.webp} type="image/webp" />
                  <img
                    src={item.fallback}
                    alt={item.alt}
                    width={380}
                    height={520}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== item.fallback) {
                        target.src = item.fallback;
                      }
                    }}
                    className="w-full max-w-[300px] min-[360px]:max-w-[340px] sm:max-w-[400px] h-auto max-h-[560px] object-contain mx-auto rounded-lg shadow-xl aspect-[380/520]"
                  />
                </picture>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Foto anterior"
            className="absolute -left-2 sm:-left-7 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#110305]/95 border border-[#D4A43E]/80 text-[#D4A43E] hover:bg-[#810018] hover:text-white flex items-center justify-center shadow-lg transition-all cursor-pointer z-20 focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próxima foto"
            className="absolute -right-2 sm:-right-7 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#110305]/95 border border-[#D4A43E]/80 text-[#D4A43E] hover:bg-[#810018] hover:text-white flex items-center justify-center shadow-lg transition-all cursor-pointer z-20 focus:outline-none"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para foto ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 h-2 bg-[#D4A43E] shadow-[0_0_8px_rgba(212,164,62,0.8)]'
                    : 'w-2 h-2 bg-[#B5A39F]/30 hover:bg-[#D4A43E]/60'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
