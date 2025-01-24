'use strict'

module.exports = {
  rules: {

    /* 禁用禁止重复声明的规则 */
    'declaration-block-no-duplicate-properties': null,

    /* 禁用媒体查询无效检查的规则 */
    'media-query-no-invalid': null,

    /* 禁用 URL 引号检查的规则 */
    'function-url-quotes': null,

    /* 禁用类名模式检查的规则 */
    'selector-class-pattern': null,

    /* 禁用选择器特异性递减检查的规则 */
    'no-descending-specificity': null,

    /* 禁用空源文件检查的规则 */
    'no-empty-source': null,

    /* 禁用字体族缺少通用族关键字检查的规则 */
    'font-family-no-missing-generic-family-keyword': null,

    /** 禁止使用不合法的选择器 */
    'selector-not-notation': null,

    /** 禁止使用可以缩写却不缩写的属性 */
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: [
          'inset',
          'left',
          'right',
          'top',
          'bottom'
        ]
      }
    ]
  }
}
