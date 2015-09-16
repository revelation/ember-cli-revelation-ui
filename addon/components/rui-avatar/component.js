import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'img',
  attributeBindings: ['computedSrc:src'],
  classNames: ['rui-avatar'],
  classNameBindings: ['sizeComputed'],

  // Defaults
  computedSrc: Ember.computed('src', function() {
    // `src` is supplied
    if (this.get('src') !== '') {
      return this.get('src');
    }
    // `src` is empty
    if (this.get('src') === '') {
      Ember.Logger.warn('rui-avatar: You did not specify a `src`, so we have set it to a placeholder image. Please specify a `src`.');
      return 'http://placehold.it/32?text=%20';
    }
  }),
  src: Ember.computed('src', function() {
    // `src` is not supplied
    Ember.Logger.warn('rui-avatar: You did not specify a `src`, so we have set it to a placeholder image. Please specify a `src`.');
    return 'http://placehold.it/32?text=%20';
  }),

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
