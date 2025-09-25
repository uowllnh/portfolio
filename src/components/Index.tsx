import { useRef, useState } from "react";
import Lottie from "lottie-react";
import Idx from "../assets/Index.json";

export default function IndexOnce() {
  const lottieRef = useRef<any>(null);
  const [locked, setLocked] = useState(false); // ✅ 상태/세터 순서 수정
  

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black">
      <Lottie
        lottieRef={lottieRef}
        animationData={Idx}
        autoplay={true}        // ✅ 명시적으로 true
        loop={false}           // ✅ 한 번만 재생 (onComplete 보장)

        // 재생이 끝나면 ‘마지막 프레임’으로 고정 + 잠금
        onComplete={() => {
          const total = lottieRef.current?.getDuration?.(true);
          if (typeof total === "number") {
            lottieRef.current?.goToAndStop(total - 1, true);
            setLocked(true);
          }
        }}

        // 잠금 상태에서 외부에서 play가 호출돼도 즉시 멈추게 하고 싶다면 주석 해제
        // onEnterFrame={() => { if (locked) lottieRef.current?.pause(); }}

        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: false,
          hideOnTransparent: true,
        }}
        className="absolute inset-0 w-full h-full"
      />
    </section>
  );
}
