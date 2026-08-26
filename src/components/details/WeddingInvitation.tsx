import ProjectDetail from "../ProjectDetail";
import cover from "../../assets/image/wedding_invitation_cover.png";
import image1 from "../../assets/image/weddingImage1.png";
import image2 from "../../assets/image/weddingImage2.png";
import image3 from "../../assets/image/weddingImage3.png";
import IMG1 from "../../assets/image/wedding/1.png";
import IMG2 from "../../assets/image/wedding/2.png";
import IMG3 from "../../assets/image/wedding/3.png";
import IMG4 from "../../assets/image/wedding/4.png";
import IMG5 from "../../assets/image/wedding/5.png";
import IMG6 from "../../assets/image/wedding/6.png";
import IMG7 from "../../assets/image/wedding/7.png";
import type { ProjectProps } from "../ProjectDetail";

export const weddingInvitationData: ProjectProps = {
  title: "모바일 청첩장",
  description: "예식 정보와 참석 안내를 정리한 모바일 청첩장",
  member: "개인 프로젝트",
  url: "https://wedding-project-uowllnh.web.app/",
  detail:
    "모바일에서 자연스럽게 읽히는 청첩장 경험을 목표로 제작한 웹 프로젝트입니다. 초대 문구, 예식 정보, 갤러리, 오시는 길, 참석 안내처럼 하객이 실제로 확인하는 정보를 우선순위에 맞춰 배치하고, 작은 화면에서도 문장과 버튼이 안정적으로 보이도록 구성했습니다.",
  period: "2026.07",
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
    "참석 여부 및 메시지 입력폼",
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
      title: "섹션 기반 컴포넌트 구조 개선",
      before:
        "초대 문구, 예식 정보, 갤러리, 계좌 안내가 한 흐름에 직접 배치되면 섹션이 늘어날수록 수정 범위가 커지고 구조 파악이 어려워질 수 있었습니다.",
      after:
        "청첩장 화면을 역할별 섹션 컴포넌트로 나누고, 반복되는 안내 정보는 데이터 기반으로 렌더링되도록 정리했습니다.",
      result:
        "문구, 계좌, 갤러리처럼 변경 가능성이 높은 콘텐츠를 더 쉽게 수정할 수 있고, 기능 추가 시 영향 범위를 줄일 수 있도록 개선했습니다.",
      image: {
        src: image1,
        alt: "모바일 청첩장 섹션 이미지",
        caption: "청첩장 화면 구성",
      },
    },
    {
      title: "입력폼 상태 처리 개선",
      before:
        "참석 여부나 메시지 입력값을 화면 상태와 제출 로직에서 명확히 분리하지 않으면 누락 데이터 저장, 중복 제출, 완료 상태 표시 문제가 발생할 수 있었습니다.",
      after:
        "입력값 검증, 제출 중 상태, 저장 완료 상태를 나누어 Firebase 저장 요청 전후의 흐름을 명확히 설계했습니다.",
      result:
        "사용자 입력 데이터의 신뢰도를 높이고, 비동기 저장 과정에서도 사용자가 현재 상태를 이해할 수 있는 폼 구조로 개선했습니다.",
      image: {
        src: image2,
        alt: "모바일 청첩장 참석 의사 이미지",
        caption: "청첩장 입력 폼",
      },
    },
    {
      title: "모바일 인터랙션 안정화",
      before:
        "계좌 카드 스크롤, 섹션 메뉴 이동, 송금 버튼처럼 모바일에서 직접 조작하는 요소들이 화면 크기와 스크롤 위치에 따라 일관되지 않게 동작할 수 있었습니다.",
      after:
        "카드 단위 스크롤 기준, 섹션 id 기반 이동, 계좌 복사 및 송금 버튼 동작을 분리해 인터랙션별 책임을 명확히 정리했습니다.",
      result:
        "모바일 환경에서도 주요 조작이 예측 가능하게 동작하고, 사용자가 필요한 행동을 빠르게 수행할 수 있도록 안정성을 높였습니다.",
      image: {
        src: image3,
        alt: "모바일 청첩장 계좌",
        caption: "청첩장 계좌버튼",
      },
    },
  ],
  troubleshooting: [
    {
      issue:
        "계좌 안내 영역에서 여러 개의 계좌 카드를 넘길 때 카드 단위 스크롤이 적용되지 않아 중간 위치에 멈추는 문제가 있었습니다.",
      solution:
        "카드 리스트 컨테이너와 각 카드에 스크롤 스냅 기준을 분리해서 적용하고, 카드 폭과 간격을 고정해 한 번의 스와이프가 하나의 카드 이동으로 이어지도록 조정했습니다.",
      result:
        "모바일에서 계좌 카드를 넘길 때 화면이 어중간하게 걸리지 않고, 카드 단위로 안정적으로 탐색할 수 있게 개선했습니다.",
    },
    {
      issue:
        "카카오페이 자동 입력 송금 기능을 적용하기 위해 QR 링크 생성 API를 검토했지만, 해당 API가 사업자 대상 서비스라 개인 프로젝트에서 바로 사용할 수 없었습니다.",
      solution:
        "카카오페이 자동 입력 기능 대신 사용자가 직접 송금할 수 있는 계좌 송금 버튼과 계좌 정보 복사 흐름으로 대체했습니다.",
      result:
        "외부 API 권한 제약을 피하면서도 하객이 계좌 정보를 빠르게 확인하고 송금 앱으로 이동할 수 있는 현실적인 흐름을 제공했습니다.",
    },
    {
      issue:
        "아티클 형태의 섹션과 메뉴바를 함께 구성할 때 relative와 absolute 위치 기준이 섞여 메뉴바가 원하는 섹션 위치에 고정되지 않는 문제가 있었습니다.",
      solution:
        "각 스크롤 섹션에 고유 id를 부여하고, 메뉴 클릭 시 해당 id로 이동하도록 구성했습니다. 위치가 필요한 요소는 relative 부모 안에서 absolute 기준을 잡아 레이아웃 기준을 명확히 분리했습니다.",
      result:
        "메뉴바가 의도한 섹션 이동을 안정적으로 수행하고, 스크롤 기반 아티클 구조에서도 위치가 틀어지는 문제를 줄였습니다.",
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
    {
      src: IMG6,
      alt: "방명록",
      caption: "방명록",
    },
    {
      src: IMG7,
      alt: "계좌번호 버튼",
      caption: "계좌번호 버튼",
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
