module.exports = {
    "env": {
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": ["@typescript-eslint/parser", "babel-eslint"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: ['.jsx', 'js']
        }
      ]
      "import/prefer-default-export": 'off'
    },
    "settings": {
      "import/resolver": {
        "babel-plugin-root-import": {
          rootPathSuffix: "src"
        }
      }
    }
  
  };