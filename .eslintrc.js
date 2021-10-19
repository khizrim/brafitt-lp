module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier",
    "prettier/react"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/state-in-constructor": "off"
  },
};
