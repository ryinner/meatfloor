module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-multi-spaces": "warn",
        "brace-style": "error",
        "comma-spacing": "warn",
        "func-call-spacing": [
            "error",
            "never"
        ],
        "implicit-arrow-linebreak": [
            "warn",
            "beside"
        ],
        "no-multiple-empty-lines": "error"
    }
};
