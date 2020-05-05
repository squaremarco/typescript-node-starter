module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: './tsconfig.json'
    },
    env: {
        node: true,
        jest: true
    },
    plugins: ['@typescript-eslint', 'eslint-comments', 'import', 'jest', 'promise', 'unicorn'],
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jest/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    rules: {
        'no-prototype-builtins': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            { allowExpressions: true, allowTypedFunctionExpressions: true }
        ],
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false, classes: true, variables: true, typedefs: true }
        ],
        'unicorn/prevent-abbreviations': 'off'
    }
};
