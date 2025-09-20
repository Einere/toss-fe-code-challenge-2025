import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // tailwind 플러그인 추가
    tailwindcss(),
  ],
});
