import Ember from 'ember'
import layout from './template'

const {
  Component,
  computed,
  Logger
} = Ember

export default Component.extend({
  layout: layout,
  tagName: 'button',
  classNames: ['dropdown-toggle'],
  classNameBindings: ['computedStyle'],
  attributeBindings: [
    'aria-expanded',
    'aria-haspopup',
    'data-test-id',
    'data-toggle',
    'type'
  ],

  //Defaults
  size: null,
  style: null,
  type: 'button',

  //Constructors
  classPrefix: 'btn',
  styles: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'link'],

  // Data Attrs, required by bootstrap
  'data-toggle': 'dropdown',

  // Accessibility
  'aria-haspopup': 'true',
  'aria-expanded': 'false',

  // Computed
  computedStyle: computed('style', function(){
    // Builds size button class
    // Should not have any btn class by default to allow for custom classing

    if (!this.get('style')) {
      return false
    }

    const styles = this.get('styles')
    const findStyle = this.get('style')
    const resolvedStyle = findStyle

    if (styles.indexOf(findStyle) === -1) {
      resolvedStyle = 'secondary'
      Logger.warn('rui-dropdown-trigger: You specified and unsupported \'style\' property so we\'ve defaulted to the secondary style: choose from \'primary secondary success warning danger info link.\'')
    }

    return 'btn ' + this.get('classPrefix') + '-' + resolvedStyle
  }),
})
