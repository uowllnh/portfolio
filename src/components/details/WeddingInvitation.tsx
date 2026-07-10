import ProjectDetail from "../ProjectDetail";
import cover from "../../assets/image/wedding_invitation_cover.svg";
import type { ProjectProps } from "../ProjectDetail";

export const weddingInvitationData: ProjectProps = {
  title: "모바일 청첩장",
  description: "예식 정보와 참석 안내를 한 화면 흐름으로 정리한 모바일 웹 청첩장",
  member: "개인 프로젝트",
  detail:
    "모바일에서 자연스럽게 읽히는 청첩장 경험을 목표로 제작한 웹 프로젝트입니다. 초대 문구, 예식 정보, 갤러리, 오시는 길, 참석 안내처럼 하객이 실제로 확인하는 정보를 우선순위에 맞춰 배치하고, 작은 화면에서도 문장과 버튼이 안정적으로 보이도록 구성했습니다.",
  period: "2025",
  stack: ["React", "TypeScript", "Tailwind", "Vite", "Figma", "GitHub"],
  myRoles: [
    "모바일 청첩장 화면 흐름 설계",
    "초대 문구와 예식 정보 섹션 구성",
    "반응형 웹 UI 구현",
    "갤러리 및 안내 정보 컴포넌트화",
    "배포 환경 구성 및 링크 공유 흐름 정리",
  ],
  features: [
    "초대 인사와 예식 정보 안내",
    "사진 갤러리 섹션",
    "장소 및 교통 정보 안내",
    "계좌 및 연락처 정보 확인",
    "모바일 중심 반응형 레이아웃",
  ],
  problemPoints: [
    "청첩장은 감성적인 분위기와 정보 전달이 함께 필요해 화면의 밀도 조절이 중요했습니다.",
    "하객이 가장 많이 찾는 날짜, 시간, 장소 정보가 빠르게 보여야 했습니다.",
    "모바일 화면에서 긴 문구와 이미지가 이어질 때 읽기 흐름이 끊기지 않도록 해야 했습니다.",
  ],
  technicalDetails: [
    "React 컴포넌트 단위로 섹션을 분리해 유지보수하기 쉬운 구조로 구현",
    "TypeScript로 프로젝트 데이터와 화면 props의 타입 안정성 확보",
    "TailwindCSS를 활용해 모바일 우선 레이아웃과 간격 시스템 구성",
    "반복되는 안내 항목을 데이터 기반으로 렌더링하도록 설계",
  ],
  improvements: [
    {
      title: "정보 우선순위 정리",
      before: "예식 정보, 사진, 안내 문구가 단순히 이어지면 사용자가 필요한 정보를 찾기 어려웠습니다.",
      after: "초대 인사, 일정, 장소, 갤러리, 안내 정보 순서로 흐름을 재정리했습니다.",
      result: "하객이 감성적인 분위기를 느끼면서도 필요한 정보를 빠르게 확인할 수 있도록 개선했습니다.",
      image: {
        src: cover,
        alt: "모바일 청첩장 대표 화면",
        caption: "청첩장 화면 구성",
      },
    },
  ],
  screenshots: [
    {
      src: cover,
      alt: "모바일 청첩장 대표 이미지",
      caption: "모바일 청첩장 대표 이미지",
    },
  ],
  learnings: [
    "모바일 웹에서는 정보의 순서와 여백이 사용자 경험을 크게 좌우한다는 점을 배웠습니다.",
    "감성적인 디자인에서도 버튼, 날짜, 장소처럼 실제 행동으로 이어지는 정보는 명확해야 한다는 점을 경험했습니다.",
    "정적인 콘텐츠도 컴포넌트와 데이터 구조를 분리하면 수정과 재사용이 쉬워진다는 점을 확인했습니다.",
  ],
  retrospective: [
    "단순한 소개 페이지처럼 보이는 프로젝트일수록 사용자의 실제 확인 흐름을 세심하게 설계해야 한다는 점을 느꼈습니다.",
    "향후에는 참석 여부 응답, 지도 API, 이미지 최적화까지 연결해 더 완성도 높은 청첩장 서비스로 확장하고 싶습니다.",
  ],
  image1: cover,
};

export default function ProjectDetailWeddingInvitation() {
  return <ProjectDetail {...weddingInvitationData} />;
}
