'use strict'

module.exports = {
  extends: ['stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      'declarations',
      'custom-properties',
      'dollar-variables',
      'rules'
    ]
  }
}
