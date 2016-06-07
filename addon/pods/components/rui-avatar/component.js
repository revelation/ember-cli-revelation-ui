import Ember from 'ember'
import layout from './template'

const {
  Component,
  computed,
  Logger
} = Ember

export default Component.extend({
  layout: layout,
  tagName: 'span',
  classNames: ['rui-avatar'],
  classNameBindings: ['sizeComputed'],

  src: '', //passed in
  showPlaceholder: computed('src', function() {
    const src = this.get('src')
    return src === undefined || src === ''
  }),

  // Constructors
  classPrefix: 'rui-avatar',
  sizes: ['lg', 'sm'],

  // Computed
  sizeComputed: computed('size', function() {
    const sizes = this.get('sizes')
    const findSize = this.get('size')
    const resolvedSize = findSize

    if (!findSize) {
      return null
    }

    if (sizes.indexOf(findSize) === -1) {
      Logger.warn('rui-avatar: You specified an unsupported \'size\' property, so we\'ve set it to the standard size. Please either omit the attribute for standard size or choose from one of the following: [\'lg\', \'sm\'].')
      return null
    }

    return this.get('classPrefix') + '-' + resolvedSize
  })
})
