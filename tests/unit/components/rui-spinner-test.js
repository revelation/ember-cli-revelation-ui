import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rui-spinner', 'Unit | Component | rui spinner', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(3);
  var component = this.subject();
  this.render();

  // NOTE: `tagName` comparison is case-sensitive
  assert.equal(
    this.$().get(0).tagName.toLowerCase(), 'i',
    'it renders the component with an `i` tag'
  );

  assert.ok(
    this.$().hasClass('fa'),
    'it renders with the base class `fa`'
  );

  assert.ok(
    this.$().hasClass('fa-circle-o-notch'),
    'it renders with the correct spinner icon'
  );
});

test('it adds size class when size property is set', function(assert) {
  assert.expect(3);
  var component = this.subject();
  this.render();

  assert.notOk(
    this.$().hasClass('rui-spinner-lg'),
    'it should not have a size class when no size is specified'
  );

  Ember.run(function(){
    component.set('size', 'wrongsize');
  });
  assert.notOk(
    this.$().hasClass('rui-spinner-lg'),
    'it should default to the standard size when an unsupported size is applied'
  );

  Ember.run(function(){
    component.set('size', 'lg');
  });
  assert.ok(
    this.$().hasClass('rui-spinner-lg'),
    'it should have `rui-spinner-lg` class when size is set to `lg`'
  );
});
