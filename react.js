/* eslint-disable */
module.exports = {
  extends: "./recommended.js",
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-key": "error",
    "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
