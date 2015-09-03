import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rui-nav-brand-dropdown', 'Integration | Component | rui nav brand dropdown', {
  integration: true
});

test('it renders', function(assert) {
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
