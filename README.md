# PagoPA ESLint config

This package provide the following ESLint custom rules for Typescript projects.

- `recommendend`
- `react`
- `strong`

This repository replace [italia-tslint-rules](https://github.com/pagopa/io-tslint-rules) after TSLint deprecation.

## Usage

To use this package install as devDependecy inside any typescript project with

```
yarn install -D @pagopa/eslint-config
```

Create on the project an `.eslintrc.js` file with the following content

```
module.exports = {
  "extends": [
    "@pagopa/eslint-config/strong",
  ],
  "rules": {
    // Any project level custom rule
  }
}
```

Add inside the `package.json` file a `lint` script as:

```
"scripts": {
  "lint": "eslint . -c .eslintrc.js --ext .ts,.tsx",
  ...
}
```
