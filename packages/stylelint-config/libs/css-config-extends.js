'use strict'

module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {

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
    ],

    /** 允许未知伪元素，但忽略特定的伪元素 */
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: [
          'v-deep', // Vue 的深度选择器
          ':deep', // 通用的深度选择器
          ':slotted', // Web Components 的插槽选择器
          ':global' // CSS Modules 的全局选择器
        ]
      }
    ],

    /** 允许未知伪类，但忽略特定的伪类 */
    'selector-pseudo-class-no-unknown': [
      true,
      {

        /** 忽略 global 和 deep 伪类 */
        ignorePseudoClasses: [
          'global',
          'deep',
          'slotted'
        ]
      }
    ],

    /** 允许未知 at 规则，但忽略特定的 at 规则 */
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          '@tailwind',
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen'
        ] // Tailwind CSS 的 at 规则
      }
    ]


  }
}
