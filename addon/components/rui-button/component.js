import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['styleComputed', 'sizeComputed', 'blockComputed', 'isLoading'],
  attributeBindings: ['disabled'],
  disabled: false,
  isLoading: false,

  // Defaults
  style: 'secondary', //default
  size: null, //default
  block: false,  //default

  // Constructors
  classPrefix: 'btn',
  styles: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'link'],
  sizes: ['lg', 'sm'],

  // Computed
  styleComputed: Ember.computed('style', function() {
    // Builds style button class
    var styles = this.get('styles');
    var findStyle = this.get('style');
    var resolvedStyle = findStyle;

    if (styles.indexOf(findStyle) === -1) {
      resolvedStyle = 'secondary';
      Ember.Logger.warn('rui-button: You specified an unsupported \'style\' property, so we\'ve set it to the default \'secondary\' style. Please choose from one of the following: [\'primary\', \'secondary\', \'success\', \'info\', \'warning\', \'danger\', \'link\'].');
    }

    return this.get('classPrefix') + '-' + resolvedStyle;
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
      Ember.Logger.warn('rui-button: You specified an unsupported \'size\' property, so we\'ve set it to the standard size. Please either omit the attribute for standard size or choose from one of the following: [\'lg\', \'sm\'].');
      return null;
    }

    return this.get('classPrefix') + '-' + resolvedSize;
  }),

  blockComputed: Ember.computed('block', function() {
    // Builds block button class
    if (this.get('block')) {
      return this.get('classPrefix') + '-block';
    } else {
      return null;
    }
  }),

  //Actions
  click() {
    // Set action name via action property to be handled by application
    // Pass action params using properties with syntax param1=parameter1 param2=parameter2
    // TBD: A bit fragile
    // Only works with 0, 1, or 2 params
    // Only verifies property is prefixed with param
    // Ensure touch support

    var properties = this.attrs;
    var params = [];
    for (var property in properties) {
      if (property.indexOf('param') === 0) {
        params.push(property);
      }
    }
    var l = params.length;

    if (l > 2) {
      Ember.Logger.warn('rui-button: You specified an unsupported \'size\' property so we\'ve defaulted to the standard size: choose from \'lg sm xs or omit for standard size.\'');
      this.sendAction('action', this.get('param1'), this.get('param2'));
    } else if (l > 1) {
      this.sendAction('action', this.get('param1'), this.get('param2'));
    } else if (l > 0) {
      this.sendAction('action', this.get('param1'));
    } else {
      // According to docs, this does nothing if no action specified
      this.sendAction('action');
    }
  }

});
