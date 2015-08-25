import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'button',
  type: 'button',
  classNames: ['dropdown-toggle'],
  classNameBindings: ['computedStyle', 'computedSize'],
  attributeBindings: ['type', 'role', 'data-toggle', 'haspopup', 'aria-expanded'],
  id: '',

  //Defaults
  role: 'button',
  style: null,
  size: null,

  //Constructors
  classPrefix: 'btn',
  styles: ['default', 'primary', 'success', 'warning', 'danger', 'info', 'link'],
  sizes: ['lg', 'sm', 'xs'],

  // Data Attrs, required by bootstrap
  'data-toggle': 'dropdown',

  // Accessibility
  haspopup: 'true',
  'aria-expanded': 'false',

  // Computed
  computedStyle: Ember.computed('style', function(){
    // Builds size button class
    // Should not have any btn class by default to allow for custom classing

    var styles = this.get('styles');
    var findStyle = this.get('style');
    var resolvedStyle = findStyle;

    if (!findStyle) {
      return null;
    }

    if (styles.indexOf(findStyle) === -1) {
      Ember.Logger.warn('rui-button: You specified and unsupported \'style\' property so we\'ve defaulted to the default style: choose from \'default primary success warning danger info link.\'');
      return null;
    }

    return 'btn ' + this.get('classPrefix') + '-' + resolvedStyle;
  }),

  sizeComputed: Ember.computed('size', function() {
    // Builds size button class
    var sizes = this.get('sizes');
    var findSize = this.get('size');
    var resolvedSize = findSize;

    if (!findSize) {
      return null;
    }

    if (sizes.indexOf(findSize) === -1) {
      Ember.Logger.warn('rui-button: You specified and unsupported \'size\' property so we\'ve defaulted to the standard size: choose from \'lg sm xs or omit for standard size.\'');
      return null;
    }

    return this.get('classPrefix') + '-' + resolvedSize;
  })

});
