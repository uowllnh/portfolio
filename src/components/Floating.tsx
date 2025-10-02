// src/components/FloatingActions.tsx
import React from "react";
import feedbackIcon from "../assets/logos/feedback_btn.svg";  // 적당한 아이콘

export default function FloatingActions() {
  return (
    <div className="fab-wrap" aria-label="빠른 작업">
      {/* 피드백: 폼/노션/구글폼 링크로 연결하거나 모달을 열도록 */}
      <button
        className="fab-btn"
        type="button"
        aria-label="피드백 보내기"
        title="피드백 보내기"
        onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeHXTlbklEjcNaYYAidyQIG0iB41w5zTOcDsvJ3ScavYyDpcA/viewform?usp=dialog", "_blank")}
      >
        <img src={feedbackIcon} width={30} height={30} alt="" />
      </button>
    
    </div>
  );
}
