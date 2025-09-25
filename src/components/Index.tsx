import { useRef, useState } from "react"; /* useState: 컴포넌트 관리 시 사용, 상태가 변할 때마다 컴포넌트 리렌더링 / useRef: 이전 값과 새로운 값 연결, 렌더링과 무관하게 값 유지 시 사용 */
import Lottie from "lottie-react";
import Idx from "../assets/Index.json";

export default function IndexOnce() {
  const lottieRef = useRef<any>(null);
  const [locked, setLocked] = useState(false);
  

  return (
    <section className="relative width=device-width height=device-height overflow-hidden bg-black">
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
            setLocked(true); //외부(즉 다른 코드)에서 시도해도 못하게 막음
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
        className="absolute inset-0"
      />
    </section>
  );
}
