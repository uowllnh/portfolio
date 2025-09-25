// src/components/LottieSection.tsx
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { useEnterLeave } from "../hooks/useEnterLeave";

type Props = {
  animationData: any;
  segment?: [number, number];
  allowUpscale?: boolean; // true면 큰 화면에서 키우기, false면 원본보다 크게 안 키움(디폴트)
};

export default function LottieSection({
  animationData,
  segment,
  allowUpscale = false,
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<any>(null);

  const baseW = Number(animationData?.w) || 1710;
  const baseH = Number(animationData?.h) || 1112;

  const [total, setTotal] = useState(0);
  const [scale, setScale] = useState(1);

  // ⬇️ 창 크기에 맞춰 "전체가 보이도록" 스케일(비율 유지, 중앙)
  useLayoutEffect(() => {
    const resize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      const s = Math.min(W / baseW, H / baseH);
      setScale(allowUpscale ? s : Math.min(1, s)); // 기본: 업스케일 금지(선명도 유지)
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
    };
  }, [baseW, baseH, allowUpscale]);

  const onReady = () => {
    const frames = lottieRef.current?.getDuration?.(true) ?? 0;
    setTotal(typeof frames === "number" ? frames : 0);
    // 재생 전에도 첫 화면이 보이도록
    segment
      ? lottieRef.current?.goToAndStop(segment[0], true)
      : lottieRef.current?.goToAndStop(0, true);
  };

  // 진입 시 1회 재생
  const handleEnter = useCallback(() => {
    const api = lottieRef.current;
    if (!api || !total) return;
    api.stop();
    if (segment) {
      const [s, e] = segment;
      api.goToAndStop(s, true);
      api.playSegments([s, e], true);
    } else {
      api.goToAndStop(0, true);
      api.play();
    }
  }, [segment, total]);

  // 이탈 시 현재 프레임 그대로 정지(마지막 프레임 점프 X)
  const handleLeave = useCallback(() => {
    lottieRef.current?.pause();
  }, []);

  // 섹션 경계에서만 진입/이탈 트리거
  const refFromHook = useEnterLeave<HTMLDivElement>(handleEnter, handleLeave, {
    threshold: 0.7,
    rootMargin: "0px 0px -10% 0px",
  });

  const setSectionRef = (el: HTMLDivElement | null) => {
    sectionRef.current = el;
    (refFromHook as any).current = el;
  };

  return (
    <section ref={setSectionRef} className="section relative overflow-hidden">
      {/* 중앙 정렬 컨테이너 */}
      <div 
      className="absolute inset-0 grid place-items-center"
          style={{
            width: baseW,
            height: baseH,
            transform: `translate(-50%, -50%) scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            autoplay={false}
            loop={false}
            onDataReady={onReady}
            onDOMLoaded={onReady}
            className="absolute inset-0 w-full h-full"
            rendererSettings={{
              // 전체가 보여야 하므로 'meet' 고정(잘림 없음)
              preserveAspectRatio: "xMidYMid meet",
              progressiveLoad: false,
              hideOnTransparent: true,
            }}
          />
        
      </div>
    </section>
  );
}
