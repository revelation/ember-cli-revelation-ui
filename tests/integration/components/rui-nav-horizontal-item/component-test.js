import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rui-nav-horizontal-item', 'Integration | Component | rui nav horizontal item', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rui-nav-horizontal-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rui-nav-horizontal-item}}
      template block text
    {{/rui-nav-horizontal-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
