module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "ignorePatterns": [
        "node_modules",
        "build",
        "dist",
        "public"
    ],
    "settings": {
        "react": {
            "version": 'detect'
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
        "prettier"
    ],
    "rules": {
        "eqeqeq": "error",
        "no-console": ["error", { allow: ["warn", "error"] }],
        "arrow-spacing": ["error",{ "before": true, "after": true }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        'react/prop-types': 'off',
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off'
    }
}
