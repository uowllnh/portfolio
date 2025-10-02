// src/hooks/useInView.ts
import { useEffect, useRef, useState } from "react";

export default function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35, ...options } // 뷰의 35% 보이면 in
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return { ref, inView };
}
