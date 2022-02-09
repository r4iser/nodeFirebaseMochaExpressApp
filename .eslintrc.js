module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "prettier"
      ],
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    rules: {
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'jsx-quotes': ['error', 'prefer-single']
      }
}
