import { ModalTitle } from "./components/ModalTitle";
import { ModalConfirmButton } from "./components/ModalConfirmButton";
import { ModalCancelButton } from "./components/ModalCancelButton";

export * from "./openModal";

export const Modal = {
  Title: ModalTitle,
  ConfirmButton: ModalConfirmButton,
  CancelButton: ModalCancelButton,
} as const;
