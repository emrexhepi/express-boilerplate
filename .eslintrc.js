module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  rules: {
    "no-nested-ternary": 0,
    "no-param-reassign": 0,
    "no-underscore-dangle": 0,
    "no-console": 0,
    "no-unused-expressions": 0,
    "no-alert": 0,
    "no-script-url": 0,
    "comma-dangle": 0,  // not sure why airbnb turned this on. gross!
    "indent": ["error", 4, {"ignoredNodes": ["JSXElement"]}],
    "id-length": 0,
    "global-require": 0,
    "max-len": 0,
    "prefer-template": 0,
    "arrow-parens": 0,
    "function-paren-newline": 0,
    "import/no-extraneous-dependencies": 0,
    "import/newline-after-import": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 2,
    "import/no-named-as-default": 0,
    "no-var": 0,
  },
};
