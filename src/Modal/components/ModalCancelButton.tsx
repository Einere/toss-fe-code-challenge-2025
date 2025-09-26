import React, { type PropsWithChildren } from "react";

type ModalCancelButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  description: string;
};
export function ModalCancelButton(
  props: PropsWithChildren<ModalCancelButtonProps>,
) {
  const { onClick, description, children } = props;

  return (
    <button type="button" onClick={onClick} aria-description={description}>
      {children}
    </button>
  );
}
