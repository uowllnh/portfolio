type Tab = "personal" | "team";

type ProjectButtonProps = {
  id: string;
  title: string;
  desc: string;
  type: Tab;
  href?: string;
  onClick: (id: string) => void;
};

export default function ProjectButton({
  id,
  title,
  desc,
  onClick,
}: ProjectButtonProps) {
  return (
    <article className="project-card-wrap">
      <button
        type="button"
        onClick={() => onClick(id)}
        className="project-btn"
        aria-label={`${title} 프로젝트 상세 보기`}
      >
        <span className="project-btn-txt">
          <strong className="project-card-title">{title}</strong>
          <span className="project-card-description">{desc}</span>
        </span>
      </button>
    </article>
  );
}
