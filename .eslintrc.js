module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "eslint-config-prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 11
    },
    "plugins": [
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error"
    }
};
