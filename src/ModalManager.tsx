import type { FormInput } from "./types";
import { createRoot } from "react-dom/client";
import { AccessibleModal } from "./AccessableModal";
import { FormModalContent } from "./FormModalContent";
import { createPortal } from "react-dom";

export const openFormModal = (): Promise<FormInput | null> => {
  // 모달 포탈 생성 + dom 에 붙이기
  const portalRoot =
    document.getElementById("modal-root") || document.createElement("div");
  if (!document.getElementById("modal-root")) {
    portalRoot.id = "modal-root";
    document.body.appendChild(portalRoot);
  }

  // 프로미스 리턴
  return new Promise((resolve) => {
    const handleClose = (data: FormInput | null) => {
      resolve(data);

      // 포탈 제거 + 오버플로우 히든 스타일 속성 제거
      document.body.removeChild(portalRoot);
      document.body.classList.remove("overflow-hidden");
    };

    // 폼 모달을 createRoot 를 이용해 렌더링
    // createPortal 은 JSX 영역에서만 동작하는 듯.
    createRoot(portalRoot).render(
      <AccessibleModal titleId="foo" onClose={handleClose}>
        <FormModalContent onClose={handleClose} />
      </AccessibleModal>,
    );
  });
};
