import "modern-normalize";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ModalFormPage } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalFormPage />
  </StrictMode>,
);

document.body.addEventListener("keydown", (e) => {
  console.log(e.currentTarget);
});
