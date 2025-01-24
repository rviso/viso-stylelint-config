module.exports = {
  cache: false,
  overrides: [
    {
      files: ['**/*.css'],
      extends: [
        './libs/css-config-extends.js',
        './libs/order-config-extends.js',
        './libs/stylistic-plugin-extends.js',
        './libs/disable-config-extends.js'
      ]
    },
    {
      files: ['**/*.(html)'],
      customSyntax: 'postcss-html',
      extends: [
        './libs/css-config-extends.js',
        './libs/order-config-extends.js',
        './libs/stylistic-plugin-extends.js',
        './libs/disable-config-extends.js'
      ]
    },
    {
      // Vue中默认使用scss lang
      files: ['**/*.(vue)'],
      customSyntax: 'postcss-html',
      extends: [
        './libs/css-config-extends.js',
        './libs/order-config-extends.js',
        './libs/stylistic-plugin-extends.js',
        './libs/disable-config-extends.js'
      ]
    },
    {
      files: ['**/*.{scss,sass}'],
      customSyntax: 'postcss-scss',
      extends: [
        './libs/css-config-extends.js',
        './libs/order-config-extends.js',
        './libs/stylistic-plugin-extends.js',
        './libs/sass-config-extends.js',
        './libs/disable-config-extends.js'
      ]
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
      defaultSeverity: 'warning',
      severity: 'warning',
      extends: [
        './libs/css-config-extends.js',
        './libs/order-config-extends.js',
        './libs/stylistic-plugin-extends.js',
        './libs/less-config-extends.js',
        './libs/disable-config-extends.js'
      ]
    }
  ]
}
