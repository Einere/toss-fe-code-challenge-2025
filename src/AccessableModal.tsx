import React, { useRef, useEffect, type PropsWithChildren } from "react";

interface AccessibleModalProps {
  titleId: string;
  onClose: (data: any | null) => void;
}

export function AccessibleModal({
  titleId,
  onClose,
  children,
}: PropsWithChildren<AccessibleModalProps>) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 모달 내 제목 요소에 포커스 주기
    if (modalRef.current) {
      const heading =
        modalRef.current.querySelector<HTMLDivElement>("[role='heading']");

      if (heading) {
        heading.focus();
        console.log("focus!");
      }

      // 모달 바깥 요소 스크롤 방지
      document.body.classList.add("overflow-hidden");
    }
  }, []);

  return (
    <div
      className="modal-overlay"
      // 오버레이 영역 클릭 시, 모달 닫기
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          console.log("close by clicking overaly!");
          onClose(null);
        }
      }}
      // ESC 키 다운 시, 모달 닫기
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose(null);
        }
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="modal-container"
      >
        {children}
      </div>
    </div>
  );
}
