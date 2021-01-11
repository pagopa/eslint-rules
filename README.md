# PagoPA ESLint config

This package provide the following ESLint custom rules for Typescript projects.

- `recommendend`
- `react`
- `strong`

This repository replace [italia-tslint-rules](https://github.com/pagopa/io-tslint-rules) after TSLint deprecation.

The following TSLint rules (included inside `italia-tslint-rules`) are not supported for eslint at the moment and are missing in this package:
```
bool-param-default
max-union-size
no-accessor-field-mismatch
no-array-delete // Mitigated by no-delete
no-case-with-or
no-dead-store
no-duplicate-in-composite
no-empty-array
no-extra-semicolon // Mitigated by prettier
no-empty-destructuring // Mititgated by no-empty-pattern
no-gratuitous-expressions
no-hardcoded-credentials
no-ignored-initial-value // Mitigated by no-param-reassign, no-let
no-in-misuse
no-inferred-empty-object-type
no-invalid-await // Mititgated by await-thenable
no-invariant-return
no-misleading-array-reverse // Mitigated by immutable-data
no-misspelled-operator // Mitigated by prettier
no-nested-switch
no-nested-template-literals
no-statements-same-line // Mitigated by prettier
no-try-promise
no-tslint-disable-all
no-unconditional-jump
no-undefined-argument
no-unenclosed-multiline-block // Mitigated by prettier
no-unthrown-error
no-unused-array // Mitigated by no-unused-vars
no-useless-increment
no-useless-intersection
prefer-promise-shorthand
promise-must-complete
use-primitive-type
```

## Usage

### Installation and Configuration

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

Add inside the `package.json` file a `lint` and optionally a `lint-autofix` script as:

```
"scripts": {
  "lint": "eslint . -c .eslintrc.js --ext .ts,.tsx",
  "lint-autofix": "eslint . -c .eslintrc.js --ext .ts,.tsx --fix",
  ...
}
```

### Migration from TSLint

Remove from the `package.json` every tslint reference:

- `tslint`
- `italia-tslint-rules`

Replace all the `// tslint:disable-next-line` with the proper `// eslint-disable-next-line` comment. If are present some `// tslint:disable` replace it with `/* eslint-disable */` at the top of the file.

If you need to disable ESLint for some files create `.eslintignore` file with the list of folders or files that must be excluded from lint process. Copy the exclusion from `tslint.json` `linterOptions.exclude`

Delete all tslint related files (es. `tslint.json`).

Run `yarn lint-autofix` to refactorize the code automatically with all the auto-fixable ESLint rules.