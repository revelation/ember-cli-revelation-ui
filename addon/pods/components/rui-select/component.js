import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  // Heavily leveraged from:
  // http://emberjs.com/deprecations/v1.x/#toc_ember-select
  // http://emberjs.jsbin.com/fotuqa
  layout: layout,
  tagName: 'span',

  // possible passed-in values with their defaults:
  content: null,
  prompt: null,
  optionValuePath: 'id',
  optionLabelPath: 'title',
  selection: null,
  action: Ember.K, // action to fire on change

  // create id'ed object from model value
  // to easily compare and simultaniously update
  // model property directly
  // only necessary on initialization
  selectedOption: Ember.computed('selection', function(){
    return { id: this.get('selection') };
  }),

  init() {
    this._super(...arguments);
    if (!this.get('content')) {
      this.set('content', []);
    }
  },

  actions: {
    change() {
      const selectEl = this.$('select')[0];
      const selectedIndex = selectEl.selectedIndex;
      const content = this.get('content');

      // decrement index by 1 if we have a prompt
      const hasPrompt = !!this.get('prompt');
      const contentIndex = hasPrompt ? selectedIndex - 1 : selectedIndex;

      // Return just a single string or integer value via the mut helper
      const selection = content[contentIndex];
      const optionValuePath = this.get('optionValuePath');
      const selectionValue = selection[optionValuePath];

      const changeCallback = this.get('action');
      changeCallback(selectionValue);
    }
  }
});
