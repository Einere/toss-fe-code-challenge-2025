import React, { useRef, useEffect, type PropsWithChildren } from "react";

interface AccessibleModalProps {
  titleId: string;
  descriptionId?: string;
  onClose: (data: any | null) => void;
}

export function AccessibleModal({
  titleId,
  descriptionId,
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
      }

      // 모달 바깥 요소 스크롤 방지
      document.body.classList.add("overflow-hidden");
    }
  }, []);

  // ESC 로 모달을 닫을 수 있도록 함
  useEffect(() => {
    function closeModalOnEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose(null);
      }
    }
    document.body.addEventListener("keydown", closeModalOnEsc);

    return () => {
      document.body.removeEventListener("keydown", closeModalOnEsc);
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      // 오버레이 영역 클릭 시, 모달 닫기
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose(null);
        }
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="modal-container"
      >
        {children}
      </div>
    </div>
  );
}
