module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
  ],
  parserOptions: {
    ecmaVersion: "2017",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: ["babel", "react", "import", "prettier", "@typescript-eslint"],
  rules: {
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/named": "error",
    "prettier/prettier": "error",
    "react/no-typos": "error",
    "react/no-unused-state": "error",
    "react/jsx-no-bind": "error",
    "array-callback-return": "error",
    "consistent-return": "error",
    "babel/no-invalid-this": "error",
    "no-unused-vars": "off",
  },
  settings: {
    react: {
      pragma: "React",
      version: "15.0",
      flowVersion: "0.63.1",
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
    },
  },
};
