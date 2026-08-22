import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const GuideCarousel: React.FC = () => {
  const slides = [
    {
      id: 1,
      src: 'https://i.imgur.com/mWTKfII.jpg',
      alt: 'Página do Guia Portal do Axé 1'
    },
    {
      id: 2,
      src: 'https://i.imgur.com/3sHrQwk.jpg',
      alt: 'Página do Guia Portal do Axé 2'
    },
    {
      id: 3,
      src: 'https://i.imgur.com/B3FQFRM.jpg',
      alt: 'Página do Guia Portal do Axé 3'
    },
    {
      id: 4,
      src: 'https://i.imgur.com/QiLTnOj.jpg',
      alt: 'Página do Guia Portal do Axé 4'
    },
    {
      id: 5,
      src: 'https://i.imgur.com/jfTsABJ.jpg',
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
      className="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto select-none touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-[#810018]/20 rounded-full blur-[24px] sm:blur-[70px] -z-10 pointer-events-none transform-gpu" />

      {/* Pure Image Display */}
      <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[440px] w-full contain-paint">
        {slides.map((item, index) => {
          const isCurrent = index === currentIndex;
          const isAdjacent = index === (currentIndex + 1) % slides.length || index === (currentIndex - 1 + slides.length) % slides.length;
          
          return (
            <div
              key={item.id}
              className={`transition-opacity duration-300 w-full flex items-center justify-center ${
                isCurrent
                  ? 'relative opacity-100 z-10 pointer-events-auto'
                  : 'absolute inset-0 opacity-0 pointer-events-none z-0'
              }`}
            >
              {(isCurrent || isAdjacent) && (
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1413}
                  height={2000}
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="block w-full max-w-[290px] min-[360px]:max-w-[320px] sm:max-w-[340px] h-auto max-h-[460px] object-contain mx-auto rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.8)] aspect-[1413/2000]"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Página anterior"
        className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#110305]/95 border border-[#D4A43E]/80 text-[#D4A43E] hover:bg-[#810018] hover:text-white flex items-center justify-center shadow-lg transition-all active:scale-90 cursor-pointer z-20 focus:outline-none"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Próxima página"
        className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#110305]/95 border border-[#D4A43E]/80 text-[#D4A43E] hover:bg-[#810018] hover:text-white flex items-center justify-center shadow-lg transition-all active:scale-90 cursor-pointer z-20 focus:outline-none"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4 py-1">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para imagem ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer p-1 -m-1 ${
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
