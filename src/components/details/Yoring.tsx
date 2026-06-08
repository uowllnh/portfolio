// ProjectDetailYoring.jsx
import ProjectDetail from "../ProjectDetail";
import img1 from "../../assets/image/portfolio1.png";
import img2 from "../../assets/image/portfolio2.png";
import type { ProjectProps } from "../ProjectDetail";

export const yoringData: ProjectProps = {
      title: "Yoring",
      description: "사용자 데이터 소비 패턴 기반 통신 요금제 추천 앱",
      member: "FE 1명\nBE 2명",
      detail: "통신사별 요금제는 종류가 많고 혜택 구조도 달라 사용자가 자신에게 맞는 요금제를 직접 비교하기 어렵습니다. 기존 통신사 앱은 자사 요금제 중심으로만 탐색이 가능해 여러 통신사의 요금제를 한눈에 비교하기 어렵다는 한계가 있었습니다. Yoring은 사용자의 데이터 소비 패턴, 연령대, 사용 목적 등을 기반으로 적합한 요금제를 추천해주는 모바일 앱입니다.",
      period: "2023.11 ~ 2024.11",
      stack: ["Java", "AndroidStudio", "FireBase", "Figma", "GitHub"],
      myRoles: [
        "UI/UX 기획 및 전체 화면 설계 담당",
        "Android XML 기반 모바일 UI 구현",
        "사용자 흐름 및 정보 구조 설계",
        "요금제 추천 결과 화면 UI 구성",
        "백엔드 API 연동 구조 협의",
      ],
      features: [
        "통신사별 요금제 비교 및 추천 기능",
        "사용자 소비 패턴 기반 맞춤형 추천",
        "연령대 및 사용 목적 기반 필터 기능",
        "추천 결과 화면 및 상세 정보 제공",
      ],
      problemPoints: [
        "요금제 종류가 많아 사용자가 직접 비교하기 어려웠습니다.",
        "기존 통신사 앱은 자사 요금제 중심이라 타 통신사 비교가 제한적이었습니다.",
        "설문 과정이 길어질 경우 사용자가 중간에 이탈할 가능성이 있었습니다.",
      ],
      improvements: [
        {
          title: "메인 화면 구조 개선",
          before: "기능이 분산되어 있어 사용자가 핵심 기능을 빠르게 찾기 어려웠습니다.",
          after: "추천, 비교, 혜택 정보를 중심으로 화면 구조를 재배치했습니다.",
          result: "사용자가 원하는 기능에 더 빠르게 접근할 수 있도록 개선했습니다.",
          image: {
            src: img1,
            alt: "Yoring 메인 화면 구조 개선",
            caption: "메인 화면 개선",
          },
        },
        {
          title: "설문 및 추천 흐름 개선",
          before: "설문 단계가 길고 현재 진행 상태를 파악하기 어려웠습니다.",
          after: "진행 상태를 시각적으로 보여주고 질문 흐름을 단순화했습니다.",
          result: "사용자가 현재 단계를 쉽게 인지하고 추천 결과까지 자연스럽게 이동할 수 있도록 개선했습니다.",
          image: {
            src: img2,
            alt: "Yoring 설문 흐름 개선",
            caption: "설문 UX 개선",
          },
        },
      ],
      technicalDetails: [
        "Android XML 기반으로 화면 레이아웃 구현",
        "추천 결과 화면에서 사용자 입력값에 따른 동적 UI 구성",
        "Firebase 기반 데이터 저장 및 연동 구조 활용",
        "사용자 조건에 따른 추천 결과 분기 로직 설계",
      ],
      architecture: [
        "메인 화면, 설문 화면, 추천 결과 화면 단위로 구조 분리",
        "반복되는 요금제 카드 UI를 재사용 가능한 구조로 설계",
        "사용자 입력 상태에 따라 다음 화면이 변경되는 흐름 구성",
      ],
      troubleshooting: [
        {
          issue: "설문 단계가 길어질수록 사용자 이탈 가능성이 높았습니다.",
          solution: "진행 상태 표시 UI와 단계별 화면 분리를 적용했습니다.",
          result: "사용자가 현재 진행 상황을 쉽게 파악할 수 있도록 개선했습니다.",
        },
        {
          issue: "추천 결과 화면에서 정보량이 많아 가독성이 떨어졌습니다.",
          solution: "카드 UI 기반으로 요금제명, 가격, 혜택 정보를 분리했습니다.",
          result: "핵심 정보를 빠르게 비교할 수 있도록 개선했습니다.",
        },
      ],
      performance: [
        "반복 레이아웃을 줄이고 화면 구조를 단순화했습니다.",
        "정보 우선순위를 기준으로 UI를 재배치해 탐색 효율을 높였습니다.",
      ],
      collaboration: [
        "백엔드 담당자와 API 응답 구조 협의",
        "추천 결과 데이터 포맷 정의 참여",
        "Figma 기반 화면 명세 공유",
      ],
      screenshots: [
        {
          src: img1,
          alt: "Yoring 메인 화면",
          caption: "메인 화면",
        },
        {
          src: img2,
          alt: "Yoring 추천 화면",
          caption: "추천 화면",
        },
      ],
      learnings: [
        "사용자의 실제 문제를 먼저 정의한 뒤 화면 구조를 설계하는 과정이 중요하다는 점을 배웠습니다.",
        "모바일 UI에서는 정보 우선순위와 시각적 위계가 사용자 경험에 큰 영향을 준다는 점을 경험했습니다.",
        "백엔드와 데이터 구조를 미리 협의하면 화면 구현 과정이 훨씬 수월해진다는 점을 배웠습니다.",
      ],
      retrospective: [
        "초기에는 화면 디자인 중심으로 접근했지만, 이후 사용자 흐름과 데이터 구조를 함께 고려하는 것이 중요하다는 점을 배웠습니다.",
        "프론트엔드 개발자는 UI 구현뿐 아니라 데이터가 화면에 어떻게 연결되는지 이해해야 한다는 점을 경험했습니다.",
      ],
      image1: img1,
      image2: img2,
};

export default function ProjectDetailYoring() {
  return <ProjectDetail {...yoringData} />;
}
