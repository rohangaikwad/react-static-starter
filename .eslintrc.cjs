module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["plugin:react/recommended", "plugin:import/errors", "plugin:import/warnings", "plugin:import/typescript", "airbnb"],
    overrides: [
        {
            files: ["*.jsx", "*.js"]
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    globals: { __DEV__: true },
    rules: {
        "comma-dangle": [0],
        "func-names": [0],
        "implicit-arrow-linebreak": [0],
        "import/extensions": [0],
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
        "import/no-cycle": [0],
        "import/no-unresolved": [2],
        indent: ["error", 4],
        "jsx-a11y/click-events-have-key-events": [0],
        "jsx-a11y/control-has-associated-label": [2, { labelAttributes: ["label"] }],
        "jsx-a11y/no-noninteractive-element-interactions": [0],
        "jsx-a11y/no-static-element-interactions": [0],
        "linebreak-style": ["error", "windows"],
        "max-len": [0],
        "no-console": [0],
        "no-plusplus": [0],
        "no-underscore-dangle": [0],
        "object-curly-newline": [0],
        "operator-linebreak": [0],
        "prefer-destructuring": ["error", { array: false, object: true }],
        quotes: [1, "double"],
        "react/function-component-definition": [0],
        "react/jsx-boolean-value": [0],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-one-expression-per-line": [0],
        "react/jsx-props-no-spreading": [0],
        "react/no-danger": [0],
        "react/prop-types": [0],
        "react/react-in-jsx-scope": [0],
        "wrap-iife": [0]
    },
    settings: {
        "import/resolver": {
            alias: {
                map: [["~", "./src"]],
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
};
