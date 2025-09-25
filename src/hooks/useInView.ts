import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number;     // 0~1: 섹션이 화면에 이만큼 들어오면 inView=true
  rootMargin?: string;    // 필요하면 시야를 늘리거나 줄이기
};

export default function useInView<T extends Element>({
  threshold = 0.35,
  rootMargin,
}: Options = {}) {
  const targetRef = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        setInView(e.isIntersecting && e.intersectionRatio >= threshold);
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return { targetRef, inView };
}
