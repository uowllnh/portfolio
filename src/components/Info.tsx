import Lottie from "lottie-react";
import Information from "../assets/Info.json";

export default function Info() {
  return (
   <section className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Lottie를 화면에 꽉 채우기 */}
      <Lottie
        animationData={Information}
        loop
        autoplay
        style={{ width: "100vw", height: "100vh" }}     // 컨테이너 크기
        rendererSettings={{
          // SVG의 잘림/확대 방식 → 'object-fit: cover' 같은 효과
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: true,
          hideOnTransparent: true,
        }}
        className="absolute inset-0"
      />

    </section>
  );
}
