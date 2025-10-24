// src/App.tsx
import { useState } from "react";
import "./App.css";
import Lottie from "./components/LottieSection";
import useInView from "./hooks/useInView";
import IndexAnim from "./assets/Index.json";
import InfoAnim from "./assets/info.json";
import ProjectsAnim from "./assets/Projects(bgX).json";
import ThanksAnim from "./assets/Thanks.json";
import velIcon from "./assets/logos/vel.svg";
import gitIcon from "./assets/logos/git.svg";
import arrow from "./assets/logos/arrow.svg";
import FloatingActions from "./components/Floating";
import Project_btn from "./components/Project_btn";

export default function App() {

  const [selected, setSelected] = useState<"personal" | "team">("personal");

  const scrollToSection = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

   const scrollToNextSection = (fromId: string) => {
    const from = document.getElementById(fromId);
    if (!from) return;
    // 다음 형제 section 찾기
    let next = from.nextElementSibling as HTMLElement | null;
    while (next && next.tagName !== "SECTION") {
      next = next.nextElementSibling as HTMLElement | null;
    }
  if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // 🔁 마지막이면 첫 프레임으로
      scrollToSection("frame1");
    }
  };

  const s1 = useInView<HTMLElement>();
  const s4 = useInView<HTMLElement>();

  return (
    
    <div className="outer">
        <section ref= {s1.ref} className={`section_W ${s1.inView ? "is-in" : ""}`}  id="frame1">
          <div className="all_box">
            <Lottie animationData={IndexAnim}/>
        <div className="button_container fade-up-stagger"
        >
              <div className="btn"
                   onClick={() => window.open("https://velog.io/@pooh00316", "_blank")}
                >
                  <img
                    src={velIcon}
                    alt="Velog로 이동"
                  />
              </div>

              <div className="btn"
                onClick={() => window.open("https://github.com/uowllnh", "_blank")}
              >
                <img
                  src={gitIcon}
                  alt="github로 이동"
                  />
                </div>
         </div>       
        </div>

        <div className={"arrow fade-up-stagger"}
             onClick={() => scrollToNextSection("frame1")} >
          <img
                  src={arrow}
                  alt="아래로 이동"
                  width={40} 
                  height={40} 
                  />
         </div>
        
      </section>

      <section className="section_G" id="frame2">

        <Lottie animationData={InfoAnim} />

          <div className="arrow"
             onClick={() => scrollToNextSection("frame2")}
             >
          <img
                  src={arrow}
                  alt="아래로 이동"
                  width={40} 
                  height={40}
                  />
         </div>

      </section>

      <section className="section_G" id="frame3">

          <Lottie animationData={ProjectsAnim} />
          <section className="absolute inset-0 w-screen h-screen z-30">
            <div className="relative flex">
                <div className="txt_button_container">
                    <button className={`text-btn ${selected === "personal"
                        ? "is-active" : "is-inactive"}`} onClick={() => setSelected("personal")}>
                          Single </button>
                    <button className={`text-btn ${selected === "team"
                        ? "is-active" : "is-inactive"}`} onClick={() => setSelected("team")}>
                          Team </button>
                </div>
                  
                  <Project_btn selected={selected}  />
                </div> 
                </section>
                

        <div className="arrow"
             onClick={() => scrollToNextSection("frame3")} >
          <img
                  src={arrow}
                  alt="아래로 이동"
                  width={40} 
                  height={40} 
                  />
      
         </div>
           

      </section>
      
      <section ref= {s4.ref} className={`section_W ${s4.inView ? "is-in" : ""}`}  id="frame4">
            <div className="all_box">
            <Lottie animationData={ThanksAnim}/>
            <div className="button_container"
            style={
              {top:"70%"}
            }
        >
              <div className="btn"
                   onClick={() => window.open("https://velog.io/@pooh00316", "_blank")}
                >
                  <img
                    src={velIcon}
                    alt="Velog로 이동"
                  />
              </div>

              <div className="btn"
                onClick={() => window.open("https://github.com/uowllnh", "_blank")}
              >
                <img
                  src={gitIcon}
                  alt="github로 이동"
                  />
                </div>
         </div>       
        </div>

        <div className="arrow"
             onClick={() => scrollToNextSection("frame4")} >
          <img
                  src={arrow}
                  alt="아래로 이동"
                  width={40} 
                  height={40} 
                  
                  style={{ transform: "scaleY(-1) translateX(-50%)",
                    position: "absolute",
                  left: "50%",
                  top: "90%",
                  bottom: "10%",
                   }} 
                  />
         </div>
        
      </section>

      <FloatingActions />
    </div>
  );
}
