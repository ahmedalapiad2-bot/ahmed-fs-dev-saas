"use client";

import { useEffect, useState } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const m = window.matchMedia('(max-width: 767.98px)');
    const update = () => setIsMobile(m.matches);
    update();
    if (m.addEventListener) m.addEventListener('change', update);
    else m.addListener(update);
    return () => {
      if (m.removeEventListener) m.removeEventListener('change', update);
      else m.removeListener(update);
    };
  }, []);

  return isMobile;
}
