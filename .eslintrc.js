module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  rules: {
    'import/no-named-as-default': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'arrow-body-style': 0,
    'prefer-destructuring': 0,
    'react/no-danger': 0,
    'no-return-await': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': 0,
    'react/prefer-stateless-function': 0,
    'consistent-return': 0,
  },
};
