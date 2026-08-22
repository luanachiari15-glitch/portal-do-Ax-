import React, { useMemo } from 'react';

export const MysticalParticles: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.5 + 0.2,
      color: i % 4 === 0 ? '#D4A43E' : i % 4 === 1 ? '#810018' : i % 4 === 2 ? '#FFE89E' : '#8B641D'
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Ruby & Wine Ambient Glows */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[550px] rounded-full blur-[150px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #810018 0%, #350009 55%, transparent 80%)' }}
      />
      <div 
        className="absolute top-[40%] -left-36 w-[550px] h-[550px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #810018 0%, #110305 60%, transparent 80%)' }}
      />
      <div 
        className="absolute top-[70%] -right-36 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B641D 0%, #350009 60%, transparent 80%)' }}
      />

      {/* Discrete Golden & Ruby Sparks */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-pulse"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  );
};
