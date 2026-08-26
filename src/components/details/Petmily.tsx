import ProjectDetail from "../ProjectDetail";
import cover from "../../assets/image/petmily_Cover.png";
import IMG1 from "../../assets/image/pet1.png";
import IMG2 from "../../assets/image/pet2.png";
import IMG3 from "../../assets/image/pet3.png";
import IMG4 from "../../assets/image/pet4.png";
import IMG5 from "../../assets/image/pet5.png";
import type { ProjectProps } from "../ProjectDetail";

export const petMilyData: ProjectProps = {
  title: "펫밀리",
  description: "반려동물의 산책과 건강기록 및 관리 앱",
  member: "팀 프로젝트",
  url: "https://wedding-project-uowllnh.web.app/",
  detail:
    "반려동물의 건강과 일상을 한곳에서 관리할 수 있는 반려동물 라이프케어 앱입니다. 반려동물 정보를 기반으로 산책 기록, 예방접종 일정, 건강 관리 등 필요한 정보를 편리하게 기록하고 확인할 수 있도록 설계했습니다.",
  period: "2026.07",
  stack: ["Kotlin", "Dart", "FireBase", "Figma", "GitHub"],
  myRoles: [
    "화면 흐름 설계",
    "상태 관리 및 라우팅",
    "반려동물 정보 관리",
    "공통 위젯 및 컴포넌트 설계",
  ],
  features: [
    "반려동물 프로필 관리",
    "예방접종 일정 관리",
    "반려동물 건강 정보 관리",
    "장소 및 교통 정보 안내",
  ],
  problemPoints: [
    "반려동물의 산책 기록이 단순 정보 나열 방식이 아닌, 한눈에 보기 쉬워야 했습니다.",
    "반려동물의 종 (고양이 혹은 강아지)에 따라 필요한 예방접종을 알려주고, 날짜를 기록하여 관리를 편리하게 할 수 있도록 해야 했습니다.",
    "반려동물의 건강 정보 (몸무게, 건강검진 내역 등)을 번거로운 과정 없이 필요한 정보만 바로 입력할 수 있게 해야 했습니다.",
  ],
  technicalDetails: [
    "Flutter와 Dart 기반의 크로스플랫폼 앱 UI 구현",
    "공통 Widget을 분리하여 UI 재사용성과 유지보수성 개선",
    "반려동물 프로필·산책·예방접종 데이터를 기능별로 분리해 관리",
    "Firebase 연동을 고려한 데이터 관리 구조 설계",
  ],
  improvements: [
    {
      title: "공통 위젯을 활용한 UI 구조 개선",
      before:
        "화면마다 유사한 UI 요소를 개별적으로 구현하면 디자인 변경 시 여러 화면을 반복해서 수정해야 하는 문제가 있었습니다.",
      after:
        "반복적으로 사용되는 버튼, 입력 영역 등의 UI 요소를 공통 Widget으로 분리해 재사용할 수 있도록 구성했습니다.",
      result:
        "중복된 UI 코드를 줄이고 화면 간 디자인 일관성과 유지보수성을 높였습니다.",
    },
    {
      title: "기능별 화면 구조 분리",
      before:
        "반려동물 정보, 산책 기록, 건강 관리 등 서로 다른 기능이 함께 구성되면 화면의 목적과 정보 구조가 복잡해질 수 있었습니다.",
      after:
        "반려동물 관리 기능을 목적에 따라 화면 단위로 구분하고 각 화면에서 필요한 정보에 집중할 수 있도록 구성했습니다.",
      result:
        "기능별 정보 탐색이 쉬워지고 이후 새로운 관리 기능을 추가하기 용이한 화면 구조를 만들었습니다.",
    },
    {
      title: "산책 기록 정보 시각화 개선",
      before:
        "산책 기록을 단순한 텍스트 정보로 제공하면 사용자가 이전 산책 내용을 빠르게 파악하기 어려울 수 있었습니다.",
      after:
        "산책 관련 정보를 항목별로 구분하고, 코스를 시각화하여 기록을 한눈에 확인할 수 있도록 UI를 구성했습니다.",
      result:
        "사용자가 산책 기록을 보다 직관적으로 확인하고 이전 활동을 쉽게 비교할 수 있도록 개선했습니다.",
    },
  ],
  troubleshooting: [
    {
      issue:
        "Firebase Console에서 직접 수정한 Firestore Security Rules가 협업 과정에서 사라지는 문제가 발생했습니다. 확인 결과, 로컬 프로젝트의 Rules와 Console의 Rules가 동기화되지 않은 상태에서 다른 팀원의 설정이 배포되면서 기존 규칙이 덮어써진 것으로 판단했습니다.",
      solution:
        "Console에서 개별적으로 관리하던 Security Rules를 로컬 프로젝트의 규칙 파일을 기준으로 관리하도록 정리하고, 팀원 간 동일한 Rules를 공유한 뒤 배포하도록 작업 방식을 변경했습니다.",
      result:
        "개발자마다 서로 다른 Security Rules를 사용하는 문제를 방지하고, 규칙 변경 이력을 코드와 함께 관리할 수 있도록 개선하여 협업 과정에서 발생할 수 있는 설정 충돌을 줄였습니다.",
    },
    {
      issue:
        "몸무게 기록을 그래프로 표시할 때 Y축 범위와 단위가 고정되어 있어, 변화 폭이 작은 경우 그래프가 거의 평평하게 보이거나 기록 범위에 따라 변화 추이를 직관적으로 파악하기 어려운 문제가 있었습니다.",
      solution:
        "저장된 몸무게 기록의 최솟값과 최댓값을 기준으로 데이터 범위를 계산하고, 변화 폭에 따라 Y축의 표시 범위와 간격이 동적으로 결정되도록 그래프 로직을 수정했습니다.",
      result:
        "몸무게 기록의 범위가 달라져도 데이터에 적합한 축 범위가 자동으로 적용되어 작은 몸무게 변화도 그래프에서 보다 명확하게 확인할 수 있도록 개선했습니다.",
    },
  ],
  screenshots: [
    {
      src: IMG1,
      alt: "모바일 청첩장 메인 이미지",
      caption: "모바일 청첩장 메인 이미지",
    },
    {
      src: IMG2,
      alt: "연락처 및 인사",
      caption: "연락처 및 인사",
    },
    {
      src: IMG3,
      alt: "결혼식 날짜 카운트",
      caption: "결혼식 날짜 카운트",
    },
    {
      src: IMG4,
      alt: "오시는길 안내 및 네이버 지도 연동",
      caption: "오시는길 안내 및 네이버 지도 연동",
    },
    {
      src: IMG5,
      alt: "네비게이션 모바일 앱 연결 및 대중교통",
      caption: "네비게이션 모바일 앱 연결 및 대중교통",
    },
  ],
  learnings: [
    "Firebase Security Rules 덮어쓰기 문제를 경험하며, 협업에서는 Console에서 직접 수정하는 것보다 설정 파일을 프로젝트와 함께 관리하고 팀원 간 동일한 환경을 유지하는 것이 중요하다는 점을 배웠습니다.",
    "몸무게 그래프를 구현하며 고정된 UI만 고려하는 것이 아니라 실제 데이터의 범위와 변화에 따라 화면이 유연하게 대응해야 사용자가 정보를 더 명확하게 이해할 수 있다는 점을 배웠습니다.",
    "사용자가 변화와 정보를 쉽게 파악할 수 있는 형태로 가공하고 표현하는 과정도 프론트엔드 개발의 중요한 부분임을 경험했습니다.",
  ],
  image1: cover,
};

export default function ProjectDetailPetMilyData() {
  return <ProjectDetail {...petMilyData} />;
}
