'use strict'

module.exports = {
  extends: ['stylelint-config-standard-less'],
  rules: {
    'less/color-no-invalid-hex': null,
    'less/no-duplicate-variables': null, // 忽略重复变量
    'no-invalid-position-at-import-rule': null,
    'import-notation': null,
    'function-name-case': null, // 忽略函数名大小写
    'at-rule-no-unknown': null, // 关闭未知 at-rule 检查
    'property-no-unknown': null, // 关闭未知属性检查
    'function-no-unknown': null // 关闭未知函数检查
  }
}
