import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";

export default tseslint.config([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        // prettier 를 포함한 플러그인 추가
        plugins: {
            prettier,
            react,
        },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
        },
        // 각종 커스텀 규칙 추가
        rules: {
            "prettier/prettier": "error",
            "react/jsx-curly-brace-presence": [
                "error",
                { props: "never", children: "never" },
            ],
        },
    },
    // prettier 와 충돌하는 규칙 해제
    eslintConfigPrettier,
]);
