/* global QUnit */

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rui-nav-brand-dropdown', 'Integration | Component | rui nav brand dropdown', {
  integration: true
});

// TODO: This component spits out HTML stubs. Proper tests need to be written
//   when the component becomes more dynamic.
QUnit.skip('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rui-nav-brand-dropdown}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rui-nav-brand-dropdown}}
      template block text
    {{/rui-nav-brand-dropdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
