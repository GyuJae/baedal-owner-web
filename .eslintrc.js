module.exports = {
  extends: ["next", "airbnb", "airbnb-typescript", "prettier", "plugin:unicorn/recommended"],
  plugins: ["unused-imports", "simple-import-sort"],
  parserOptions: {
    project: "./tsconfig.json",
    // tsconfigRootDir: __dirname,
  },

  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export˘": "off",
    "import/prefer-default-export": "warn",
    "react/jsx-props-no-spreading": "off",
    "no-unneeded-ternary": "off",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/no-extraneous-dependencies": ["off", { "devDependencies": false, "optionalDependencies": false, "peerDependencies": false }]
  },
}