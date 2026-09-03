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
    <section className="snap-start shrink-0 flex">
      <div className="flex w-[full] justify-center">
        <div onClick={() => onClick(id)} className="project-btn top-[40%]">
          <div className="project-btn-txt">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <h2 className="text-2xl">{desc}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
