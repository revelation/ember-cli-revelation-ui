import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rui-button', 'Integration | Component | rui button', {
  integration: true,
});

test('it changes color', function(assert){
  assert.expect(2);

  this.render(hbs`
    {{#rui-button style='default'}}
      template block text
    {{/rui-button}}
  `);




  console.log(color1 + ', ' + color2 + ', ' + this.get('style'));

  this.set('style', 'danger');

  var color2 = this.$().css('background-color');

  console.log(color1 + ', ' + color2 + ', ' + this.get('style'));

  assert.notEqual(color1, color2, 'These colors are the same!');

});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rui-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rui-button}}
      template block text
    {{/rui-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
