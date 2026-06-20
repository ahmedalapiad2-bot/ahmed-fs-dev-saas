"use client";

import Image from 'next/image';

export function GeometricAFLogo() {
  return (
    <div className="flex items-center justify-center h-10">
      <Image
        src="/logo.png"
        alt="Ahmed FS Dev"
        width={800}
        height={220}
        priority
        quality={95}
        className="h-20 w-auto object-contain"
        style={{
          maxHeight: '80px',
          filter: 'none',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          WebkitBackfaceVisibility: 'hidden',
        }}
      />
    </div>
  );
}
