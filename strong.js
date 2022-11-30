/* eslint-disable */
module.exports = {
  extends: "./recommended.js",
  plugins: ["eslint-plugin-jsdoc", "eslint-plugin-prefer-arrow", "extra-rules", "fp"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Object: {
            message: "Avoid using the `Object` type. Did you mean `object`?",
          },
          Function: {
            message: "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
          },
          Boolean: {
            message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
          },
          Number: {
            message: "Avoid using the `Number` type. Did you mean `number`?",
          },
          String: {
            message: "Avoid using the `String` type. Did you mean `string`?",
          },
          Symbol: {
            message: "Avoid using the `Symbol` type. Did you mean `symbol`?",
          },
        },
      },
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          constructors: "no-public",
        },
      },
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["PascalCase", "camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "property",
        format: ["PascalCase", "camelCase", "UPPER_CASE", "snake_case"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
    ],
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        path: "always",
        types: "prefer-import",
        lib: "always",
      },
    ],
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined",
    ],
    "jsdoc/check-alignment": "error",
    "jsdoc/newline-after-description": "error",
    "prefer-arrow/prefer-arrow-functions": "error",
    "no-shadow": "off",
    "no-invalid-this": "error",
    "id-match": "error",
    "constructor-super": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
            allowExpressions: true
        }
    ],
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        hoist: "all",
      },
    ],
    "sort-keys": "error",
    "extra-rules/no-commented-out-code": "error",
    "no-useless-return": "error",
    "no-multi-str": "error",
    "max-params": ["error", 5],
    "default-case": "error",
    "functional/prefer-readonly-type": "error",
    "functional/no-method-signature": "error",
    "fp/no-delete": "error",
  },
};
