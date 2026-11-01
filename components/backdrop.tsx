'use client';

import { useEffect, useRef } from 'react';

/** Fixed, site-wide animated background: dot grid, drifting glows, and a cursor spotlight. */
export default function Backdrop() {
  const spot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spot.current;
    if (!el) return;
    let frame = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--x', `${e.clientX}px`);
        el.style.setProperty('--y', `${e.clientY}px`);
        el.style.opacity = '1';
      });
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* dot grid, fading out toward the edges */}
      <div className="dot-grid absolute inset-0" />

      {/* drifting colour glows */}
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />

      {/* cursor spotlight */}
      <div ref={spot} className="spotlight absolute inset-0 opacity-0 transition-opacity duration-700" />
    </div>
  );
}
