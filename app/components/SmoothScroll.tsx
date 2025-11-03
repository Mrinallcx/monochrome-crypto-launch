"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Initialize Lenis with ultra-smooth settings
    const lenis = new Lenis({
      smoothWheel: !prefersReduced,
      wheelMultiplier: 0.8, // Reduced sensitivity for smoother feel
      touchMultiplier: 1.2,
      infinite: false,
      gestureOrientation: "vertical",
      normalizeWheel: true,
      smoothTouch: false,
    });

    // Set ultra-smooth lerp value (lower = smoother)
    // Accessing internal options for finer control
    (lenis as any).options.lerp = 0.05; // Very smooth (default is 0.1, original was 0.12)

    lenisRef.current = lenis;

    // Optimized animation loop
    let rafId: number;

    function raf(currentTime: number) {
      lenis.raf(currentTime);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
