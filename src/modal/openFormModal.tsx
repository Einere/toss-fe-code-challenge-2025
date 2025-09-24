import { openModal } from "./openModal";
import { FormModalContent } from "../components";

export const openFormModal = (trigger: HTMLButtonElement) =>
  openModal(
    { titleId: "form-modal-title", descriptionId: "form-modal-desc" },
    FormModalContent,
    trigger,
  );
