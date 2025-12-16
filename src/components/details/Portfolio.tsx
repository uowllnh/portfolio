import githublogo from "../../assets/logos/GitHub.svg";
import tslogo from "../../assets/logos/typescript.png";
import figmalogo from "../../assets/logos/Figma.svg";
import reactlogo from "../../assets/logos/react.svg";
import twlogo from "../../assets/logos/TailWind.png";
import vitelogo from "../../assets/logos/Vite.png";
import ProjectDetail from "../ProjectDetail";
import img1 from "../../assets/image/portfolio1.png";
import img2 from "../../assets/image/portfolio2.png";

export default function ProjectDetailPortfolio() {
  return (

  <ProjectDetail
    title = "Portfolio Site"
    description = "포트폴리오 및 이력 정보를 모두 확인할 수 있는 웹 사이트"
    member = "개인 프로젝트"
    detail = "다양한 모션을 넣고, 한눈에 포트폴리오를 확인할 수 있도록 디자인 하였으며, 개발까지 진행하였습니다.다양한 모션을 넣고, 한눈에 포트폴리오를 확인할 수 있도록 디자인 하였으며, 개발까지 진행하였습니다.다양한 모션을 넣고, 한눈에 포트폴리오를 확인할 수 있도록 디자인 하였으며, 개발까지 진행하였습니다.다양한 모션을 넣고, 한눈에 포트폴리오를 확인할 수 있도록 디자인 하였으며, 개발까지 진행하였습니다.다양한 모션을 넣고, 한눈에 포트폴리오를 확인할 수 있도록 디자인 하였으며, 개발까지 진행하였습니다."
    period = "2025.11.01 ~ 2025.11.30"
    stack = {[githublogo, tslogo, figmalogo, reactlogo, twlogo, vitelogo]}
   image1 = {img1}
   image2 = {img2}
    />

      );
}

