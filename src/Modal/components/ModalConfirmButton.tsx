import React, { type PropsWithChildren } from "react";

type ModalConfirmButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  description: string;
  type?: "button" | "submit" | "reset";
};
export function ModalConfirmButton(
  props: PropsWithChildren<ModalConfirmButtonProps>,
) {
  const { onClick, description, type = "button", children } = props;

  return (
    <button
      type={type}
      className="button-primary"
      aria-description={description}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
