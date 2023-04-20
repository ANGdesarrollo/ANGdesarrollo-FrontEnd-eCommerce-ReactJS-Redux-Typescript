module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": 'tsconfig.json',
        "tsconfigRootDir": '.',
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'object-curly-spacing': ['error', 'always']
    }
}
