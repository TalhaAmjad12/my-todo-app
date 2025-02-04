import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "airbnb",
    "plugin:prettier/recommended"
  ),
  {
    rules: {
      "no-else-return": "off",
      "no-alert": "off",
      "no-underscore-dangle": "off",
      "react/jsx-props-no-spreading": "off",
      "import/prefer-default-export": "off",
      "react/react-in-jsx-scope": "off",
      "import/extensions": "off",
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".jsx", ".tsx"] },
      ],
      "react/jsx-one-expression-per-line": "off",
      quotes: ["error", "double"], // Allow double quotes (adjust as needed)
      camelcase: "off", // Disable camelCase enforcement
      "prefer-const": "error",
      "no-var": "error",
      "padded-blocks": "off",
      "prettier/prettier": ["error", { singleQuote: false, semi: true }],
    },
  },
];

export default eslintConfig;
