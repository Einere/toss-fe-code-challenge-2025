import { openFormModal } from "./ModalManager";

const ModalFormPage = () => {
  /* 여기에 구현해 주세요 */
  async function openFormModalAndGetFormValues() {
    const formValues = await openFormModal();

    console.log("form values!", formValues);
  }
  return (
    <div>
      <div className="h-[800px] bg-amber-300"></div>
      <button type="button" onClick={openFormModalAndGetFormValues}>
        신청 폼 작성하기
      </button>
      <div className="h-[800px] bg-amber-300"></div>
    </div>
  );
};

export default ModalFormPage;
