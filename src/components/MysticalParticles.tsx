import React, { useMemo } from 'react';

export const MysticalParticles: React.FC = () => {
  const particles = useMemo(() => {
    // 12 lightweight particles for zero lag on mobile and desktop
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: `${(i * 8.3 + (i % 3) * 5) % 100}%`,
      left: `${(i * 15.7 + (i % 4) * 10) % 100}%`,
      size: (i % 3 === 0 ? 2 : 1.5),
      duration: 6 + (i % 4) * 2,
      delay: (i % 5) * 1.2,
      opacity: 0.25 + (i % 3) * 0.15,
      color: i % 3 === 0 ? '#D4A43E' : i % 3 === 1 ? '#810018' : '#FFE89E'
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Ruby & Wine Ambient Glows - Hardware Accelerated & Contained */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[650px] h-[300px] sm:h-[450px] rounded-full blur-[90px] sm:blur-[140px] opacity-25 pointer-events-none transform-gpu"
        style={{ background: 'radial-gradient(circle, #810018 0%, #350009 55%, transparent 80%)' }}
      />
      <div 
        className="absolute top-[45%] -left-20 sm:-left-36 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] rounded-full blur-[80px] sm:blur-[140px] opacity-20 pointer-events-none transform-gpu hidden sm:block"
        style={{ background: 'radial-gradient(circle, #810018 0%, #110305 60%, transparent 80%)' }}
      />
      <div 
        className="absolute top-[75%] -right-20 sm:-right-36 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] rounded-full blur-[80px] sm:blur-[140px] opacity-20 pointer-events-none transform-gpu"
        style={{ background: 'radial-gradient(circle, #8B641D 0%, #350009 60%, transparent 80%)' }}
      />

      {/* Discrete Golden & Ruby Sparks */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-pulse transform-gpu will-change-opacity"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 4px ${p.color}`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  );
};
