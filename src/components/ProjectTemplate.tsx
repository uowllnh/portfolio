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
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/40"
      onClick={onClose}
    >
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory ">
        <section className=" flex justify-center items-center z-10">
          <div
            className="w-[1150px] flex flex-col  bg-[#545454E6] rounded-[25px] items-center text-white mt-[100px] mb-[70px] mx-[100px] shadow-[12px_14px_70px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center z-0 mt-[25px] ml-[1000px]">
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
            <div className="clear-both z-20">{children}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
