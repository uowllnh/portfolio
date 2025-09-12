// src/components/ScrollFull.tsx
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import Index from "../assets/Index.json";

export default function ScrollFull() {
  const ref = useRef<any>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(window.scrollY / max, 0), 1);
      const total = ref.current?.totalFrames ?? 1;
      ref.current?.goToAndStop(total * progress, true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="h-[200vh]">
      <div className="sticky top-0 w-screen h-screen overflow-hidden bg-black">
        <Lottie
          lottieRef={ref}
          animationData={Index}
          autoplay={false}
          loop={false}
          style={{ width: "100vw", height: "100vh" }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice", // 꽉 채우기 핵심
            progressiveLoad: true,
          }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>
    </section>
  );
}
