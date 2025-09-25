import { useRef, useState } from "react";
import Lottie from "lottie-react";
import ProJ from "../assets/Projects.json";

export default function IndexOnce() {
  const lottieRef = useRef<any>(null);
  const [locked, setLocked] = useState(false); // 끝에서 ‘잠금’ 상태

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black">
      <Lottie
        lottieRef={lottieRef}
        animationData={ProJ}
        autoplay={true}         // 자동 재생
        loop={false}            // 반복 금지 = 한 번만

        // 재생이 끝나면 ‘마지막 프레임’으로 고정 + 잠금
        onComplete={() => {
          const total = lottieRef.current?.getDuration?.(true);
          if (typeof total === "number") {
            lottieRef.current?.goToAndStop(total - 1, true);
            setLocked(true);
          }
        }}

        // 혹시 외부(스크롤 등)에서 ref로 다시 play()를 호출하더라도 무시하고 싶을 때:
        // onEnterFrame={() => { if (locked) lottieRef.current?.pause(); }}

        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice", // 화면 꽉 채우기
          progressiveLoad: false,                 // ⬅️ 첫 구간 정적처럼 보일 때 false가 더 안정적
          hideOnTransparent: true,
        }}
        className="absolute inset-0"
      />
    </section>
  );
}
