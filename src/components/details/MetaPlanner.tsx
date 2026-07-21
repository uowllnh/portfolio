// ProjectDetailMetaPlanner.jsx
import ProjectDetail from "../ProjectDetail";
import img1 from "../../assets/image/meta_b1.png";
import img2 from "../../assets/image/meta_b2.png";
import type { ProjectProps } from "../ProjectDetail";

export const metaPlannerData: ProjectProps = {
  title: "Meta Planner",
  description: "목표 관리와 집중 루틴 형성을 위한 플래너 앱 프로젝트",
  member: "팀 프로젝트",
  detail:
    "Meta Planner는 사용자의 목표 관리와 집중 루틴 형성을 돕기 위한 모바일 플래너 앱입니다. 기존 플래너 앱은 기능은 많지만 화면 정보량이 많아 사용자가 피로감을 느끼거나 핵심 기능에 집중하기 어려운 경우가 있었습니다. 이를 개선하기 위해 일정 관리, 집중 타이머, 루틴 확인 기능을 중심으로 직관적인 모바일 UI를 설계했습니다. 프로젝트 저장소는 팀 프로젝트 초기 설정상 private으로 관리되어 GitHub 및 배포 링크는 제공하지 않았으며, 본 포트폴리오에서는 제가 담당한 화면 구현, 기능 흐름, 기술적 의사결정과 문제 해결 과정을 중심으로 정리했습니다.",
  period: "2025.03 ~ ing",
  stack: ["Kotlin", "AndroidStudio", "FireBase", "Figma", "GitHub"],
  myRoles: [
    "UI/UX 기획 및 전체 화면 설계",
    "Android 기반 모바일 화면 구현",
    "집중 타이머 UI 설계",
    "일정 및 루틴 관리 화면 설계",
    "사용자 입력 흐름 설계",
  ],
  features: [
    "일정 및 목표 관리 기능",
    "집중 타이머 기능",
    "루틴 기반 플래너 구조",
    "상태별 타이머 UI 변화",
    "사용자 입력 기반 계획 관리",
  ],
  problemPoints: [
    "기존 플래너 앱은 정보량이 많아 화면 피로도가 높았습니다.",
    "집중 타이머의 현재 상태와 남은 시간을 직관적으로 인지하기 어려웠습니다.",
    "일정, 목표, 루틴 정보가 분산되면 사용자가 하루 계획을 빠르게 확인하기 어려웠습니다.",
  ],
  improvements: [
    {
      title: "집중 타이머 UI 개선",
      before: "남은 시간과 집중 상태를 숫자 중심으로만 확인해야 했습니다.",
      after: "원형 타이머 UI와 상태별 시각 변화를 적용했습니다.",
      result:
        "사용자가 현재 집중 상태를 직관적으로 인지할 수 있도록 개선했습니다.",
      image: {
        src: img1,
        alt: "Meta Planner 집중 타이머 UI",
        caption: "집중 타이머 UI",
      },
    },
    {
      title: "플래너 화면 구조 개선",
      before:
        "일정과 루틴 정보가 분산되어 하루 계획을 한눈에 파악하기 어려웠습니다.",
      after: "중요 일정, 목표, 루틴 정보를 우선순위에 따라 재배치했습니다.",
      result:
        "사용자가 하루 계획을 빠르게 확인하고 실행할 수 있도록 개선했습니다.",
      image: {
        src: img2,
        alt: "Meta Planner 플래너 화면",
        caption: "플래너 화면",
      },
    },
  ],
  technicalDetails: [
    "Kotlin 기반 Android 앱 화면 구현",
    "사용자 입력 기반 일정 상태 관리 구조 설계",
    "타이머 상태 변화에 따른 UI 동기화 처리",
    "커스텀 원형 타이머 UI 설계",
    "Firebase 연동을 고려한 데이터 저장 구조 설계",
  ],
  architecture: [
    "홈 화면, 플래너 화면, 타이머 화면을 기능 단위로 분리",
    "일정 데이터와 타이머 상태를 화면별로 관리하는 구조 설계",
    "사용자 루틴 데이터를 기반으로 화면에 필요한 정보를 표시하는 흐름 구성",
  ],
  troubleshooting: [
    {
      issue: "타이머 진행 상태를 텍스트만으로 표현하면 직관성이 떨어졌습니다.",
      solution: "원형 그래픽 UI를 적용해 남은 시간을 시각적으로 표현했습니다.",
      result:
        "사용자가 집중 상태와 남은 시간을 빠르게 인지할 수 있도록 개선했습니다.",
    },
    {
      issue: "플래너 화면에 많은 정보를 넣으면 화면이 복잡해졌습니다.",
      solution: "오늘의 목표, 일정, 루틴을 우선순위에 따라 구분했습니다.",
      result: "핵심 정보를 중심으로 화면 피로도를 줄였습니다.",
    },
  ],
  performance: [
    "화면별 역할을 분리해 유지보수성을 높였습니다.",
    "반복되는 일정 UI 구조를 재사용 가능한 형태로 설계했습니다.",
    "필요한 정보만 화면에 노출해 사용자의 인지 부담을 줄였습니다.",
  ],
  collaboration: [
    "팀 프로젝트 저장소가 private으로 관리되어 코드 및 배포 링크는 공개하지 않음",
    "Figma를 활용해 모바일 화면 구조를 먼저 설계하고 팀원과 화면 흐름을 공유",
    "Android Studio 환경에서 Kotlin 기반 구현 진행",
    "담당 화면의 UI 구조와 사용자 입력 흐름을 중심으로 구현 내용을 정리",
  ],
  screenshots: [
    {
      src: img1,
      alt: "Meta Planner 타이머 화면",
      caption: "타이머 화면",
    },
    {
      src: img2,
      alt: "Meta Planner 플래너 화면",
      caption: "플래너 화면",
    },
  ],
  learnings: [
    "생산성 앱에서는 많은 기능보다 사용자가 바로 실행할 수 있는 단순한 흐름이 중요하다는 점을 배웠습니다.",
    "타이머처럼 상태가 계속 변하는 기능은 UI와 상태 동기화 구조가 중요하다는 점을 경험했습니다.",
    "사용자 루틴을 다루는 서비스에서는 정보 우선순위와 반복 사용성을 함께 고려해야 한다는 점을 배웠습니다.",
  ],
  retrospective: [
    "초기에는 화면 구성에 집중했지만, 이후 상태 관리와 데이터 저장 구조까지 고려해야 실제 앱으로 확장할 수 있다는 점을 배웠습니다.",
    "저장소와 배포 링크를 공개하기 어려운 프로젝트일수록 담당 범위, 구현 흐름, 트러블슈팅을 구체적으로 기록하는 것이 중요하다는 점을 느꼈습니다.",
    "앞으로는 타이머 기록 저장, 통계 화면, 사용자별 루틴 분석 기능까지 확장해보고자 합니다.",
  ],
  image1: img1,
  image2: img2,
};

export default function ProjectDetailMetaPlanner() {
  return <ProjectDetail {...metaPlannerData} />;
}
