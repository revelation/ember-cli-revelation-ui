import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'i',
  classNames: ['fa', 'fa-spin', 'fa-circle-o-notch'],
  classNameBindings: ['sizeComputed'],

  // Defaults
  size: null,
  sizes: ['lg'],

  // Computed
  sizeComputed: Ember.computed('size', function() {
    var sizes = this.get('sizes');
    var findSize = this.get('size');
    var resolvedSize = findSize;

    if (!findSize) {
      return null;
    }

    if (sizes.indexOf(findSize) === -1) {
      Ember.Logger.warn('rui-spinner: You specified an unsupported \'size\' property, so we\'ve set it to the standard size. Please either omit the attribute for standard size or choose from one of the following: [\'lg\'].');
      return null;
    }

    return 'rui-spinner-' + resolvedSize;
  })
});
