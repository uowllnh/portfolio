// src/hooks/useEnterLeave.ts
import { useEffect, useRef } from "react";

type Opt = { threshold?: number; rootMargin?: string; };

export function useEnterLeave<T extends Element>(
  onEnter: () => void,
  onLeave: () => void,
  { threshold = 0.3, rootMargin }: Opt = {}
) {
  const ref = useRef<T | null>(null);
  const wasInRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        const now = entry.isIntersecting && entry.intersectionRatio >= threshold;
        if (now && !wasInRef.current) {
          wasInRef.current = true;
          onEnter();     // ✅ 진입 “순간”에만 호출
        } else if (!now && wasInRef.current) {
          wasInRef.current = false;
          onLeave();     // ✅ 이탈 “순간”에만 호출
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [onEnter, onLeave, threshold, rootMargin]);

  return ref;
}
