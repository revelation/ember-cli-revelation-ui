import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rui-avatar', 'Unit | Component | rui avatar', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();

  // NOTE: `tagName` comparison is case-sensitive
  assert.equal(
    this.$().get(0).tagName.toLowerCase(), 'span',
    'it renders the component with an `span` tag'
  );
  assert.ok(
    this.$().hasClass('rui-avatar'),
    'it renders with the base class `rui-avatar`'
  );
});

test('it displays the correct image', function(assert) {
  assert.expect(3);
  var component = this.subject();
  this.render();

  assert.equal(
    this.$().text().trim(), '',
    'it should fallback to a placeholder when a `src` is not supplied'
  );

  Ember.run(function() {
    component.set('src', '');
  });
  assert.equal(
    this.$().text().trim(), '',
    'it should fallback to a placeholder when `src` is empty'
  );

  Ember.run(function() {
    component.set('src', 'http://placehold.it/32x32');
  });
  assert.equal(
    this.$().children().attr('src'), 'http://placehold.it/32x32',
    'it should display the provided `src` image'
  );
});

test('it adds the size class when specified', function(assert) {
  assert.expect(3);
  var component = this.subject();
  this.render();

  assert.notOk(
    this.$().hasClass('rui-avatar-sm') || this.$().hasClass('rui-avatar-lg'),
    'it should not have a size class when no size is specified'
  );

  Ember.run(function(){
    component.set('size', 'sm');
  });
  assert.ok(
    this.$().hasClass('rui-avatar-sm'),
    'it should have the `rui-avatar-sm` class when the size is set to `sm`'
  );

  Ember.run(function(){
    component.set('size', 'lg');
  });
  assert.ok(
    this.$().hasClass('rui-avatar-lg'),
    'it should have `rui-avatar-lg` class when size is set to `lg`'
  );
});
