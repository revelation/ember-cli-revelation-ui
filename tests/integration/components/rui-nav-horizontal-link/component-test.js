/* global QUnit */

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rui-nav-horizontal-link', 'Integration | Component | rui nav horizontal link', {
  integration: true
});

// NOTE: Quarantined pending ability to extend LinkComponent. This may likely
//   wind up being removed entirely.
QUnit.skip('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rui-nav-horizontal-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rui-nav-horizontal-link}}
      template block text
    {{/rui-nav-horizontal-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
