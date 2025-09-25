// src/App.tsx
import "./App.css";
import LottieSection from "./components/LottieSection";

import IndexAnim from "./assets/Index.json";
import InfoAnim from "./assets/info.json";
import ProjectsAnim from "./assets/Projects.json";
import ThanksAnim from "./assets/Thanks.json";

export default function App() {
  console.log("[App] render"); // 🔎 보이면 App은 렌더 중
  return (
    <div className="outer">
      <section className="section_W"><LottieSection animationData={IndexAnim} /></section>
      <section className="section_G"><LottieSection animationData={InfoAnim} /></section>
      <section className="section_G"><LottieSection animationData={ProjectsAnim} /></section>
      <section className="section_W"><LottieSection animationData={ThanksAnim} /></section>
    </div>
  );
}
