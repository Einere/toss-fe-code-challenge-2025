import React, { useRef, useEffect, type PropsWithChildren } from "react";
import type { BaseModalProps } from "../types";

// TODO: 모달 내 포커스 트랩 구현하기
type AccessibleModalProps = BaseModalProps;
export function AccessibleModal({
  titleId,
  descriptionId,
  onClose,
  children,
}: PropsWithChildren<AccessibleModalProps>) {
  const modalRef = useRef<HTMLDivElement>(null);

  // 모달 자체에 포커스.
  // 보이스오버가 모달 내 타이틀에 포커스를 주는 것에 비해, 더 많은 맥락을 제공함.
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();

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
    document.body.addEventListener("keyup", closeModalOnEsc);

    return () => {
      document.body.removeEventListener("keyup", closeModalOnEsc);
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
        // NOTE: 스크린 리더가 모달에 대한 내용을 읽어주기 위해서는 포커스가 가야 함.
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
}
