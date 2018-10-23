module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  plugins: ['flowtype', 'sort-imports-es6-autofix'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'function-paren-newline': ['error', 'consistent'],
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': ['error', 120],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'never'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none']
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.js', '**/webpack.config.js']
      }
    ]
  }
}
