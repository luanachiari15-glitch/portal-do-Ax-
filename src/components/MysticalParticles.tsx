import React, { useMemo } from 'react';

export const MysticalParticles: React.FC = () => {
  const particles = useMemo(() => {
    // 8 lightweight particles for ultra high performance on mobile (60-120fps)
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: `${(i * 12.5 + 5) % 95}%`,
      left: `${(i * 14.2 + (i % 3) * 12) % 95}%`,
      size: (i % 2 === 0 ? 2 : 1.5),
      duration: 5 + (i % 3) * 2,
      delay: (i % 4) * 1.5,
      opacity: 0.3 + (i % 2) * 0.15,
      color: i % 3 === 0 ? '#D4A43E' : i % 3 === 1 ? '#810018' : '#FFE89E'
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden contain-strict" aria-hidden="true">
      {/* Ruby & Wine Ambient Glows - Hardware Accelerated & Contained */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[650px] h-[220px] sm:h-[450px] rounded-full blur-[24px] sm:blur-[90px] md:blur-[140px] opacity-25 pointer-events-none transform-gpu"
        style={{ background: 'radial-gradient(circle, #810018 0%, #350009 55%, transparent 80%)' }}
      />
      <div 
        className="absolute top-[45%] -left-20 sm:-left-36 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] rounded-full blur-[24px] sm:blur-[90px] md:blur-[140px] opacity-20 pointer-events-none transform-gpu hidden sm:block"
        style={{ background: 'radial-gradient(circle, #810018 0%, #110305 60%, transparent 80%)' }}
      />
      <div 
        className="absolute top-[75%] -right-20 sm:-right-36 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] rounded-full blur-[24px] sm:blur-[90px] md:blur-[140px] opacity-20 pointer-events-none transform-gpu"
        style={{ background: 'radial-gradient(circle, #8B641D 0%, #350009 60%, transparent 80%)' }}
      />

      {/* Discrete Golden & Ruby Sparks */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-pulse transform-gpu"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 3px ${p.color}`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  );
};
