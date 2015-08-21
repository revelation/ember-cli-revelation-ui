import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rui-button', 'Unit | Component | rui button test', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Creates the component instance
  var component = this.subject();
  // Renders the component to the page
  this.render();
  assert.equal(this.$().text().trim(), '');
});

test('it changes color when style property is set', function(assert) {
  assert.expect(1);
  var component = this.subject();

  this.render();
  var color1 = this.$().css('background-color');

  Ember.run(function(){
    component.set('style', 'primary');
  });
  var color2 = this.$().css('background-color');

  assert.notEqual(color2, color1);
});
