"use client";

import { useEffect, useState } from "react";

export default function DeviceExperiencePrompt() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem("afs-mobile-tip");

    if (!alreadySeen && window.innerWidth < 768) {
      setShow(true);
      localStorage.setItem("afs-mobile-tip", "seen");

      const timer = setTimeout(() => {
        setShow(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[92%] max-w-md">
      <div className="rounded-xl border border-cyan-500/20 bg-[#08172f]/95 backdrop-blur-xl shadow-2xl px-4 py-3">
        <div className="flex items-start gap-3">
          <div className="text-lg">💻</div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-white">
              تجربة أفضل متاحة
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-300">
              للحصول على أفضل تجربة، فعّل وضع سطح المكتب من قائمة ⋮ في المتصفح.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
