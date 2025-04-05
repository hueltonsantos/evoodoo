var globals = require('globals');
jsdoc = require("eslint-plugin-jsdoc");

const config = [{
    plugins: {
      jsdoc,
    },

    languageOptions: {
        globals: {
            _: "readonly",
            $: "readonly",
            fuzzy: "readonly",
            jQuery: "readonly",
            moment: "readonly",
            odoo: "readonly",
            openerp: "readonly",
            owl: "readonly",
            luxon: "readonly",
            ...globals.browser,
        },

        ecmaVersion: 2024,
        sourceType: "script",
    },

    rules: {
        "accessor-pairs": "warn",
        "array-callback-return": "warn",
        "callback-return": "warn",
        "capitalized-comments": ["warn", "always", {
            ignoreConsecutiveComments: true,
            ignoreInlineComments: true,
        }],
        complexity: ["warn", 15],
        "constructor-super": "warn",
        "dot-notation": "warn",
        eqeqeq: "warn",
        "global-require": "warn",
        "handle-callback-err": "warn",
        "id-blacklist": "warn",
        "id-match": "warn",
        "init-declarations": "error",
        "max-depth": "warn",
        "max-nested-callbacks": "warn",
        "max-statements-per-line": "warn",
        "no-alert": "warn",
        "no-array-constructor": "warn",
        "no-caller": "warn",
        "no-case-declarations": "warn",
        "no-class-assign": "warn",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-constant-condition": "warn",
        "no-control-regex": "warn",
        "no-debugger": "error",
        "no-delete-var": "warn",
        "no-div-regex": "warn",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "warn",
        "no-empty-character-class": "warn",
        "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-empty": "warn",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-boolean-cast": "warn",
        "no-extra-label": "warn",
        "no-fallthrough": "warn",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": ["warn", {
            allow: ["~"],
        }],
        "no-implicit-globals": "warn",
        "no-implied-eval": "warn",
        "no-inline-comments": "warn",
        "no-inner-declarations": "warn",
        "no-invalid-regexp": "warn",
        "no-irregular-whitespace": "warn",
        "no-iterator": "warn",
        "no-label-var": "warn",
        "no-labels": "warn",
        "no-lone-blocks": "warn",
        "no-lonely-if": "error",
        "no-mixed-requires": "error",
        "no-multi-str": "warn",
        "no-native-reassign": "error",
        "no-negated-condition": "warn",
        "no-negated-in-lhs": "error",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-require": "warn",
        "no-new-symbol": "warn",
        "no-new-wrappers": "warn",
        "no-new": "warn",
        "no-obj-calls": "warn",
        "no-octal-escape": "warn",
        "no-octal": "warn",
        "no-param-reassign": "warn",
        "no-path-concat": "warn",
        "no-process-env": "warn",
        "no-process-exit": "warn",
        "no-proto": "warn",
        "no-prototype-builtins": "warn",
        "no-redeclare": "warn",
        "no-regex-spaces": "warn",
        "no-restricted-globals": "warn",
        "no-restricted-imports": "warn",
        "no-restricted-modules": "warn",
        "no-restricted-syntax": "warn",
        "no-return-assign": "error",
        "no-script-url": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-shadow-restricted-names": "warn",
        "no-shadow": "warn",
        "no-sparse-arrays": "warn",
        "no-sync": "warn",
        "no-this-before-super": "warn",
        "no-throw-literal": "warn",
        "no-undef-init": "warn",
        "no-undef": "error",
        "no-unmodified-loop-condition": "warn",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-vars": "error",
        "no-use-before-define": "error",
        "no-useless-call": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-escape": "warn",
        "no-useless-rename": "warn",
        "no-void": "warn",
        "no-with": "warn",
        "operator-assignment": ["error", "always"],
        "prefer-const": "warn",
        radix: "warn",
        "require-yield": "warn",
        "sort-imports": "warn",
        "spaced-comment": ["error", "always"],
        strict: ["error", "function"],
        "use-isnan": "error",

        "jsdoc/check-tag-names": "warn",
        "jsdoc/check-types": "warn",
        "jsdoc/require-param-description": "off",
        "jsdoc/require-return": "off",
        "jsdoc/require-return-description": "off",
        "jsdoc/require-return-type": "off",

        "valid-typeof": "warn",
        yoda: "warn",
    },

    settings: {
        jsdoc: {
            tagNamePreference: {
                arg: "param",
                argument: "param",
                augments: "extends",
                constructor: "class",
                exception: "throws",
                func: "function",
                method: "function",
                prop: "property",
                return: "returns",
                virtual: "abstract",
                yield: "yields",
            },
            preferredTypes: {
                array: "Array",
                bool: "Boolean",
                boolean: "Boolean",
                number: "Number",
                object: "Object",
                str: "String",
                string: "String",
            },
        },
    },

}, {
    files: ["**/*.esm.js"],

    languageOptions: {
        ecmaVersion: 2024,
        sourceType: "module",
    },
}];

module.exports = config
