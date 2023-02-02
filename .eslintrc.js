module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    quotes: ["warn", "double"],
    semi: [2, "always"],
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "multiline-ternary": ["warn", "always-multiline"],
    "no-unused-vars": ["warn", { vars: "all" }],
    camelcase: [
      "error",
      {
        allow: [
          "Montserrat_400Regular",
          "Montserrat_600SemiBold",
          "Montserrat_300Light",
          "Montserrat_700Bold",
          "new_pass",
          "rdv_id",
          /cl_*/
        ]
      }
    ]
  }
};
