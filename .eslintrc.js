module.exports = {
    env: { es6: true, node: true },
    extends: [ 'airbnb-base', 'prettier' ],
    plugins: [ 'prettier' ],
    globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
    parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
    rules: {
        "quotes": "off",
        "camelcase": "off",
        "indent": ["error", 4],
        "no-param-reassing": "off",
        "prettier/prettier": "error",
        "class-methods-user-this": "off",
        "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
    },
};
