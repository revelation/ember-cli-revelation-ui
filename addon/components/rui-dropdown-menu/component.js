import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  classNames: 'dropdown-menu',
  classNameBindings: 'alignComputed',
  attributeBindings: ['aria-labelledby'],

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
      Ember.Logger.warn('rui-dropdown-trigger: You specified and unsupported \'align\' property so we\'ve defaulted to the standard left alignment: choose from \'left right.\'');
      return null;
    }

    return this.get('prefixClass') + align;
  })
});
