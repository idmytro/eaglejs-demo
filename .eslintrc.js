module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    // 'no-new': 'off',
    camelcase: [
      'off',
      {
        properties: 'never'
      }
    ],
    "max-len": [0, 120, 4, { "ignoreUrls": true }],

    'vue/name-property-casing': 'off',
    'vue/attribute-hyphenation': 'off',

    "vue/html-closing-bracket-newline": ["error", {
      "multiline": "always"
    }],
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "never"
    }]
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    'vue'
  ]
};
