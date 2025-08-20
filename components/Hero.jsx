'use client'
import React, { useEffect, useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    const element = document.getElementById('hero-wrapper');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div id="hero-wrapper" className="overflow-hidden">
      {/* Mobile */}
      <Image
        src={assets.hero_poster_mobile}
        alt="hero-section"
        className={`md:hidden transition-all duration-700 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}
      />

      {/* Tablet */}
      <Image
        src={assets.hero_poster_tab}
        alt="hero-section"
        className={`hidden md:block lg:hidden transition-all duration-700 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}
      />

      {/* Desktop */}
      <Image
        src={assets.hero_poster_3}
        alt="hero-section"
        className={`hidden lg:block transition-all duration-700 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
