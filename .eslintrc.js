module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "react/jsx-indent": ["warn", 4],
        "react/forbid-prop-types": ["warn", {"forbid": ["any"]}],
        "quotes": ["warn", "double"],
        "indent": ["warn", 4],
        "indent-size": [true, 2],
    }
};