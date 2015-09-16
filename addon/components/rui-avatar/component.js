import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'img',
  attributeBindings: ['src'],
  classNames: ['rui-avatar'],
  classNameBindings: ['sizeComputed'],

  // Defaults
  src: 'http://placehold.it/32x32?text=%20',

  // Constructors
  classPrefix: 'rui-avatar',
  sizes: ['lg', 'sm'],

  // Computed
  sizeComputed: Ember.computed('size', function() {
    var sizes = this.get('sizes');
    var findSize = this.get('size');
    var resolvedSize = findSize;

    if (!findSize) {
      return null;
    }

    if (sizes.indexOf(findSize) === -1) {
      Ember.Logger.warn('rui-avatar: You specified an unsupported \'size\' property, so we\'ve set it to the standard size. Please either omit the attribute for standard size or choose from one of the following: [\'lg\', \'sm\'].');
      return null;
    }

    return this.get('classPrefix') + '-' + resolvedSize;
  })
});
