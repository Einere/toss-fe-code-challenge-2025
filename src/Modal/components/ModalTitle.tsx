import React, { type PropsWithChildren } from "react";

type ModalTitleProps = {
  id: string;
};
export function ModalTitle(props: PropsWithChildren<ModalTitleProps>) {
  const { id, children } = props;

  return (
    <h1 id={id} role="heading" className="mb-4">
      {children}
    </h1>
  );
}
