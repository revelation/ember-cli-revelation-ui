import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['styleComputed', 'sizeComputed', 'blockComputed'],

  // Defaults
  style: 'default', //default
  size: null, //default
  block: false,  //default

  // Constructors
  classPrefix: 'btn',
  styles: ['default', 'primary', 'success', 'warning', 'danger', 'info', 'link'],
  sizes: ['lg', 'sm', 'xs'],

  // Computed
  styleComputed: Ember.computed('style', function() {
    // Builds style button class
    var styles = this.get('styles');
    var findStyle = this.get('style');
    var resolvedStyle = findStyle;

    if (styles.indexOf(findStyle) === -1) {
      resolvedStyle = 'default';
      Ember.Logger.warn('rui-button: You specified and unsupported \'style\' property so we\'ve defaulted to the default style: choose from \'default primary success warning danger info link.\'');
    }

    return this.get('classPrefix') + '-' + resolvedStyle;
  }),

  sizeComputed: Ember.computed('size', function() {
    // Builds size button class
    var sizes = this.get('sizes');
    var findSize = this.get('size');
    var resolvedSize = findSize;

    if (findSize === null) {
      return null;
    }

    if (sizes.indexOf(findSize) === -1) {
      Ember.Logger.warn('rui-button: You specified and unsupported \'size\' property so we\'ve defaulted to the standard size: choose from \'lg sm xs or omit for standard size.\'');
      return null;
    }

    return this.get('classPrefix') + '-' + resolvedSize;
  }),

  blockComputed: Ember.computed('block', function() {
    if (this.get('block')) {
      return this.get('classPrefix') + '-block';
    } else {
      return null;
    }
  })




});
