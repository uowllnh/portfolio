// ProjectDetailPortfolio.jsx
import ProjectDetail from "../ProjectDetail";
import img1 from "../../assets/image/portfolio1.png";
import img2 from "../../assets/image/portfolio2.png";
import type { ProjectProps } from "../ProjectDetail";

export const portfolioData: ProjectProps = {
      title: "Portfolio Site",
      description: "개인 브랜딩과 프로젝트 소개를 위한 반응형 포트폴리오 웹사이트",
      member: "개인 프로젝트",
      detail: "프론트엔드 개발자로서 프로젝트 경험과 UI/UX 역량을 효과적으로 전달하기 위해 포트폴리오 웹사이트를 제작했습니다. 단순히 결과물을 나열하는 방식이 아니라 프로젝트별 문제 정의, 개선 과정, 구현 내용을 함께 보여주는 구조로 설계했습니다. React와 TypeScript를 기반으로 컴포넌트 구조를 설계하고, 반응형 UI와 스크롤 인터랙션을 적용했습니다.",
      period: "2025.03",
      stack: ["React", "TypeScript", "Tailwind", "Vite", "Figma", "GitHub"],
      myRoles: [
        "포트폴리오 전체 UX/UI 설계",
        "React 기반 프론트엔드 개발",
        "TypeScript 기반 컴포넌트 구조 설계",
        "반응형 웹 구현",
        "프로젝트 상세 페이지 설계",
      ],
      features: [
        "개인 소개 및 기술 스택 소개",
        "프로젝트 리스트 및 상세 페이지",
        "반응형 레이아웃",
        "스크롤 기반 인터랙션",
        "컴포넌트 기반 페이지 구성",
      ],
      problemPoints: [
        "기존 포트폴리오는 프로젝트 결과물만 보여주기 쉬워 문제 해결 과정이 드러나기 어려웠습니다.",
        "텍스트 중심 소개는 사용자의 집중도를 낮출 수 있었습니다.",
        "프로젝트별 정보를 일관된 구조로 전달할 필요가 있었습니다.",
      ],
      improvements: [
        {
          title: "인트로 화면의 첫인상 개선",
          before: "정적인 텍스트 중심 구조로 첫 화면의 몰입감이 부족했습니다.",
          after: "타이포그래피, 이미지, 인터랙션을 활용해 첫 화면의 시각적 집중도를 높였습니다.",
          result: "방문자가 포트폴리오의 분위기와 개발자 정체성을 빠르게 인지할 수 있도록 개선했습니다.",
          image: {
            src: img1,
            alt: "포트폴리오 인트로 화면",
            caption: "인트로 화면",
          },
        },
        {
          title: "프로젝트 상세 구조 개선",
          before: "프로젝트 설명이 단순 나열식이라 개발 역량을 보여주기 어려웠습니다.",
          after: "문제 정의, 개선 방향, 구현 내용, 회고 순서로 상세 페이지 구조를 설계했습니다.",
          result: "프로젝트별 문제 해결 과정과 개발 역량을 함께 전달할 수 있도록 개선했습니다.",
          image: {
            src: img2,
            alt: "포트폴리오 프로젝트 상세 화면",
            caption: "프로젝트 상세 화면",
          },
        },
      ],
      technicalDetails: [
        "React 기반 SPA 구조로 개발",
        "TypeScript를 활용한 props 타입 안정성 확보",
        "ProjectDetail 공통 컴포넌트를 설계해 프로젝트 상세 페이지 재사용",
        "TailwindCSS 기반 반응형 스타일링 적용",
        "Vite 개발 환경을 사용해 빠른 개발 환경 구성",
      ],
      architecture: [
        "공통 레이아웃 컴포넌트와 프로젝트 상세 컴포넌트 분리",
        "프로젝트 데이터를 props로 전달해 동일한 상세 페이지 구조 재사용",
        "이미지, 설명, 기술 스택, 개선 내용 등을 섹션 단위로 구성",
      ],
      troubleshooting: [
        {
          issue: "프로젝트 상세 페이지마다 비슷한 구조가 반복되어 코드 중복이 발생할 수 있었습니다.",
          solution: "ProjectDetail 공통 컴포넌트를 만들고 각 프로젝트 데이터만 props로 전달하도록 구성했습니다.",
          result: "프로젝트 추가와 수정이 쉬운 구조로 개선했습니다.",
        },
        {
          issue: "반응형 화면에서 이미지와 텍스트 배치가 어색해지는 문제가 있었습니다.",
          solution: "TailwindCSS의 반응형 클래스를 활용해 화면 크기별 레이아웃을 조정했습니다.",
          result: "PC와 모바일 모두에서 자연스럽게 콘텐츠를 확인할 수 있도록 개선했습니다.",
        },
      ],
      performance: [
        "공통 컴포넌트화를 통해 중복 코드를 줄였습니다.",
        "프로젝트 데이터를 분리해 유지보수성을 높였습니다.",
        "불필요한 상태 관리를 줄이고 정적인 데이터 중심 구조로 단순화했습니다.",
      ],
      collaboration: [
        "개인 프로젝트로 기획, 디자인, 개발 전 과정을 직접 수행",
        "Figma로 화면 구조를 먼저 설계한 뒤 React 컴포넌트로 구현",
        "GitHub를 활용해 프로젝트 버전 관리",
      ],
      screenshots: [
        {
          src: img1,
          alt: "포트폴리오 인트로 화면",
          caption: "인트로 화면",
        },
        {
          src: img2,
          alt: "포트폴리오 프로젝트 화면",
          caption: "프로젝트 화면",
        },
      ],
      learnings: [
        "포트폴리오는 결과물보다 문제 해결 과정과 구현 의도를 함께 보여주는 것이 중요하다는 점을 배웠습니다.",
        "공통 컴포넌트를 설계하면 프로젝트가 추가되어도 유지보수가 쉬워진다는 점을 경험했습니다.",
        "반응형 UI를 설계할 때 콘텐츠 우선순위를 먼저 정하는 것이 중요하다는 점을 배웠습니다.",
      ],
      retrospective: [
        "처음에는 시각적 완성도에 집중했지만, 개발자 포트폴리오에서는 구현 구조와 문제 해결 과정을 보여주는 것이 더 중요하다는 점을 깨달았습니다.",
        "앞으로는 프로젝트별 GitHub 링크, 배포 링크, 성능 개선 기록까지 함께 정리해 포트폴리오 완성도를 높이고자 합니다.",
      ],
      image1: img1,
      image2: img2,
};

export default function ProjectDetailPortfolio() {
  return <ProjectDetail {...portfolioData} />;
}
