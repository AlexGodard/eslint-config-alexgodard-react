module.exports = {
    "extends": ["airbnb", "@alexgodard/eslint-config-alexgodard-base", "prettier"],
    "plugins": [
        "react-hooks",
        "react",
    ],
    "rules": {
        "react/prop-types": 0,
        "react/require-default-props": 0,
        "react/no-danger": 0,
        "react/jsx-props-no-spreading": 0,
        "react/function-component-definition": 0,
        "unicorn/no-null": 0,
        "react/jsx-filename-extension": [1,
            {
                "extensions": [
                    ".tsx", ".jsx"
                ]
            }
        ]
    }
};
