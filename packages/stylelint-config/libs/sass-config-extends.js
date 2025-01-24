'use strict'

module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {

    /* 禁用空行注释前的空行 */
    'scss/double-slash-comment-empty-line-before': null,

    /* 禁用变量前的空行 */
    'scss/dollar-variable-empty-line-before': null,

    /* 允许未知 at 规则，但忽略特定的 at 规则 */
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'responsive',
          'screen'
        ]
      }
    ]
  }
}
