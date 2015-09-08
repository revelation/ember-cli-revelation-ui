import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'i',
  classNames: ['fa'],
  classNameBindings: ['typeComputed'],

  // Defaults
  type: 'spinner',

  // Constructors
  classPrefix: 'fa',
  // NOTE: Supported spinner icons.
  types: ['circle-o-notch', 'cog', 'gear', 'refresh', 'spinner'],

  // Computed
  typeComputed: Ember.computed('style', function() {
    var types = this.get('types');
    var findType = this.get('type');
    var resolvedType = findType;

    if (types.indexOf(findType) === -1) {
      resolvedType = 'spinner';
      Ember.Logger.warn('rui-button: You specified an unsupported icon as a spinner, so we\'ve set it to the default, \'spinner\'. Please choose from one of the following: [\'circle-o-notch\', \'cog\', \'gear\', \'refresh\', \'spinner\'].');
    }

    return this.get('classPrefix') + '-' + resolvedType + ' fa-spin';
  })
});
