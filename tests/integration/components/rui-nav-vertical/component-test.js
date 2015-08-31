import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rui-nav-vertical', 'Integration | Component | rui nav vertical', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rui-nav-vertical}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rui-nav-vertical}}
      template block text
    {{/rui-nav-vertical}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
