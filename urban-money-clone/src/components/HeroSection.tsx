'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const heroImages = [
  '/images/Picsart_25-08-31_13-15-35-981.jpg',
  '/images/Picsart_25-08-29_20-04-01-317.jpg',
  '/images/Picsart_25-08-29_15-17-21-832.jpg',
  '/images/Picsart_25-08-30_15-23-04-757.jpg'
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Changed from 3000ms to 5000ms (5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Background Images with Proper Sizing */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-6000 ease-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Hero image ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
      
      {/* Minimal Overlay - Only for Button Readability */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      {/* Content - Shop Now Button at Bottom Center */}
      <div className="relative z-20 flex items-end justify-center h-full pb-8">
        <Link 
          href="/men"
          className="inline-flex items-center justify-center px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-sm"
        >
          SHOP NOW
          <ArrowRight className="ml-1" size={16} />
        </Link>
      </div>
    </section>
  );
}
