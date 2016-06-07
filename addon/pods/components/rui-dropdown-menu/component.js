import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: 'dropdown-menu',
  classNameBindings: 'alignComputed',
  attributeBindings: [
    'aria-labelledby',
    'data-test-id'
  ],

  // Defaults
  prefixClass: 'dropdown-menu-',
  align: null,

  // Constructors
  alignments: ['left', 'right'],

  // Accessibility
  'aria-labelledby': null,

  // Computed
  alignComputed: Ember.computed('align', function(){
    var alignments = this.get('alignments');
    var align = this.get('align');

    if (!align) {
      return null;
    }

    if (alignments.indexOf(align) === -1) {
      Ember.Logger.warn('rui-dropdown-menu: You specified and unsupported `align` property so we`ve defaulted to the standard left alignment. Choose from `left` or `right.`');
      return null;
    }

    return this.get('prefixClass') + align;
  })
});
