// src/App.tsx
import "./App.css";
import LottieSection from "./components/LottieSection";

import IndexAnim from "./assets/Index.json";
import InfoAnim from "./assets/info.json";
import ProjectsAnim from "./assets/Projects.json";
import ThanksAnim from "./assets/Thanks.json";
/* App 함수가 있는 곳, 이 곳이 처음으로 보여지는 화면 */
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
