import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import heroAnim from "../assets/Index.json";

gsap.registerPlugin(ScrollTrigger);

export default function IndexScroll() {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    const totalFrames = lottieRef.current?.totalFrames || 1;
    gsap.to({frame: 0}, {
      frame: totalFrames,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero-scroll",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
      onUpdate: function () {
        lottieRef.current?.goToAndStop(this.targets()[0].frame, true);
      },
    });
  }, []);

  return (
    <section id="hero-scroll" className="h-[200vh]">
      <Lottie
        lottieRef={lottieRef}
        animationData={heroAnim}
        autoplay={false}
        loop={false}
        className="w-full h-screen"
      />
    </section>
  );
}
