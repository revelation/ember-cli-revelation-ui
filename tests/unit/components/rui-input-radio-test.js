import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rui-input-radio', 'Unit | Component | rui input radio', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();

  assert.ok(
    this.$().hasClass('radio'),
    'it renders with the base class `radio`'
  );
});

test('it disables when disable property is set to true', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();

  assert.notOk(
    this.$().hasClass('disabled'),
    'it should not be disabled by default'
  );

  Ember.run(function(){
    component.set('disabled', true);
  });
  assert.ok(
    this.$().hasClass('disabled'),
    'it should be disabled when disabled property is set to `true`'
  );
});
