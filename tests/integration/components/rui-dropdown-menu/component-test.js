import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rui-dropdown-menu', 'Integration | Component | rui dropdown menu', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rui-dropdown-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rui-dropdown-menu}}
      template block text
    {{/rui-dropdown-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
