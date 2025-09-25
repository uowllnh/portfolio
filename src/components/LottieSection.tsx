// src/components/LottieSection.tsx
import { useCallback, useRef, useState } from "react";
import Lottie from "lottie-react";
import { useEnterLeave } from "../hooks/useEnterLeave";

type Props = {
  animationData: any;
  segment?: [number, number];
};

export default function LottieSection({ animationData, segment }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lottieRef  = useRef<any>(null);

  const [total, setTotal] = useState(0);

  // 중복 실행/중복 재생 방지 플래그
  const readyRef   = useRef(false);
  const startedRef = useRef(false);

  // 현재 섹션이 이미 화면 안에 있는지 간단 판정(초기 로드 대비용)
  const isSectionVisible = () => {
    const el = sectionRef.current;
    if (!el) return false;
    const r  = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const vw = window.innerWidth  || document.documentElement.clientWidth;
    return r.bottom > 0 && r.right > 0 && r.top < vh && r.left < vw;
  };

  const safeStartPlay = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    if (segment) {
      const [s, e] = segment;
      lottieRef.current?.goToAndStop(s, true);
      // 다음 틱에 재생 → 첫 프레임 누락/깜빡임 방지
      requestAnimationFrame(() => lottieRef.current?.playSegments([s, e], true));
    } else {
      lottieRef.current?.goToAndStop(0, true);
      requestAnimationFrame(() => lottieRef.current?.play());
    }
  };

  // 데이터/DOM/이미지 로드 뒤 최초 1회 초기화 + 보이면 즉시 재생
  const onReady = () => {
    if (readyRef.current) return;
    readyRef.current = true;

    const frames = lottieRef.current?.getDuration?.(true) ?? 0;
    setTotal(typeof frames === "number" ? frames : 0);

    // 초기 정지 프레임(깜빡임 방지)
    segment
      ? lottieRef.current?.goToAndStop(segment[0], true)
      : lottieRef.current?.goToAndStop(0, true);

    // 🔑 중요: 이미 화면에 보이는 상태라면 옵저버 콜백 기다리지 말고 즉시 1회 재생
    if (isSectionVisible()) safeStartPlay();
  };

  // 진입 시 1회 재생(이미 재생했으면 무시)
  const handleEnter = useCallback(() => {
    if (!lottieRef.current || !total) return;
    if (startedRef.current) return;
    // 초기화 후 재생
    lottieRef.current.stop();
    safeStartPlay();
  }, [total, segment]);

  // 이탈 시 현재 프레임 그대로 정지
  const handleLeave = useCallback(() => {
    lottieRef.current?.pause();
    startedRef.current = false;

    if (segment) {
    const [s] = segment;
    lottieRef.current?.goToAndStop(s, true);
  } else {
    lottieRef.current?.goToAndStop(0, true);
  }
}, [segment]);

  // 진입/이탈 트리거 민감도: 초기 진입 잘 잡히도록 threshold 낮춤
  const refFromHook = useEnterLeave<HTMLDivElement>(handleEnter, handleLeave, {
    threshold: 0.3,
    rootMargin: "0px 0px -5% 0px",
  });

  const setSectionRef = useCallback((el: HTMLDivElement | null) => {
    sectionRef.current = el;
    (refFromHook as any).current = el;
  }, [refFromHook]);

  return (
    <section ref={setSectionRef} className="section relative overflow-hidden">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}                 // 자동재생은 우리가 통제
        loop={false}                     // 1회만
        onDataReady={onReady}            // 데이터 준비
        onDOMLoaded={onReady}            // DOM 준비
        // (지원되면) 이미지까지 로드된 후에도 onReady 시도 → 초기 프레임 안정화
        // @ts-ignore - 일부 버전에서만 존재
        onLoadedImages={onReady}
        className="absolute inset-0 w-full h-full" // ✅ h-full 사용
        rendererSettings={{
          preserveAspectRatio: "xMidYMid meet",    // ✅ 전체 보이기(잘림 방지)
          progressiveLoad: false,
          hideOnTransparent: true,
        }}
      />
    </section>
  );
}
