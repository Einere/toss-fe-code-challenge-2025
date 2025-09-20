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

  // 1. UI/UX: 배경 스크롤 잠금
  // useLockBodyScroll();

  // 3. 포커스 흐름: Focus Trap 설정
  // 모달이 열릴 때 제목으로 포커스 이동 (useFocusTrap 내부에서 처리)
  // useFocusTrap(modalRef);

  useEffect(() => {
    if (modalRef.current) {
      const heading =
        modalRef.current.querySelector<HTMLDivElement>("[role='heading']");

      if (heading) {
        heading.focus();
        console.log("focus!");
      }

      document.body.classList.add("overflow-hidden");
    }
  }, []);

  return (
    <div
      className="modal-overlay"
      // 모달 닫기: Overlay 클릭
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          console.log("close by clicking overaly!");
          onClose(null);
        }
      }}
      // 모달 닫기: esc 키 다운
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose(null);
        }
      }}
      onScroll={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="modal-container"
        tabIndex={-1} // 포커스 이동을 위해 설정 (첫 포커스 요소로)
      >
        {children}
      </div>
    </div>
  );
}
