// ProjectDetailYupdduk.jsx
import ProjectDetail from "../ProjectDetail";
import Cover from "../../assets/image/yupdduk_Cover.png";
import imgb1 from "../../assets/image/yupdduk_b1.jpeg";
import imgb2 from "../../assets/image/yupdduk_b2.jpeg";
import img1 from "../../assets/image/yupdduk1.png";
import img2 from "../../assets/image/yupdduk2.png";
import img3 from "../../assets/image/yupdduk3.png";
import img4 from "../../assets/image/yupdduk4.png";
import img5 from "../../assets/image/yupdduk5.png";
import type { ProjectProps } from "../ProjectDetail";

export const yupddukData: ProjectProps = {
  title: "엽기떡볶이 리디자인",
  description: "배달 앱 기반 떡볶이 브랜드의 모바일 주문 UX 개선 프로젝트",
  member: "개인 프로젝트",
  githubUrl: "https://github.com/uowllnh/yupdduk",
  url: "https://yupddeok.web.app/",
  detail:
    "기존 엽기떡볶이 앱은 메뉴 탐색 구조가 복잡하고 주문 과정에서 선택 상태를 확인하기 어려운 문제가 있었습니다. 특히 메뉴 리스트, 옵션 선택, 주문 확인 화면에서 정보 위계가 명확하지 않아 사용자가 주문 흐름을 따라가기 어려웠습니다. 이를 개선하기 위해 메인 화면, 메뉴 리스트, 주문 화면 UX를 중심으로 리디자인을 진행했습니다.",
  period: "2025.03",
  stack: ["React", "TypeScript", "Tailwind", "NextJs", "Figma", "GitHub"],
  myRoles: [
    "UX 문제 정의 및 개선 방향 설계",
    "모바일 UI 리디자인",
    "React 기반 화면 구현",
    "메뉴 카드 컴포넌트 설계",
    "주문 흐름 및 선택 상태 UI 개선",
  ],
  features: [
    "메뉴 탐색 구조 개선",
    "메뉴 리스트 UI 개선",
    "주문 옵션 선택 화면 개선",
    "주문 내역 확인 UX 개선",
  ],
  problemPoints: [
    "메인 화면에서 핵심 메뉴와 이벤트 정보가 혼합되어 탐색이 어려웠습니다.",
    "메뉴 리스트의 정보 구조가 복잡해 원하는 메뉴를 빠르게 찾기 어려웠습니다.",
    "주문 과정에서 사용자가 선택한 옵션과 가격을 한눈에 확인하기 어려웠습니다.",
  ],
  improvements: [
    {
      title: "메인 화면 구조 개선",
      before:
        "이벤트 배너와 메뉴 정보가 한 화면에 혼합되어 정보 우선순위가 불명확했습니다.",
      after:
        "대표 메뉴, 이벤트, 주문 진입 영역을 분리해 화면 구조를 정리했습니다.",
      result:
        "사용자가 주요 기능과 메뉴를 더 빠르게 인지할 수 있도록 개선했습니다.",
      image: {
        src: imgb1,
        alt: "엽기떡볶이 메인 화면 개선",
        caption: "메인 화면 개선",
      },
    },
    {
      title: "주문 구조 개선",
      before: "옵션 선택 단계가 길고 현재 선택 상태를 파악하기 어려웠습니다.",
      after:
        "옵션 영역과 가격 정보를 가까운 위치에 배치하고 선택 상태를 강조했습니다.",
      result:
        "주문 전 사용자가 선택 내용을 쉽게 확인할 수 있도록 개선했습니다.",
      image: {
        src: imgb2,
        alt: "엽기떡볶이 주문 구조 개선",
        caption: "주문 화면 개선",
      },
    },
  ],
  technicalDetails: [
    "React 컴포넌트 기반 화면 구조 설계",
    "메뉴 카드 UI를 재사용 가능한 컴포넌트로 분리",
    "props 기반 메뉴 데이터 렌더링 구조 설계",
    "TailwindCSS를 활용한 반응형 모바일 UI 구현",
    "선택 상태에 따라 버튼과 가격 정보가 변경되는 UI 구조 설계",
  ],
  architecture: [
    "메인 화면, 메뉴 리스트, 메뉴 상세, 주문 확인 화면 단위로 분리",
    "메뉴 데이터와 UI 컴포넌트를 분리해 유지보수성을 높임",
    "반복되는 메뉴 카드와 옵션 UI를 컴포넌트화",
  ],
  troubleshooting: [
    {
      issue: "메뉴 정보가 많아 화면이 복잡해 보였습니다.",
      solution:
        "이미지, 메뉴명, 가격, 설명의 우선순위를 정리해 카드형 UI로 재구성했습니다.",
      result: "메뉴 탐색 시 시각적 피로도를 줄였습니다.",
    },
    {
      issue: "주문 화면에서 선택한 옵션을 다시 확인하기 어려웠습니다.",
      solution: "선택 옵션과 총 가격을 하단 고정 영역에 배치했습니다.",
      result: "주문 전 확인 과정을 단순화했습니다.",
    },
  ],
  performance: [
    "반복 UI를 컴포넌트화해 코드 중복을 줄였습니다.",
    "TailwindCSS 유틸리티 클래스를 활용해 스타일 수정 범위를 줄였습니다.",
    "페이지별 역할을 분리해 유지보수성을 높였습니다.",
  ],
  collaboration: [
    "개인 프로젝트로 진행하며 기획, 디자인, 구현 전 과정을 직접 수행",
    "Figma로 문제 화면과 개선 화면을 비교 설계",
    "구현 전 컴포넌트 단위 구조를 먼저 정의",
  ],
  screenshots: [
    {
      src: img1,
      alt: "엽기떡볶이 메인 화면",
      caption: "메인 화면",
    },
    {
      src: img2,
      alt: "엽기떡볶이 주문 화면",
      caption: "주문 화면",
    },
    {
      src: img3,
      alt: "엽기떡볶이 주문 화면",
      caption: "주문 화면",
    },
    {
      src: img4,
      alt: "엽기떡볶이 주문 화면",
      caption: "주문 화면",
    },
    {
      src: img5,
      alt: "엽기떡볶이 주문 화면",
      caption: "주문 화면",
    },
  ],
  learnings: [
    "리디자인에서는 예쁜 화면보다 사용자가 헷갈리는 지점을 먼저 찾는 것이 중요하다는 점을 배웠습니다.",
    "반복 UI를 컴포넌트로 분리하면 이후 데이터가 늘어나도 구조를 유지하기 쉽다는 점을 경험했습니다.",
    "주문형 서비스에서는 선택 상태와 가격 정보의 가시성이 매우 중요하다는 점을 배웠습니다.",
  ],
  retrospective: [
    "처음에는 UI 개선에 집중했지만, 구현 과정에서 컴포넌트 구조와 데이터 흐름을 함께 고려해야 한다는 점을 배웠습니다.",
    "사용자의 주문 흐름을 기준으로 화면을 나누면 개발 구조도 자연스럽게 정리된다는 점을 경험했습니다.",
  ],
  image1: Cover,
};

export default function ProjectDetailYupdduk() {
  return <ProjectDetail {...yupddukData} />;
}
