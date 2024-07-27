import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
    rules: {
      semi: ["error", "never"], // 禁止使用分号
      quotes: ["error", "single"], // 强制使用单引号
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
