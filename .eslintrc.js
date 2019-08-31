module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    'cypress/globals': true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/vue'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'cypress'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': [2, { ignore: ['children'] }],
    semi: ['error', 'never']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
