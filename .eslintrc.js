module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
      ],
    // "parser": "babel-eslint",
    "parserOptions": {
      "parser": "babel-eslint"
        // "ecmaFeatures": {
        //     "jsx": true
        // },
        // "ecmaVersion": 2015,
        // "sourceType": "module"
    },
    plugins: [
        "html"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off"
    }
};