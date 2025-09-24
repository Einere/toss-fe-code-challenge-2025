import type { FormInput } from "../types";
import { createRoot } from "react-dom/client";
import { AccessibleModal } from "./AccessableModal";
import { FormModalContent } from "./FormModalContent";

// TODO: 모달 컴포넌트를 인자로 받아서 렌더링하도록 수정
export const openFormModal = (
  element: HTMLButtonElement,
): Promise<FormInput | null> => {
  // 모달용 포탈 생성 + DOM에 붙이기
  const portalRoot =
    document.getElementById("modal-root") || document.createElement("div");
  if (!document.getElementById("modal-root")) {
    portalRoot.id = "modal-root";
    document.body.appendChild(portalRoot);
  }

  // 폼 모달의 결과 값을 해결
  return new Promise((resolve) => {
    const handleClose = (data: FormInput | null) => {
      resolve(data);

      // 모달용 포탈 제거 + 바깥 영역 스크롤 허용
      document.body.removeChild(portalRoot);
      document.body.classList.remove("overflow-hidden");

      // 클릭한 요소에 포커스 돌려주기
      element.focus();
    };

    // 폼 모달을 createRoot 를 이용해 렌더링.
    // createPortal 은 JSX 영역에서만 동작하는 듯.
    createRoot(portalRoot).render(
      <AccessibleModal
        titleId="modal-title-id"
        descriptionId="modal-desc-id"
        onClose={handleClose}
      >
        <FormModalContent
          titleId="modal-title-id"
          descriptionId="modal-desc-id"
          onClose={handleClose}
        />
      </AccessibleModal>,
    );
  });
};
