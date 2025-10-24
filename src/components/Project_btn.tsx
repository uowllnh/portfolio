import { useMemo} from "react";

type Tab = "personal" | "team";

type Project = {
  id: string;
  title: string;
  desc: string;
  type: Tab;
  href?: string;
};

const PROJECTS: Project[] = [
  { id: "yoring",       title: "Yoring",       desc: "스마트폰 요금제 추천 앱",    type: "team" },
  { id: "metaplanner",  title: "Meta Planner", desc: "뽀모도로 기반 일정관리 앱",  type:  "team"},
  { id: "storykid",     title: "StoryKid",     desc: "AI 동화 생성 웹 서비스",     type: "team" },
  { id: "uxlab",        title: "Portfolio Site",       desc: "포트폴리오 웹 사이트",     type: "personal" },
];

export default function Projects({ selected }: { selected: Tab }) {
  const list = useMemo(() => PROJECTS.filter(p => p.type === selected), [selected]);

  if (list.length === 0) {
    return <section className="py-8 text-center text-gray-400">표시할 프로젝트가 없습니다.</section>;
  }

return (
  <section 
  className="relative flex h-[800px] w-[760px] left-[25%]">
    {/* 래퍼만 위치 지정 */}
    <div className="scroll-container px-14">
    
  
    {list.map(p => (
      <section>
      <div className="project-btn top-[40%]">
      <div className="project-btn-txt"> 
      <h1 className="text-3xl font-semibold">{p.title}</h1> 
      <h2 className="text-2xl">{p.desc}</h2> </div>
     </div>
       </section>
    ))}

</div>

  </section>
);
}
