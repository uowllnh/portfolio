interface ProjectTemplateProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function ProjectTemplate({ onClose, children }: ProjectTemplateProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="float-right rounded px-3 py-1 text-gray-500 hover:bg-gray-100"
        >
          닫기
        </button>
        <div className="clear-both">{children}</div>
      </div>
    </div>
  );
}
