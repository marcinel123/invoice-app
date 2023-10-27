module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/explicit-function-return-type": 0,
		"react/function-component-definition": 0,
		"quotes": ["error", "double"],
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 3,
				"maxEOF": 0
			}
		],
		"no-console": [
			"error",
			{
				"allow": [""]
			}
		],
		"import/prefer-default-export": 0,
		"prettier/prettier": 0,
		"react/jsx-props-no-spreading": 0,
		"arrow-body-style": 0,
		"react/no-array-index-key": 0
  },
}
