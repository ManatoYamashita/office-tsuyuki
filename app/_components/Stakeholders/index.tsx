"use client";

import React from 'react';

interface StakeholdersProps {
  logos?: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
}

const defaultLogos = [
  { id: 1, src: "/images/placeholder.webp", alt: "Company 1" },
  { id: 2, src: "/images/placeholder.webp", alt: "Company 2" },
  { id: 3, src: "/images/placeholder.webp", alt: "Company 3" },
  { id: 4, src: "/images/placeholder.webp", alt: "Company 4" },
  { id: 5, src: "/images/placeholder.webp", alt: "Company 5" },
  { id: 6, src: "/images/placeholder.webp", alt: "Company 6" },
];

const Stakeholders: React.FC<StakeholdersProps> = ({ 
  logos = defaultLogos 
}) => {
  return (
    <div className="relative w-full max-w-[100vw] overflow-hidden bg-white py-4 sm:py-6 md:py-8">
      {/* Gradient Overlay - Left */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      
      {/* Gradient Overlay - Right */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />
      
      <div className="flex animate-scroll">
        {/* First set of logos */}
        <div className="flex min-w-full justify-around items-center">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="mx-4 sm:mx-6 md:mx-8 flex items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
        {/* Duplicated set of logos for seamless loop */}
        <div className="flex min-w-full justify-around items-center">
          {logos.map((logo) => (
            <div 
              key={`duplicate-${logo.id}`} 
              className="mx-4 sm:mx-6 md:mx-8 flex items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 15s;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-scroll {
            animation-duration: 18s;
          }
        }
      `}</style>
    </div>
  );
};

export default Stakeholders;