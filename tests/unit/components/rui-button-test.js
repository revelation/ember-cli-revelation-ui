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
  var component = this.subject();
  this.render();

  // NOTE: `tagName` comparison is case-sensitive
  assert.equal(
    this.$().get(0).tagName.toLowerCase(), 'button',
    'it renders the component with an `button` tag'
  );
});

test('it adds style class when style property is set', function(assert) {
  assert.expect(8);
  var component = this.subject();
  this.render();

  assert.ok(
    this.$().hasClass('btn-secondary'),
    'it should default to `btn-secondary` class when no style is set'
  );

  Ember.run(function(){
    component.set('style', 'wrongstyle');
  });
  assert.ok(
    this.$().hasClass('btn-secondary'),
    'it should default to `btn-secondary` class when (unsupported) style is set to `wrongstyle`'
  );

  Ember.run(function(){
    component.set('style', 'primary');
  });
  assert.ok(
    this.$().hasClass('btn-primary'),
    'it should have `btn-primary` class when style is set to `primary`'
  );

  Ember.run(function(){
    component.set('style', 'success');
  });
  assert.ok(
    this.$().hasClass('btn-success'),
    'it should have `btn-success` class when style is set to `success`'
  );

  Ember.run(function(){
    component.set('style', 'danger');
  });
  assert.ok(
    this.$().hasClass('btn-danger'),
    'it should have `btn-danger` class when style is set to `danger`'
  );

  Ember.run(function(){
    component.set('style', 'warning');
  });
  assert.ok(
    this.$().hasClass('btn-warning'),
    'it should have `btn-warning` class when style is set to `warning`'
  );

  Ember.run(function(){
    component.set('style', 'info');
  });
  assert.ok(
    this.$().hasClass('btn-info'),
    'it should have `btn-info` class when style is set to `info`'
  );

  Ember.run(function(){
    component.set('style', 'link');
  });
  assert.ok(
    this.$().hasClass('btn-link'),
    'it should have `btn-link` class when style is set to `link`'
  );
});

test('it adds size class when size property is set', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();

  Ember.run(function(){
    component.set('size', 'lg');
  });
  assert.ok(
    this.$().hasClass('btn-lg'),
    'it should have `btn-lg` class when size is set to `lg`'
  );

  Ember.run(function(){
    component.set('size', 'sm');
  });
  assert.ok(
    this.$().hasClass('btn-sm'),
    'it should have `btn-sm` class when size is set to `sm`'
  );
});

test('it displays block class when block property is set', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();

  assert.notOk(
    this.$().hasClass('btn-block'),
    'it should not have `btn-block` by default'
  );

  Ember.run(function(){
    component.set('block', true);
  });
  assert.ok(
    this.$().hasClass('btn-block'),
    'it should have `btn-block` class when block is set to `true`'
  );
});

test('it disables when disable property is set to true', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();

  assert.notEqual(
    this.$().attr('disabled'), 'disabled',
    'it should not be disabled by default'
  );

  Ember.run(function(){
    component.set('disabled', true);
  });

  assert.equal(
    this.$().attr('disabled'), 'disabled',
    'it should be disabled when disabled property is set to `true`'
  );
});
