import React from 'react';
import { Sparkles, Moon, Flame, Shield } from 'lucide-react';

interface GrimoireMockupProps {
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export const GrimoireMockup: React.FC<GrimoireMockupProps> = ({ size = 'lg', showBadge = true }) => {
  return (
    <div className="relative mx-auto flex items-center justify-center select-none py-6">
      {/* Background magical aura & smoke glow */}
      <div 
        className="absolute -inset-8 rounded-full blur-3xl opacity-40 animate-pulse pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201, 24, 74, 0.45) 0%, rgba(212, 175, 55, 0.25) 45%, transparent 75%)',
          animationDuration: '4s'
        }}
      />

      {/* Main 3D Book Container */}
      <div className="relative group transition-transform duration-500 hover:scale-[1.02]">
        
        {/* Book spine shadow & 3D edge */}
        <div className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[1/1.38] rounded-r-2xl rounded-l-md p-1 shadow-2xl shadow-black/90">
          
          {/* Outer Gold Foil Filigree Border */}
          <div 
            className="w-full h-full rounded-r-xl rounded-l-sm p-[3px] shadow-[0_0_25px_rgba(212,175,55,0.35)]"
            style={{
              background: 'linear-gradient(135deg, #ffd875 0%, #805615 25%, #fff3b0 50%, #613e09 75%, #fae18b 100%)'
            }}
          >
            {/* Book Leather / Velvet Cover */}
            <div 
              className="w-full h-full rounded-r-lg rounded-l-sm relative overflow-hidden flex flex-col justify-between p-6 text-center"
              style={{
                background: 'radial-gradient(circle at 50% 30%, #2a0815 0%, #130409 60%, #080204 100%)',
                boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8), inset 0 0 15px rgba(201,24,74,0.3)'
              }}
            >
              {/* Inner Decorative Golden Corner Frames */}
              <div className="absolute top-2 left-2 w-7 h-7 border-t-2 border-l-2 border-[#e5c07b]/70 pointer-events-none" />
              <div className="absolute top-2 right-2 w-7 h-7 border-t-2 border-r-2 border-[#e5c07b]/70 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-7 h-7 border-b-2 border-l-2 border-[#e5c07b]/70 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-7 h-7 border-b-2 border-r-2 border-[#e5c07b]/70 pointer-events-none" />

              {/* Book Spine Texture Line on Left */}
              <div className="absolute top-0 bottom-0 left-3 w-[2px] bg-gradient-to-b from-transparent via-[#ffd875]/40 to-transparent pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-5 w-[1px] bg-black/60 pointer-events-none" />

              {/* Top Header of Grimoire */}
              <div className="pt-2 relative z-10">
                <div className="flex items-center justify-center gap-1.5 text-[10px] tracking-[0.3em] uppercase text-[#ffd875]/90 font-serif font-semibold">
                  <Moon className="w-3 h-3 text-[#ffd875]" />
                  <span>GRIMÓRIO DIGITAL</span>
                  <Moon className="w-3 h-3 text-[#ffd875]" />
                </div>
                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#ffd875]/60 to-transparent mx-auto mt-1" />
              </div>

              {/* Center Emblem / Sacred Talisman */}
              <div className="my-auto relative z-10 flex flex-col items-center">
                {/* Glowing Ruby Amulet / Sacred Circle */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center p-1 mb-3">
                  <div 
                    className="absolute inset-0 rounded-full animate-spin pointer-events-none opacity-60"
                    style={{
                      border: '1px dashed #ffd875',
                      animationDuration: '30s'
                    }}
                  />
                  <div 
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{
                      background: 'radial-gradient(circle, #8a0824 0%, #400412 70%, #150207 100%)',
                      boxShadow: '0 0 25px rgba(201, 24, 74, 0.7), inset 0 0 15px rgba(255, 216, 117, 0.4)',
                      border: '2px solid #ffd875'
                    }}
                  >
                    {/* Alchemical Perfume Bottle & Moon Symbol */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative">
                        <Flame className="w-8 h-8 text-[#ffd875] drop-shadow-[0_0_8px_rgba(255,216,117,0.8)]" />
                        <Sparkles className="w-4 h-4 text-[#ffffff] absolute -top-1 -right-2 animate-pulse" />
                      </div>
                      <span className="text-[8px] tracking-[0.25em] text-[#ffe6a7] font-serif uppercase mt-0.5">AXÉ</span>
                    </div>
                  </div>
                </div>

                {/* Main Book Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wider leading-tight gold-text-gradient drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  PORTAL DO AXÉ
                </h3>

                <p className="text-[11px] sm:text-xs text-[#f3d3dc] font-quote italic tracking-wide mt-1 max-w-[220px]">
                  Guia Místico de Perfumes Encantados, Magnetismo & Rituais de Prosperidade
                </p>
              </div>

              {/* Bottom Book Footer */}
              <div className="pb-2 relative z-10">
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#ffd875]/60 to-transparent mx-auto mb-1.5" />
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#d4af37]/80 font-sans font-medium">
                  EDIÇÃO EXCLUSIVA • ACESSO IMEDIATO
                </p>
              </div>

              {/* Subtle page bookmark ribbon */}
              <div 
                className="absolute top-0 right-7 w-4 h-12 shadow-lg"
                style={{
                  background: 'linear-gradient(180deg, #c9184a 0%, #800f2f 100%)',
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Floating Enchanted Perfume Flacon on the side for depth */}
        <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-[#180710]/90 border border-[#ffd875]/40 rounded-2xl p-3 shadow-2xl backdrop-blur-md flex items-center gap-3 transform rotate-2 hover:rotate-0 transition-transform">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#800f2f] to-[#25040d] border border-[#ffd875]/50 flex items-center justify-center shadow-[0_0_15px_rgba(201,24,74,0.5)]">
            <span className="text-xl">🧪</span>
          </div>
          <div className="text-left pr-2">
            <p className="text-[10px] uppercase font-bold tracking-wider text-[#ffd875]">FÓRMULAS & UNÇÃO</p>
            <p className="text-xs font-semibold text-[#f7eff2]">Guia 100% Prático</p>
          </div>
        </div>

        {/* Floating Moon Badge on the left */}
        <div className="absolute -top-3 -left-3 sm:-left-6 bg-[#16060e]/95 border border-[#ffd875]/40 rounded-full px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-1.5 text-xs text-[#ffd875]">
          <Sparkles className="w-3.5 h-3.5 text-[#ffd875]" />
          <span className="font-serif font-semibold text-[11px] tracking-wide">PDF + Grimório Digital</span>
        </div>

      </div>

      {/* Realistic Shadow beneath */}
      <div 
        className="absolute -bottom-4 w-3/4 h-6 rounded-[100%] blur-md bg-black/80 pointer-events-none"
      />
    </div>
  );
};
