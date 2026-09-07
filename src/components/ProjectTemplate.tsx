import { X } from "lucide-react";

interface ProjectTemplateProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function ProjectTemplate({
  onClose,
  children,
}: ProjectTemplateProps) {
  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="프로젝트 상세 정보"
    >
      <div className="project-modal-scroll">
        <section className="project-modal-positioner">
          <div
            className="project-modal-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-modal-close">
              <button
                onClick={onClose}
                className="page-delete flex items-center justify-center"
                aria-label="상세 페이지 닫기"
              >
                <X
                  size={34}
                  strokeWidth={2.4}
                  className="text-white"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="project-modal-content">{children}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
