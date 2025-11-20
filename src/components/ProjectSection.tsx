// ProjectSection.tsx
import { useState } from "react";
import { useMemo} from "react";
import ProjectButton from "./ProjectButton";
import ProjectTemplate from "./ProjectTemplate";
import ProjectDetailYoring from "./details/Yoring";
import ProjectDetailStoryKid from "./details/StoryKid";
import ProjectDetailMetaPlanner from "./details/MetaPlanner";
import ProjectDetailPortfolio from "./details/Portfolio";


type Tab = "personal" | "team";



export default function ProjectSection ({ selected }: { selected: Tab }) {

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setSelectedId(id);
  };

  const handleClose = () => {
    setSelectedId(null);
  };

  return (
    <section className="flex relative ml-[300px]">
      <section className="section-scroll"> 
{/* 래퍼만 위치 지정 */} 
            {/* ✅ 프로젝트 버튼들 */}
            {selected === "team" &&  
            <div className="scroll-container" > 
            <ProjectButton id="yoring" title="Yoring" desc="요금제 추천 앱" onClick={handleClick} type="team" /> 
              <ProjectButton id="storykid" title="StoryKid" desc="AI 동화 생성" onClick={handleClick} type="team" />
              <ProjectButton id="metaplanner" title="Meta Planner" desc="메타플래너" onClick={handleClick} type="team"/>
            </div>}
            {selected === "personal" &&  
            <div className="scroll-container"> 
              <ProjectButton id="portfolio" title="Portfolio Site" desc="웹 포트폴리오" onClick={handleClick} type="personal" />
              </div>}
        </section>


      {/* ✅ 상세보기 (선택 시만 보임) */}
      {selectedId && (
        <ProjectTemplate onClose={handleClose}>
          {selectedId === "yoring" && <ProjectDetailYoring />}
          {selectedId === "storykid" && <ProjectDetailStoryKid />}
          {selectedId === "metaplanner" && <ProjectDetailMetaPlanner />}
          {selectedId === "portfolio" && <ProjectDetailPortfolio />}
        </ProjectTemplate>
      )}
    </section>
  );
}
