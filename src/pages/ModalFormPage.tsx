import { openModal } from "../Modal";
import { FormModalContent } from "../components";

const openFormModal = (trigger: HTMLButtonElement) =>
  openModal(
    { titleId: "form-modal-title", descriptionId: "form-modal-desc" },
    FormModalContent,
    trigger,
  );

export const ModalFormPage = () => {
  /* 여기에 구현해 주세요 */
  async function openFormModalAndGetFormValues(element: HTMLButtonElement) {
    const formValues = await openFormModal(element);

    console.log("form values!", formValues);
  }
  return (
    <div>
      <div className="h-[800px]"></div>
      <button
        type="button"
        onClick={(e) => openFormModalAndGetFormValues(e.currentTarget)}
        className="focus:text-red-500"
      >
        신청 폼 작성하기
      </button>
      <div className="h-[800px]"></div>
    </div>
  );
};
