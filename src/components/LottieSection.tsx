// src/components/LottieSection.tsx
import { useCallback, useRef, useState } from "react";
import Lottie from "lottie-react";
import { useEnterLeave } from "../hooks/useEnterLeave";

type Props = {
  animationData: any;
  segment?: [number, number];
  children?: React.ReactNode; // 오버레이(버튼 등) 슬롯
  overlayClassName?: string; // ✅ 버튼 묶음을 어디에 둘지 클래스 전달
};

export default function LottieSection({ animationData, segment, children,overlayClassName }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<any>(null);
  const [total, setTotal] = useState(0);

  // 중복 방지 플래그
  const readyRef = useRef(false);
  const startedRef = useRef(false);

  // (접근성) 사용자가 '움직임 최소화' 설정 시 자동재생 스킵
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // 현재 섹션이 이미 화면에 보이는지(초기 로드 대비)
  const isSectionVisible = () => {
    if (typeof window === "undefined") return false;
    const el = sectionRef.current;
    if (!el) return false;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const vw = window.innerWidth || document.documentElement.clientWidth;
    return r.bottom > 0 && r.right > 0 && r.top < vh && r.left < vw;
  };

  const safeStartPlay = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    if (segment) {
      const [s, e] = segment;
      lottieRef.current?.goToAndStop(s, true);
      requestAnimationFrame(() => lottieRef.current?.playSegments([s, e], true));
    } else {
      lottieRef.current?.goToAndStop(0, true);
      requestAnimationFrame(() => lottieRef.current?.play());
    }
  };

  // 데이터/DOM/이미지 로드 후 최초 1회 초기화 + 보이면 즉시 재생
  const onReady = () => {
    if (readyRef.current) return;
    readyRef.current = true;

    const frames = lottieRef.current?.getDuration?.(true) ?? 0;
    setTotal(typeof frames === "number" ? frames : 0);

    // 초기 프레임 고정(깜빡임 방지)
    segment
      ? lottieRef.current?.goToAndStop(segment[0], true)
      : lottieRef.current?.goToAndStop(0, true);

    // 처음부터 화면에 보이면 즉시 1회 재생
    if (!prefersReducedMotion && isSectionVisible()) safeStartPlay();
  };

  // 진입 시 1회 재생(이미 재생했으면 무시)
  const handleEnter = useCallback(() => {
    if (!lottieRef.current || !total || prefersReducedMotion) return;
    if (startedRef.current) return;
    lottieRef.current.stop();
    safeStartPlay();
  }, [total, segment, prefersReducedMotion]);

  // 이탈 시 현재 프레임 정지 + 시작 프레임으로 되감기(재진입 시 다시 1회 재생)
  const handleLeave = useCallback(() => {
    lottieRef.current?.pause();
    startedRef.current = false;
    if (segment) {
      lottieRef.current?.goToAndStop(segment[0], true);
    } else {
      lottieRef.current?.goToAndStop(0, true);
    }
  }, [segment]);

  // 진입/이탈 감도 (초기 진입 잘 잡히도록 threshold 살짝 낮춤)
  const refFromHook = useEnterLeave<HTMLDivElement>(handleEnter, handleLeave, {
    threshold: 0.3,
    rootMargin: "0px 0px -5% 0px",
  });

  const setSectionRef = useCallback((el: HTMLDivElement | null) => {
    sectionRef.current = el;
    (refFromHook as any).current = el;
  }, [refFromHook]);

  return (
  
    <section ref={setSectionRef} className="relative w-full h-[100svh] overflow-hidden" id="lottie-stage">

      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop={false}
        onDataReady={onReady}
        onDOMLoaded={onReady}
        // @ts-ignore - 일부 버전에서만 존재
        onLoadedImages={onReady}
        className="absolute 
                   inset: 0;
                   w-full 
                   h-full 
                   z-5
                   top-50% 
                   left-50%
                   -translate-x-50%
                   -translate-y-50% "

        rendererSettings={{
          preserveAspectRatio: "xMidYMid meet",
          progressiveLoad: false,
          hideOnTransparent: true,
        }}
      />

    </section>
  );
}
