// ProjectSection.tsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProjectButton from "./ProjectButton";
import ProjectTemplate from "./ProjectTemplate";
import ProjectDetail from "./ProjectDetail";
import { fetchProjects, localProjects } from "../api/seedProject";

type Tab = "personal" | "team";

export default function ProjectSection({ selected }: { selected: Tab }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const {
    data: projects = localProjects,
    error,
    isError,
    isFetching,
    isPlaceholderData,
    isSuccess,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    placeholderData: localProjects,
    retry: 1,
  });

  const filteredProjects = projects.filter(
    (project) => project.category === selected,
  );
  const selectedProject = projects.find((project) => project.id === selectedId);
  const dataStatus = isError
    ? `Firebase  실패: ${error instanceof Error ? error.message : ""}`
    : isFetching && isPlaceholderData
      ? ""
      : isSuccess && !isPlaceholderData
        ? ""
        : "";

  const handleClick = (id: string) => {
    setSelectedId(id);
  };

  const handleClose = () => {
    setSelectedId(null);
  };

  return (
    <section className="flex relative ml-[300px]">
      <section className="section-scroll">
        <div className="scroll-container">
          {filteredProjects.map((project) => (
            <ProjectButton
              key={project.id}
              id={project.id}
              title={project.title}
              desc={project.description}
              onClick={handleClick}
              type={project.category}
            />
          ))}
        </div>
        {dataStatus && (
          <p className="mt-[16px] text-[14px] text-white">{dataStatus}</p>
        )}
      </section>

      {/* ✅ 상세보기 (선택 시만 보임) */}
      {selectedProject && (
        <ProjectTemplate onClose={handleClose}>
          <ProjectDetail {...selectedProject} />
        </ProjectTemplate>
      )}
    </section>
  );
}
